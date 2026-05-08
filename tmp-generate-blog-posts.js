const fs = require("fs");
const path = require("path");

const root = process.cwd();
const uk = JSON.parse(
	fs.readFileSync(path.join(root, "public/locales/uk/translation.json"), "utf8")
);
const ru = JSON.parse(
	fs.readFileSync(path.join(root, "public/locales/ru/translation.json"), "utf8")
);
const blogImagesSrc = fs.readFileSync(
	path.join(root, "src/dictionary/blogImages.js"),
	"utf8"
);

const imageMap = {};
const regex =
	/id:\s*(\d+),[\s\S]*?img:\s*imgSrcMaker\("([^"]+)"\),[\s\S]*?imgWebp:\s*imgSrcMaker\("([^"]+)"\),[\s\S]*?date:\s*"([^"]+)"/g;

let match;
while ((match = regex.exec(blogImagesSrc)) !== null) {
	const [, id, img, imgWebp, date] = match;
	imageMap[Number(id)] = { img, imgWebp, date };
}

const layouts = {
	1: [
		{ type: "paragraph", key: "intro" },
		{ type: "title", key: "listTitle" },
		{ type: "ordered-list", key: "listItems" },
		{ type: "paragraph", key: "conclusions" },
		{ type: "title", key: "subtitle" },
		{ type: "paragraph", key: "advice" },
	],
	2: [
		{ type: "paragraph", key: "intro" },
		{ type: "unordered-list", key: "general1", className: "content__list" },
		{
			type: "unordered-list",
			key: "dialog",
			className: "list-sea",
			itemClassName: "article-contet__dialog",
		},
		{ type: "unordered-list", key: "general2", className: "content__list" },
		{ type: "title", key: "listTitle" },
		{ type: "ordered-list", key: "listItems" },
		{ type: "paragraph", key: "advice" },
	],
	3: [
		{ type: "paragraph", key: "intro" },
		{ type: "unordered-list", key: "general", className: "content__list" },
		{ type: "title", key: "listTitle" },
		{
			type: "unordered-list",
			key: "listItems",
			className: "list-sea",
			itemClassName: "list-sea__item",
		},
		{ type: "paragraph", key: "advice" },
	],
	4: [
		{ type: "paragraph", key: "intro" },
		{ type: "unordered-list", key: "general", className: "content__list" },
	],
	5: [
		{ type: "paragraph", key: "intro" },
		{ type: "unordered-list", key: "general", className: "content__list" },
	],
	6: [
		{ type: "paragraph", key: "intro" },
		{ type: "unordered-list", key: "general", className: "content__list" },
	],
	7: [{ type: "ordered-list", key: "listItems" }],
	8: [
		{ type: "paragraph", key: "intro" },
		{ type: "unordered-list", key: "general", className: "content__list" },
	],
	9: [
		{ type: "paragraph", key: "intro" },
		{ type: "unordered-list", key: "general", className: "content__list" },
		{ type: "title", key: "listTitle" },
		{
			type: "image",
			key: "content-photo-1",
			alt: { uk: "Графік", ru: "График" },
		},
		{ type: "unordered-list", key: "general1", className: "content__list" },
		{ type: "title", key: "subtitle" },
		{
			type: "image",
			key: "content-photo-2",
			alt: { uk: "Графік", ru: "График" },
		},
		{ type: "paragraph", key: "conclusions" },
	],
	10: [
		{ type: "paragraph", key: "intro" },
		{ type: "unordered-list", key: "general", className: "content__list" },
	],
	11: [
		{ type: "paragraph", key: "intro" },
		{ type: "unordered-list", key: "general", className: "content__list" },
	],
};

const blogPosts = Object.keys(imageMap)
	.map((idStr) => Number(idStr))
	.sort((a, b) => a - b)
	.map((id) => {
		const ukArticle = uk.blogpages[`article${id}`] || {};
		const ruArticle = ru.blogpages[`article${id}`] || {};

		return {
			id,
			date: imageMap[id].date,
			img: imageMap[id].img,
			imgWebp: imageMap[id].imgWebp,
			layout: layouts[id] || [],
			translations: {
				uk: {
					title: ukArticle.title || "",
					content: ukArticle.content || {},
				},
				ru: {
					title: ruArticle.title || "",
					content: ruArticle.content || {},
				},
			},
		};
	});

const output = `import { imgSrcMaker } from "helpers/imgSrcMaker";

export const blogPosts = ${JSON.stringify(blogPosts, null, 2)};

export const normalizeList = (value = "") =>
	value
		.split(/[&]/)
		.map((item) => item.trim())
		.filter(Boolean);

export const getPostLocale = (post, language) => {
	if (!post) return null;
	const normalizedLang = language === "ru" ? "ru" : "uk";
	return post.translations[normalizedLang] || post.translations.uk;
};

export const getBlogCards = (language) =>
	[...blogPosts]
		.sort((a, b) => b.id - a.id)
		.map((post) => {
			const locale = getPostLocale(post, language);
			return {
				id: post.id,
				date: post.date,
				img: imgSrcMaker(post.img),
				imgWebp: imgSrcMaker(post.imgWebp),
				title: locale?.title || "",
				intro: locale?.content?.intro || "",
			};
		});

export const getBlogPostById = (id, language) => {
	const numericId = Number(id);
	const post = blogPosts.find((item) => item.id === numericId);
	if (!post) return null;

	const locale = getPostLocale(post, language);

	return {
		...post,
		title: locale?.title || "",
		content: locale?.content || {},
		cover: {
			img: imgSrcMaker(post.img),
			imgWebp: imgSrcMaker(post.imgWebp),
		},
	};
};
`;

fs.mkdirSync(path.join(root, "src/content"), { recursive: true });
fs.writeFileSync(path.join(root, "src/content/blogPosts.js"), output, "utf8");
console.log("Generated src/content/blogPosts.js with", blogPosts.length, "posts");

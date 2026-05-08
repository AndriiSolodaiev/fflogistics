const fs=require('fs');const vm=require('vm');
const s=fs.readFileSync('src/content/blogPosts.js','utf8');
const m=s.match(/export const blogPosts\s*=\s*(\[[\s\S]*?\n\]);/);
const posts=vm.runInNewContext(m[1]);
for(const p of posts){
  const ru=p?.translations?.ru?.content||{};
  const keys=Object.keys(ru).filter(k=>/^para\d+$/.test(k)).sort((a,b)=>+a.slice(4)-+b.slice(4));
  for(let i=1;i<keys.length;i++){
    const a=ru[keys[i-1]], b=ru[keys[i]];
    if(typeof a==='string'&&typeof b==='string'&&a.trim()&&a===b){
      console.log(`DUP id=${p.id} ${keys[i-1]}=${keys[i]}`);
    }
  }
}

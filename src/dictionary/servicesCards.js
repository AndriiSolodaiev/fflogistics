import { imgSrcMaker } from "../helpers/imgSrcMaker";

export const servicesCards = [
  {
    id: 1,
    imgMobile: imgSrcMaker("mobile/ship-mobile.jpg"),
    imgMobile2x: imgSrcMaker("mobile/ship-mobile@2x.jpg"),
    imgTablet: imgSrcMaker("tablet/ship-tablet.jpg"),
    imgTablet2x: imgSrcMaker("tablet/ship-tablet@2x.jpg"),
    imgDesktop: imgSrcMaker("desktop/ship-desktop.jpg"),
    imgDesktop2x: imgSrcMaker("desktop/ship-desktop@2x.jpg"),
    alt: "ship",
    ref: "sea-transportation",
  },
  {
    id: 2,
    imgMobile: imgSrcMaker("mobile/plane-mobile.jpg"),
    imgMobile2x: imgSrcMaker("mobile/plane-mobile@2x.jpg"),
    imgTablet: imgSrcMaker("tablet/plane-tablet.jpg"),
    imgTablet2x: imgSrcMaker("tablet/plane-tablet@2x.jpg"),
    imgDesktop: imgSrcMaker("desktop/plane-desktop.jpg"),
    imgDesktop2x: imgSrcMaker("desktop/plane-desktop@2x.jpg"),
    alt: "plane",
    ref: "air-transportation",
  },
  {
    id: 3,
    imgMobile: imgSrcMaker("mobile/train-mobile.jpg"),
    imgMobile2x: imgSrcMaker("mobile/train-mobile@2x.jpg"),
    imgTablet: imgSrcMaker("tablet/train-tablet.jpg"),
    imgTablet2x: imgSrcMaker("tablet/train-tablet@2x.jpg"),
    imgDesktop: imgSrcMaker("desktop/train-desktop.jpg"),
    imgDesktop2x: imgSrcMaker("desktop/train-desktop@2x.jpg"),
    alt: "train",
    ref: "rail-transportation",
  },
];

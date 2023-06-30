import { imgSrcMaker } from "../helpers/imgSrcMaker";

export const paymenInfotCards = [
  {
    id: 1,
    src: imgSrcMaker("mobile/bank.png"),
    imgMobile: imgSrcMaker("mobile/bank-mobile.png"),
    imgMobile2x: imgSrcMaker("mobile/bank-mobile@2x.png"),
    imgTablet: imgSrcMaker("tablet/bank-tablet.png"),
    imgTablet2x: imgSrcMaker("tablet/bank-tablet@2x.png"),
    imgDesktop: imgSrcMaker("desktop/bank-desktop.png"),
    imgDesktop2x: imgSrcMaker("desktop/bank-desktop@2x.png"),
    alt: "bank transfers",
  },
  {
    id: 2,
    src: imgSrcMaker("mobile/wechat.png"),
    imgMobile: imgSrcMaker("mobile/wechat-mobile.png"),
    imgMobile2x: imgSrcMaker("mobile/wechat-mobile@2x.png"),
    imgTablet: imgSrcMaker("tablet/wechat-tablet.png"),
    imgTablet2x: imgSrcMaker("tablet/wechat-tablet@2x.png"),
    imgDesktop: imgSrcMaker("desktop/wechat-desktop.png"),
    imgDesktop2x: imgSrcMaker("desktop/wechat-desktop@2x.png"),
    alt: "Wechat/alipay transfers",
  },
  {
    id: 3,
    src: imgSrcMaker("mobile/payCard.png"),
    imgMobile: imgSrcMaker("mobile/paycard-mobile.png"),
    imgMobile2x: imgSrcMaker("mobile/paycard-mobile@2x.png"),
    imgTablet: imgSrcMaker("tablet/paycard-tablet.png"),
    imgTablet2x: imgSrcMaker("tablet/paycard-tablet@2x.png"),
    imgDesktop: imgSrcMaker("desktop/paycard-desktop.png"),
    imgDesktop2x: imgSrcMaker("desktop/paycard-desktop@2x.png"),
    alt: "payment in yuan",
  },
];

//定义设计稿的宽高
const designWidth = 1920;
const designHeight = 1080;

// 1px = 100 / 1920
// 10px = 100 / 1920 * 10

let styleUtil = {
  // px转vw
  px2vw: function (_px) {
    return (_px * 100.0) / designWidth + "vw";
  },
  // px转vh
  px2vh: function (_px) {
    return (_px * 100.0) / designHeight + "vh";
  },
};

export default styleUtil;

// 这段样式其实可以直接写入到对应的组件中，而非写入全局，完成项目后在进行优化。
// spin &#xe851;
// Aa &#xe6b1;
// 放大镜 &#xe624;
// 羽毛笔 &#xe645;

import {
  createGlobalStyle
} from 'styled-components';

const Iconfont = createGlobalStyle `
@font-face {
  font-family: "iconfont";
  src: url('iconfont.eot?t=1543305055340'); /* IE9*/
  src: url('iconfont.eot?t=1543305055340#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('iconfont.ttf?t=1543305055340') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('iconfont.svg?t=1543305055340#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-spin:before { content: "\\e851"; }

.icon-aa:before { content: "\\e6b1"; }

.icon-fangdajing:before { content: "\\e624"; }

.icon-yumaobi:before { content: "\\e645"; }

`;

export default Iconfont;
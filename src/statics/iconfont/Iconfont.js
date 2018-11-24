// 这段样式其实可以直接写入到对应的组件中，而非写入全局，完成项目后在进行优化。
import {
  createGlobalStyle
} from 'styled-components';

const Iconfont = createGlobalStyle `
@font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1542963480995');
  /* IE9*/
  src: url('./iconfont.eot?t=1542963480995#iefix') format('embedded-opentype'),
    /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAWUAAsAAAAACBQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8mkijY21hcAAAAYAAAABgAAABnLRaHXdnbHlmAAAB4AAAAawAAAHUHt7W5WhlYWQAAAOMAAAALwAAADYTXQgraGhlYQAAA7wAAAAgAAAAJAfhA4NobXR4AAAD3AAAAA4AAAAQEAAAAGxvY2EAAAPsAAAACgAAAAoBTgCkbWF4cAAAA/gAAAAeAAAAIAESAEpuYW1lAAAEGAAAAUUAAAJtPlT+fXBvc3QAAAVgAAAAMgAAAENjusYXeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeqTzbyNzwv4EhhrmBoQEozAiSAwDtPAy4eJztkLENgDAMBM9JQBFiDEpKxAZZhIr1slTWCI5NwRC8dZb9slw8MAFR2ZUEciMMXeqK+ZHF/MSpe9YK0LZWWu39O5nELrJOwT/IzK/V+vFucaTmWJbFMb86yANNiRWSeJw1UEFrE2EQnfm+/b7dsN3dxG42pWzabRIbTGugSfNtWdkFK0WkCrKIbUBK9SD2VpJjvXnxF3jSi3jZnjx6FgQjHgsepQGvEXrQS9k6TXFObx7v8d4MaEDDz9kESuDCGsQA122s15abfIlPQQ+7Ou9eohiJaGMzwXABK711dQs7XqVkIwl1YohvI7uHjmUaxrP891NhG1YRRVQd/mKPqtLwt1s7A8YGO61t35BEIBqfkxQxTeKUsVRZRbuE/AKsctFinx7kJ/kHQx5UA7I8HjIM/BeyUJD5LDnfsDT+b6UTGMDFK43xI/CgBiCoZG8ZmhJ0DyodFVa8TpggXlWnum3kfzIVifxsNMonUqA96r9NspnAcvD8vjbOjk+FOD3OxnEWv+t/R1OI/C9Jz0SkMtMsLOAkG2tXOu0nAFL+a/6VH0IL4PITqkF5OiVJj7aOnEKXmiipS4c+OSVqTxr7L99j0Li5ux7tzrvuwxum6Xb95/Wu2popVtXG2l1vL9wcGHOLW8OTjz++mGW2EW76c87SPL+9Ul4xZxcdjlE9MCxeu9P/dm31H96BYXJ4nGNgZGBgAGJbl/l74/ltvjJwszCAwA3ZRxII+n8zCxNzNZDLwcAEEgUAE1cJfAB4nGNgZGBgbvjfwBDDwsDA8P8fCxMDUAQFsAAAcfAEbHicY2FgYGBBwgAAsAARAAAAAAAAAGQApADqAAB4nGNgZGBgYGGwA2IQYAJiLiBkYPgP5jMAAA8gAV0AAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgIWRiZGZkYWRlYEpMZErLTEvPSUxKzMvnb2yNDcxPymTgQEAaGcH9wAA') format('woff'),
    url('./iconfont.ttf?t=1542963480995') format('truetype'),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./confont.svg?t=1542963480995#iconfont') format('svg'); 
  /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-aa:before {
  content: "\\e6b1";
}

.icon-fangdajing:before {
  content: "\\e624";
}

.icon-yumaobi:before {
  content: "\\e645";
}
`

export default Iconfont;
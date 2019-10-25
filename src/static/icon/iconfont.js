import { createGlobalStyle } from 'styled-components'

const GlobalIcon = createGlobalStyle `
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1571826969153'); /* IE9 */
    src: url('./iconfont.eot?t=1571826969153#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAKoAAsAAAAABmQAAAJdAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcApsgQMBNgIkAwgLBgAEIAWEbQcxG6oFyJ6aPAm0RT9YhIULbQDAEUG4Rs4meSAuIGlAMAJYfV2FLgtZYSpZERpxG2taYKNyvixfldk/JA+cT8m1Az/lptTs3Cbc5gaXh5lmgQ4im//3nPJ0PZ+4d/on0AcZ9c67XMYYNsbGSV2A0QQKcC+MIivGVMRrdpHPCTQaVZXeMVocUiWFvS4Q121TTZUKUUURC/VCbcPRIh6pUZ8epjeYjn4f/y2LEklNZm/dfXFopDq/8Eu+UT0cDwgxAk7XIGOBlELsb8zulBUil9WYzZmUOlZj8EtVBV5xVJcQ/zq7vhkMQ/1MGk/7qLIJFDRDrGs4tuzNzc3l3Pcd/PCH3u2BtxMr8woY9mPLuQsb+jj5NH/9mjs/DYxPBWWmhAKlT+p2evUq+YY7ghIqTgHDbaSmr65T/l39bo4IHufnU22+nhsOfXq/cyBaUT0v8g3U79Ub/o5mYE8xdLYnFU3TWEyGZc/a1KgRFS7Y6XeqvedWiqFezw3564xkyOrNIAu7ADWarECtepvRaL7x6SZdWFaUBszzTgjtPpG0eo2s3RdZ2B/U6PWHWu2RRaODoSubzAq7EkZV0ADtDrYeBuT6pBI37tA8eyrndRF/Qk7sBLTqzXJhjAHyEjuSi9kWISAOfRjRa+h5IUQcOqhL3RKJlEaDmj5U10M/VbEdQyqBDEBzB2y6UICCwaJS+f4OMp15VNzRVZc/QSxhzw5a6poDyLE5GNT1KO8kLkxtQhBAWMgHRrQIeTwhEDUvciCdqLMmpCOKhtOPhprr21v9vzsFjWxHCmduVrcQVFm3Uik=') format('woff2'),
    url('./iconfont.woff?t=1571826969153') format('woff'),
    url('./iconfont.ttf?t=1571826969153') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1571826969153#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon--search:before {
    content: "\e600";
  }
`

export default GlobalIcon




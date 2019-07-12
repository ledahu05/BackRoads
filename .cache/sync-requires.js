const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/chris/training/gatsby/BackRoads/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/chris/training/gatsby/BackRoads/src/pages/404.js"))),
  "component---src-pages-blogs-js": hot(preferDefault(require("/home/chris/training/gatsby/BackRoads/src/pages/blogs.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/chris/training/gatsby/BackRoads/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/chris/training/gatsby/BackRoads/src/pages/index.js"))),
  "component---src-pages-tours-js": hot(preferDefault(require("/home/chris/training/gatsby/BackRoads/src/pages/tours.js")))
}


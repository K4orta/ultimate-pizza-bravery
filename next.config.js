const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/create": { page: "/create" },
      "/info": { page: "/info" },
    }
  },
  webpack: function (c) {
    if (c.resolve.alias) {
      delete c.resolve.alias['react']
      delete c.resolve.alias['react-dom']
    }
    return c
  },
  assetPrefix: isProd ? '/ultimate-pizza-bravery' : ''
}
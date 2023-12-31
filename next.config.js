const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.snappfood.ir",
      },
      {
        protocol: "https",
        hostname: "www.zoodfood.com",
      },
    ],
  },
};

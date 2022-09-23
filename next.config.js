const path = require('path')

module.exports = {
  env: {
    FB_APP_ID: "1263499417770261",
    GOOGLE_CLIENT_SECRET_KEY: "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",
    GOOGLE_CLIENT_ID: "594167086973-823t6r7mmoei4v5s0e6ji1i3qva2ioft.apps.googleusercontent.com"
  },
  images: {
    domains: ['cdn.babysits.com']
  },
  webpack: config => {
    config.resolve.modules.push(path.resolve('./'));

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
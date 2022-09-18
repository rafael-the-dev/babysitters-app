const path = require('path')

module.exports = {
  env: {
    GOOGLE_CLIENT_SECRET_KEY: "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",
    GOOGLE_CLIENT_ID: "767474218175-909li7orom3b7gt1o97ok53atuloalqs.apps.googleusercontent.com"
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
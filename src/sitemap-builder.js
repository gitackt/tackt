require('babel-register');

const router = require('./router').default;
const Sitemap = require('../').default;

(
  new Sitemap(router)
  .build('https://tackt-m.com')
  .save('./sitemap.xml')
);

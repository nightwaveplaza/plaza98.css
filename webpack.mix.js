const mix = require('laravel-mix');

mix.disableNotifications();
Mix.manifest.refresh = _ => void 0;

mix.setPublicPath('dist');

const out = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

mix.sass('src/plaza98.mobile.scss', `${out}/mobile.css`)
.sass('src/plaza98.web.scss', `${out}/web.css`)
.options({
  processCssUrls: false,
  postCss: [
    require('postcss-base64')({
      extensions: ['.png'],
    }),
  ],
});

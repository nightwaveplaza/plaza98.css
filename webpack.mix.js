const mix = require('laravel-mix');

mix.disableNotifications();
Mix.manifest.refresh = _ => void 0;

mix.setPublicPath('dist');

mix.sass('src/plaza98.mobile.scss', 'mobile.css').
    sass('src/plaza98.web.scss', 'web.css').
    options({
      processCssUrls: false,
      postCss: [
        require('postcss-base64')({
          extensions: ['.png'],
        }),
      ],
    });

mix.minify(['dist/mobile.css', 'dist/web.css']);

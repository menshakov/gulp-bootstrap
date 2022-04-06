import svgSpritePlugin from 'gulp-svg-sprite';

export const svgSprite = () => {
  return app.gulp.src(app.path.src.svgicons)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'SVG',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(svgSpritePlugin({
      mode: {
        stack: {
          sprite: `../icons/icons.svg`,
          example: true // create page with list of icons
        }
      }
    }))
    .pipe(app.gulp.dest(app.path.build.images))
}

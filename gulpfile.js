/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 * $ npm install -g gulp
 * $ apt-get install libnotify-bin
 * $ gem install sass
 */
 
// Load plugins
var gulp = require("gulp"),
    babel = require("gulp-babel"),
    sourcemaps = require("gulp-sourcemaps"),
    browserify = require("browserify"),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    del = require('del'),
    // jade = require('gulp-jade'),
    DEBUG = true;
 
// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'fonts', 'scripts', 'images');
});

// Templates
// gulp.task('templates', function() {
//     gulp.src('src/**/*.jade')
//      .pipe(jade({
//       pretty: true
//      }))
//     .pipe(gulp.dest('build/'))
//     .pipe(notify({ message: 'Template task complete' }));
// });

// php version
gulp.task('templates', function() {
  gulp.src('src/**/*.php')
    .pipe(gulp.dest('build/'))
    .pipe(notify({ message: 'Templates task complete' }));
});


// Scripts
gulp.task('scripts', function() {
  gulp.src("src/scripts/**/*.js")
    // .pipe(concat("app.js"))
    .pipe(babel())
    .pipe(gulp.dest("build/assets/js"))
    .on('end', function() {
      if(DEBUG) {
        browserify('./build/assets/js/app.js')
          .bundle()
          .pipe(source('bundle.min.js'))
          .pipe(gulp.dest('build/assets/js'))
          .pipe(notify({ message: 'Script task complete' }));
      } else {
        browserify('./build/assets/js/app.js')
          .bundle()
          .pipe(source('bundle.min.js'))
          .pipe(buffer())
          .pipe(uglify())
          .pipe(gulp.dest('build/assets/js'))
          .pipe(notify({ message: 'Script task complete' }));
      }
  });
});

// Styles
gulp.task('styles', function() {
    if(DEBUG) {
        return sass('src/styles/main.scss', {style: 'expanded'})
            .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
            .pipe(gulp.dest('build/assets/css'))
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('build/assets/css'))
            .pipe(notify({ message: 'Styles task complete' }));
    } else {
        return sass('src/styles/main.scss', {style: 'expanded'})
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('build/assets/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('build/assets/css'))
        .pipe(notify({ message: 'Styles task complete' }));
    }
});

// Fonts
gulp.task('fonts', function() {
  return gulp.src('src/styles/fonts/**/*')
    .pipe(gulp.dest('build/assets/css/fonts'));
});

// Images
gulp.task('images', function() {
   return gulp.src('src/images/**/*', { buffer: true } )
     .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
     .pipe(gulp.dest('build/assets/img'))
     .pipe(notify({ message: 'Images task complete' }));
});

// Videos
gulp.task('videos', function() {
  return gulp.src('src/videos/**/*')
  .pipe(gulp.dest('build/assets/videos'))
  .pipe(notify({ message: 'Videos task complete' }));
});

// Clean
gulp.task('clean', function(cb) {
    del(['build/assets/css', 'build/assets/js', 'build/assets/images'], cb)
});
 
// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('templates', 'styles', 'fonts', 'scripts', 'images');
});
 
// Watch
gulp.task('watch', function() {
 
  // Template .jade files
  // gulp.watch('src/**/*.jade', ['templates']);
  
  // Template .php files
  gulp.watch('src/**/*.php', ['templates']);
 
  // Watch .scss files
  gulp.watch('src/styles/**/*.scss', ['styles']);
 
  // Watch .js files
  gulp.watch('src/scripts/**/*.js', ['scripts']);
 
  // Watch image files
  gulp.watch('src/images/**/*', ['images']);
  
  // Watch font files
  gulp.watch('src/styles/fonts/**/*', ['fonts']);
 
  // Watch video files
  gulp.watch('src/videos/**/*', ['videos']);
});
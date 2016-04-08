// generated on 2016-01-06 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import {stream as wiredep} from 'wiredep';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('less', function() {
  return gulp.src('app/less/sm*.less')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.less({async: false}))
    .on('error', function(err) {
      console.log(err.message);
      this.emit('end');
    })
    .pipe($.autoprefixer({browsers: [
      'Android >= 4',
      'Chrome >= 40',
      'last 6 Firefox versions',
      'iOS >= 6',
      'Safari >= 6'
    ]}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('styles', function() {
  return gulp.src('app/styles/main.less')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.less({async: false}))
    .on('error', function(err) {
      console.log(err.message);
      this.emit('end');
    })
    .pipe($.autoprefixer({browsers: [
      'Android >= 4',
      'Chrome >= 40',
      'last 6 Firefox versions',
      'iOS >= 6',
      'Safari >= 6'
    ]}))
    .pipe($.sourcemaps.write())
    .pipe($.px2rem({rootValue: 20}))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream: true}));
});

function lint(files, options) {
  return function() {
    return gulp.src(files)
      .pipe(reload({stream: true, once: true}))
/*      .pipe($.eslint(options))
      .pipe($.eslint.format())*/
      .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
  };
}
const testLintOptions = {
  env: {
    mocha: true
  }
};

gulp.task('lint', lint('app/scripts/**/*.js'));
gulp.task('lint:test', lint('test/spec/**/*.js', testLintOptions));

gulp.task('html', ['less', 'styles'], function() {
  const assets = $.useref.assets({searchPath: ['.tmp', 'app', '.']});

  var jsfilter = $.filter(['**', '!**/main.js'], {restore: true});

  return gulp.src('app/**/*.html')
    .pipe(assets)
    .pipe(jsfilter)
    .pipe($.if('*.js', $.uglify()))
    .pipe(jsfilter.restore)
    .pipe(assets.restore())
    .pipe($.if('*.css', $.cleanCss({compatibility: '*', advanced: false})))
    .pipe($.useref())
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
  return gulp.src('app/images/**/*')
    .pipe($.if($.if.isFile, $.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    }))
    .on('error', function (err) {
      console.log(err);
      this.end();
    })))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', function() {
  return gulp.src(require('main-bower-files')({
    filter: '**/*.{eot,svg,ttf,woff,woff2}'
  }).concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', function() {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist', 'tar']));

gulp.task('serve', ['less', 'styles', 'fonts'], function() {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    'app/**/*.html',
    'app/scripts/**/*.js',
    'app/images/**/*',
    '.tmp/styles/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);

  gulp.watch('app/less/*.less', ['less']);
  gulp.watch('app/styles/*.less', ['styles']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

gulp.task('serve:dist', function() {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('serve:test', function() {
  browserSync({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('test/spec/**/*.js').on('change', reload);
  gulp.watch('test/spec/**/*.js', ['lint:test']);
});

// inject bower components
gulp.task('wiredep', function() {
  gulp.src('app/less/*.less')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/less'));

  gulp.src('app/styles/*.less')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/*.html')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('build', ['lint', 'html', 'images', 'fonts', 'extras'], function() {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], function() {
  gulp.start('build');
});

//打包成tar.gz压缩包
gulp.task('tar', function(){
  return gulp.src('dist/**/*')
    .pipe($.tar('dist.tar'))
    .pipe($.gzip())
    .pipe(gulp.dest('tar'));
});

/*
 * @title Generate Icon SCSS
 * @description A module that will convert an svg icon code into a scss class
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var configIconfont = require('../../config/iconfont.js');
var data = require('gulp-data');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sharedPaths = require('../../shared/paths.js');
var sharedEvents = require('../../shared/events.js');
var swig = require('gulp-swig');


/*********************************************************************************
 2. EXPORTS
 *********************************************************************************/

module.exports = function (codepoints) {
  var scssTemplate = '/_iconfont.scss.swig';
  return gulp
    .src(__dirname + scssTemplate)
    .pipe(plumber({
      errorHandler: sharedEvents.onError
    }))
    .pipe(data(function() {
      return {
        icons: codepoints.map(function (icon) {
          return {
            name: icon.name,
            code: icon.codepoint.toString(16)
          }
        }),
        className: configIconfont.name,
        fontName: configIconfont.name,
        fontPath: '../fonts/',
        comment: '/*\n * @title Custom icon font\n * @description Font and SCSS generated by gulp - do not edit directly\n */'
      }
    }))
    .pipe(swig())
    .pipe(rename(scssTemplate.replace('.swig','')))
    .pipe(gulp.dest(sharedPaths.srcDir + '/sass/'));
};
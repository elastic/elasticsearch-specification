var gulp = require("gulp");
var _ = require('lodash');
var addsrc = require('gulp-add-src');
var ts = require('ntypescript')

var folders = {
    src: ['src/**/*.ts', '!src/**/*.d.ts']
    //spec: ['spec/**/*.ts', '!spec/**/*.d.ts'],
};

gulp.task("default", [], function() {
    var lib = tsTranspiler(gulp.src(folders.src), './lib');

});

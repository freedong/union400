/*
 * @Author: iceStone
 * @Date:   2016-01-25 18:54:36
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-01-26 14:16:10
 */

'use strict';



/*
/!*����ʹ��*!/
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

gulp.task('test', function () {
    gulp.src('src/img/!*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});
*/



/*gulp-imagemin��������*/
/*var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

gulp.task('testImagemin', function () {
    gulp.src('src/img/!*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 5, //���ͣ�Number  Ĭ�ϣ�3  ȡֵ��Χ��0-7���Ż��ȼ���
            progressive: true, //���ͣ�Boolean Ĭ�ϣ�false ����ѹ��jpgͼƬ
            interlaced: true, //���ͣ�Boolean Ĭ�ϣ�false ����ɨ��gif������Ⱦ
            multipass: true //���ͣ�Boolean Ĭ�ϣ�false ����Ż�svgֱ����ȫ�Ż�
        }))
        .pipe(gulp.dest('dist/img'));
});*/



/*���ѹ��ͼƬ*/
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
//ȷ�������Ѱ�װimagemin-pngquant [cnpm install imagemin-pngquant --save-dev]
    pngquant = require('imagemin-pngquant');

gulp.task('test', function () {
    gulp.src('src/images/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],//��Ҫ�Ƴ�svg��viewbox����
            use: [pngquant()] //ʹ��pngquant���ѹ��pngͼƬ��imagemin���
        }))
        .pipe(gulp.dest('dist/img'));
});


/*��Ҳ������ LiveReload ��һ�������ļ��仯�Ĺ��߲����Զ�ˢ�·��������������ʽ�ĸı䶼����Ҫ���¼��ء�һ���иı�ҳ������ˢ�¡�

 Ȼ�� BrowserSync ����һ��������ʵ��LiveReload���й��ܣ����ǲ���Ҫ��װ���������������������������ӵ��������ͬ��������������������ˢ�»�������
 �ƶ��豸��Ҳͬ����Ч��BrowserSync����֧�ֿ�������������������ڿ�����������ֻ��BrowserSync��ʵ��ʵʱˢ�µ�ԭ��*/
var browserSync = require('browser-sync').create();

// ��̬������
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// ����

/*gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "���������IP"
    });
});*/





/*
/!*ֻѹ���޸ĵ�ͼƬ��ѹ��ͼƬʱ�ȽϺ�ʱ���ںܶ����������ֻ�޸���ĳЩͼƬ��û�б�Ҫѹ������ͼƬ��ʹ�á�gulp-cache��ֻѹ���޸ĵ�ͼƬ��û���޸ĵ�ͼƬֱ�Ӵӻ����ļ���ȡ��C:\Users\Administrator\AppData\Local\Temp\gulp-cache����*!/
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
//ȷ�������Ѱ�װgulp-cache [cnpm install gulp-cache --save-dev]
    cache = require('gulp-cache');

gulp.task('testImagemin', function () {
    gulp.src('src/img/!*.{png,jpg,gif,ico}')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});*/

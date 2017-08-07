/**
 * Created by wanghongjiang on 2017/8/7.
 */

//1.导入需要的gulp包文件:
/*相当于在html文件中通过标签script引入一个名字为gulp的js文件*/
var gulp = require('gulp');

//2.创建任务: gulp.tast(参数1,数2)
/*1.第一个参数:表示任务名称
  2.第二个参数:表示当前任务的回调函数,将来执行这个任务的时候,函数中的代码,就会执行*/
gulp.tast('js',function(){
  console.log('js 任务执行了')
});

//3.创建一个带有依赖项的任务
/*1.第一个参数:表示任务名称
  2.第二个参数:表示当前任务的依赖项任务(依赖项先执行)
  3.第二个参数:表示当前任务的回调函数,将来执行这个任务的时候,函数中的代码,就会执行*/
gulp.tast('js',['ps'],function(){
  console.log('js 任务执行了')
});



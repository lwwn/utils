vue  的全局提示框
参考地址

1.https://www.cnblogs.com/conglvse/p/9641550.html

2.https://blog.csdn.net/weixin_43931876/article/details/90600971

使用 在main.js 

导入  import toast from './toast/index' 文件

Vue.prototype.$myToast = toast.install;  挂载到原型上


页面使用 

this.$myToast({content:'内容', time: 200})


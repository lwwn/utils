
// 文件对象
function upImg(file){

    let ft = new FormData();

    ft.append('file',file);
    
    // 发送请求
    Service.UpImg(fd).then(res=>{

        // ...
    })


}

// 请求头需要使用  content-type ：multipart/form-data 
// https://www.jianshu.com/p/10cdbb35ac87

// tps: 在混合式开发中，尽量不要使用h5方式上传图片，应该使用原生APP提供的上传图片功能。不然又可能会遇到一些意外的问题。如安卓端只能打开一次，再次点击无效。
// 因为在安卓中貌似上传的input没有关闭。 IOS 中会出现，一些显示问题。

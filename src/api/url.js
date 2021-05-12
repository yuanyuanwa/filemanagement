const URL={
    // huo
//    list:'file_manager/get_myfile',
   myFile:{
    list:'file_manager/get_myfile',

   },
   common: {
    //获取文件列表
    list:'file_manager/get_myfile',
    //获取标签
    labels:'file_manager/get_mylabels',
    //在文件上传成功后传递信息到后台
    upload:"file_manager/file_upload",
    //删除文件
    delete:"file_manager/delete_file",
    //删除标签、添加标签等
    option:"file_manager/op_label",
    //通过标签获取应用
    app:"file_manager/map_app"

   }
}
module.exports=URL;
/**
 * common
 */
 
layui.define(function(exports){
  var $ = layui.$
  ,layer = layui.layer
  ,laytpl = layui.laytpl
  ,setter = layui.setter
  ,view = layui.view
  ,admin = layui.admin
  
  //公共业务的逻辑处理可以写在此处，切换任何页面都会执行
  //……

  
  
  //退出
  admin.events.logout = function(){
    //执行退出接口
    admin.req({
      url: layui.setter.apiurl+'/sys/personal/logout'
      ,type: 'post'
      ,data: {}
      ,done: function(res){ //这里要说明一下：done 是只有 response 的 code 正常才会执行。而 succese 则是只要 http 为 200 就会执行
        if (res.code==0) {
          //清空本地记录的 token，并跳转到登入页
          admin.exit();

        }
        
      }
    });
  };
  admin.events.totree=function(r){
   var arr= r.filter(function(parent) {
        var branchArr = r.filter(function(child) {
            return parent.id == child['pid'];
        });
        parent.children = [];
        if (branchArr.length > 0) {
            parent.children = branchArr;
        }
        return parent['pid'] == "";
    });
   return arr
  }
  // admin.events.findParent=(arr1, id) {
  //       var temp = []
  //       var forFn = function (arr, id) {
  //         for (var i = 0; i < arr.length; i++) {
  //           var item = arr[i]
  //           if (item.id === id) {
  //             temp.push(item)
  //             forFn(arr1, item.parentId)
  //             break
  //           } else {
  //             if (item.children) {
  //               forFn(item.children, id)
  //             }
  //           }
  //         }
  //       }
  //       forFn(arr1, id)
  //       return temp
  //     }
 

  
  //对外暴露的接口
  exports('common', {});
});
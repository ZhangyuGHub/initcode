var BASURL = "http://192.168.31.101:8000";
var API = {
    //退出地址
    logout: BASURL + "/admin/logout",
    // 登录地址
    login: BASURL + "/admin/login",
    // 获取用户信息
    loginfo: BASURL + "/admin/getuser",
    // 获取文章类别
    category_get: BASURL + "/admin/category_search",
    // 增加文章类别
    category_add: BASURL + "/admin/category_add",
    // 删除文章类别
    category_del: BASURL + "/admin/category_delete",

}
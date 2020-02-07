// 与文章相关的操作
// 获取文章类别
var category_get = {
    get: function () {
        return $.get(API.category_get)

    }
}
// 添加文章类别
var category_add = {
    add: function (name, slug) {
        return $.post(API.category_add, { "name": name, "slug": slug })
    }
}
// 删除文章类别
var category_del = {
    del: function (id) {
        return $.post(API.category_del, { "id": id });
    }
}
// 编辑文章类别
var category_change = {
    change: function (id, name, slug) {
        return $.post(API.category_change, { "id": id, "name": name, "slug": slug })
    }
}
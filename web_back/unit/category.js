// 与文章相关的操作
// 获取文章类别
var category_get = {
    get: () => {
        return $.get(API.category_get)

    }
}
// 添加文章类别
var category_add = {
    add: (name, slug) => {
        return $.post(API.category_add, { "name": name, "slug": slug })
    }
}
// 删除文章类别
var category_del = {
    del: (id) => {
        return $.post(API.category_del, { "id": id });
    }
}
// 编辑文章类别
var category_change = {
    change: (id, name, slug) => {
        return $.post(API.category_change, { "id": id, "name": name, "slug": slug })
    }
}
var out = {
    logout: () => {
        $.post(API.logout).then((res) => {
            if (res.code === 200) {
                alert("退出成功");
                window.location.href = "./login.html"
            }
            else {
                alert(res.msg);
            }

        });
    }
}
var userinfo = {
    info: () => {
        $.get(API.loginfo).then((res) => {
            if (res.code === 200) {
                $('#username').text(res.data.nickname);
                $('.userimg').text('src', res.data.user_pic);

            }

        });
    }
}
// 代码语义化

var admin = {
    login: (name, password) => {
        $.post(API.login, {
            'user_name': name,
            'password': password
        }).then((res) => {
            console.log(res);
            if (res.code === 200) {
                window.location.href = "./index.html"
            }
            else if (res.code === 400) {
                alert('用户名或密码错误，登陆失败');
            }
        })
    }
}
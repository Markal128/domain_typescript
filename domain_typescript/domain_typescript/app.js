/**
 * filename: app.ts
 * domain
 * time: 2015/0906 10:58
 */
// Nodejs异步异常处理
// 模拟异步异常处理, 有异常时try... catch无法捕获;
function async_error() {
    setTimeout(function () {
        var r = Math.random() * 10;
        console.log("async_error random num is " + r);
        if (r > 5) {
            throw new Error("async_error Error: random num " + r + " > 5");
        }
    }, 100);
}
setInterval(function () {
    try {
        async_error();
    }
    catch (err) {
        console.log("async_error err = ", err);
    }
}, 1000);
process.on("uncaughtException", function (err) {
    console.log("uncaugthException err: ", err);
});
// Nodejs同步异常处理
function sync_error() {
    var r = Math.random() * 10;
    console.log("sync_error random num is " + r);
    if (r > 5) {
        throw new Error("sync_error Error: random num " + r + " > 5");
    }
}
setInterval(function () {
    try {
        sync_error();
    }
    catch (err) {
        console.log("sync_error error = ", err);
    }
}, 5000);
//# sourceMappingURL=app.js.map
//Github
var github_download = "http://www.baidu.com";
//蓝奏云
var lanzou_download = "http://www.baidu.com";
//永硕E盘
var yongshuo_download = "http://www.baidu.com";

window.onload = function() {
    new QRCode(document.getElementById("github_qrcode"), github_download);
    document.getElementById("github").href = github_download;
    new QRCode(document.getElementById("lanzou_qrcode"), github_download);
    document.getElementById("lanzou").href = lanzou_download;
    new QRCode(document.getElementById("yongshuo_qrcode"), github_download);
    document.getElementById("yongshuo").href = yongshuo_download;
}

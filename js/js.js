//Github
var github_download = "https://github.com/nwdxlgzs/21st-Eng-answer/raw/update/21%E4%B8%96%E7%BA%AA%E8%8B%B1%E8%AF%AD%E6%8A%A5%E7%BA%B8%E7%AD%94%E6%A1%88_5.0.apk";
//蓝奏云
var lanzou_download = "https://www.lanzous.com/tp/i50ztba";
//永硕E盘
var yongshuo_download = "http://nwdxlgzs.ys168.com";

window.onload = function() {
    new QRCode(document.getElementById("github_qrcode"), github_download);
    document.getElementById("github").href = github_download;
    new QRCode(document.getElementById("lanzou_qrcode"), lanzou_download);
    document.getElementById("lanzou").href = lanzou_download;
    new QRCode(document.getElementById("yongshuo_qrcode"), yongshuo_download);
    document.getElementById("yongshuo").href = yongshuo_download;
}

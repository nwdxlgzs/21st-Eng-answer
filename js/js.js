//Github
var github_download = "https://github.com/nwdxlgzs/21st-Eng-answer/raw/update/21世纪英语报纸答案_4.9.apk";
//蓝奏云
var lanzou_download = "https://www.lanzous.com/tp/i4yh1pg";
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

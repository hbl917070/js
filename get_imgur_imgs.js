/**
 *  最後更新日期：2017-04-02
 * 
 *  說明：取得【imgur】相簿所有圖片的網址，
 *        如果不是imgur相簿，則回傳所有網頁的圖片
 *
 * 作者：hbl917070（深海異音）
 * 小屋：https://home.gamer.com.tw/homeindex.php?owner=hbl917070  
*/


/*產生物件*/
var obj_get_url = document.createElement("div");
obj_get_url.id = "get_url_box_b";
obj_get_url.innerHTML = '<style>#get_url_box_b {position: fixed !important;margin: auto !important;top: 0px !important;bottom: 0px !important;left: 0px !important;right: 0px !important;width: 100vw !important;height: 100vh !important;background-color: rgba(0, 0, 0, 0.79) !important;z-index: 9999 !important;}#get_url_box {position: fixed !important;margin: auto !important;top: 0px !important;bottom: 0px !important;left: 0px !important;right: 0px !important;width: 60vw !important;height: 60vh !important;background-color: rgb(46, 185, 255) !important;border: 3px solid rgb(46, 185, 255) !important;z-index: 81000 !important;}#get_url_box button {height: 30px !important;width: 30px !important;position: absolute !important;top: 0px !important;right: 0px !important;background-color: rgb(0, 88, 152) !important;border: none !important;color: #fff !important;font-size: 20px !important;font-weight: 900 !important;}#get_url_box button:hover {background-color: rgb(67, 0, 152) !important;}#get_url_box #get_url_box_txt {display: block !important;position: absolute !important;top: 30px !important;padding: 5px !important;border: none !important;width: calc( 100% - 10px ) !important;height: calc( 100% - 40px ) !important;background-color: rgb(26, 26, 26) !important;color: #fff !important;font-size: 18px !important;box-sizing: content-box !important;}#get_url_box #get_url_box_title {line-height: 30px !important;margin-left: 5px !important;font-size: 20px !important;font-weight: 900 !important;}</style><div id="get_url_box"><div id="get_url_box_title"></div><button onclick="fun_close()" title="close">×</button><textarea id="get_url_box_txt"></textarea></div>';
document.body.appendChild(obj_get_url);

try {

	/*imgur 專用的圖片取網址方式*/
	var int_nub = window.runSlots["item"]["album_images"]["count"];

	
	if (int_nub != undefined) {
		var sum = "";
		for (var i = 0; i < int_nub; i++) {
			var obj_img = window.runSlots["item"]["album_images"]["images"][i];
			sum += "http://i.imgur.com/" + obj_img["hash"] + obj_img["ext"] + "\n";
		}
		document.getElementById("get_url_box_txt").innerHTML = sum;
		document.getElementById("get_url_box_title").innerHTML = "Get images url 【 " + int_nub + " 】";
	} else {
		fun_general();
	}

} catch (e) {

	fun_general();

}

/*通用所有網站的取得網址方式*/
function fun_general() {
	var obj_imgs = document.getElementsByTagName("img");
	var sum = "";
	for (var i = 0; i < obj_imgs.length; i++) {
		sum += obj_imgs[i].src + "\n";
	}
	document.getElementById("get_url_box_txt").innerHTML = sum;
	document.getElementById("get_url_box_title").innerHTML = "Get images url 【 " + obj_imgs.length + " 】";
}

/*關閉視窗*/
function fun_close() {
	document.body.removeChild(obj_get_url);
}

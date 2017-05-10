// JavaScript source code




var MSG_box2 = document.getElementsByClassName('MSG-box2');//每一筆文章

var bool_stop = false;


var s_html = `
    <div id="d_box">
        <style>
            #d_box {
                position: fixed;
                width: 600px;
                height: 250px;
                background-color: rgb(235, 235, 235);
                top: 0px;
                left: 0px;
                right: 0px;
                bottom: 0px;
                margin: auto;
                font-size: 20px;
                font-family: "微軟正黑體";
                padding: 20px;
                box-sizing: border-box;
                color: #000 !important;
                box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.85);
            }
            
            #d_box td {
                padding: 3px !important;
            }
            
            #d_box input,
            #d_box button {
                font-size: 20px;
            }
            
            #d_box #but_close {
                position: absolute;
                top: 0px;
                right: 0px;
                height: 30px;
                width: 30px;
                background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjM1N3B4IiBoZWlnaHQ9IjM1N3B4IiB2aWV3Qm94PSIwIDAgMzU3IDM1NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzU3IDM1NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGcgaWQ9ImNsb3NlIj4NCgkJPHBvbHlnb24gcG9pbnRzPSIzNTcsMzUuNyAzMjEuMywwIDE3OC41LDE0Mi44IDM1LjcsMCAwLDM1LjcgMTQyLjgsMTc4LjUgMCwzMjEuMyAzNS43LDM1NyAxNzguNSwyMTQuMiAzMjEuMywzNTcgMzU3LDMyMS4zIA0KCQkJMjE0LjIsMTc4LjUgCQkiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==);
                background-size: 80% 80%;
                background-repeat: no-repeat;
                /*不重複*/
                background-position: center center;
                /*對齊位置*/
                border: none;
                background-color: rgba(100, 150, 230, 1);
            }
            
            #d_box #but_close:hover {
                background-color: rgba(150, 100, 230, 1);
            }
            
            .d_box_title {
                font-size: 25px;
                font-weight: 900;
                height: 30px;
                line-height: 30px;
                background-color: rgba(0, 0, 0, 0.7);
                position: absolute;
                top: 0px;
                right: 0px;
                left: 0px;
                color: #FFF !important;
                text-align: center;
            }
        </style>

        <div class="d_box_title">公會文章篩選器</div>
        <button id="but_close"></button>

        <div style="margin:auto;width:500px;margin-top:20px;">

            <table align="center">
                <tr>
                    <td>只留下這個人</td>
                    <td>
                        <input type="text" id="text_only_name" />
                    </td>
                </tr>
                <tr>
                    <td>筆數</td>
                    <td>
                        <input type="text" id="text_max_nub" value="30" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <hr />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <img id="img_loading" style="width:330px;margin:10px 0px; display:none;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NzUiIGhlaWdodD0iNiI+PHN0eWxlPmNpcmNsZXthbmltYXRpb246YmFsbCAyLjVzIGN1YmljLWJlemllcigwLDEsMSwwKSBpbmZpbml0ZTtmaWxsOiNiYmJ9I2JhbGxze2FuaW1hdGlvbjpiYWxscyAyLjVzIGxpbmVhciBpbmZpbml0ZX0jY2lyY2xlMnthbmltYXRpb24tZGVsYXk6LjFzfSNjaXJjbGUze2FuaW1hdGlvbi1kZWxheTouMnN9I2NpcmNsZTR7YW5pbWF0aW9uLWRlbGF5Oi4zc30jY2lyY2xlNXthbmltYXRpb24tZGVsYXk6LjRzfUBrZXlmcmFtZXMgYmFsbHswJSwyMCV7dHJhbnNmb3JtOm5vbmV9ODAlLHRve3RyYW5zZm9ybTp0cmFuc2xhdGVYKDg2NHB4KX19QGtleWZyYW1lcyBiYWxsc3swJXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNDBweCl9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMzBweCl9fTwvc3R5bGU+PGcgaWQ9ImJhbGxzIj48Y2lyY2xlIGNsYXNzPSJjaXJjbGUiIGlkPSJjaXJjbGUxIiBjeD0iLTExNSIgY3k9IjMiIHI9IjMiLz48Y2lyY2xlIGNsYXNzPSJjaXJjbGUiIGlkPSJjaXJjbGUyIiBjeD0iLTEzMCIgY3k9IjMiIHI9IjMiLz48Y2lyY2xlIGNsYXNzPSJjaXJjbGUiIGlkPSJjaXJjbGUzIiBjeD0iLTE0NSIgY3k9IjMiIHI9IjMiLz48Y2lyY2xlIGNsYXNzPSJjaXJjbGUiIGlkPSJjaXJjbGU0IiBjeD0iLTE2MCIgY3k9IjMiIHI9IjMiLz48Y2lyY2xlIGNsYXNzPSJjaXJjbGUiIGlkPSJjaXJjbGU1IiBjeD0iLTE3NSIgY3k9IjMiIHI9IjMiLz48L2c+PC9zdmc+"
                        />
                        <div id="div_output" style="margin-bottom: 10px;"></div>
                        <button id="but_del">執行</button>
                        <button id="but_stop" style="display:none">暫停</button>
                    </td>
                </tr>
            </table>

        </div>

    </div> 


`;


if (document.getElementById("d_box") == undefined) {//避免重複產生界面
    //產生html界面
    var div = document.createElement("div");
    div.innerHTML = s_html;
    document.body.appendChild(div);
}




//覆寫alert
var copy_alert = window.alert;
window.alert = function (s) {
    if (document.getElementById("d_box") == undefined) {
        copy_alert(s);
    } else {
        if (s == "沒有更早的動態了") {
            fun_end();
        }
    }
}

///
///點擊開始執行
///
document.getElementById("but_del").onclick = function () {
    //初始化
    bool_stop = false;
    document.getElementById("div_output").innerHTML = "啟動中";
    document.getElementById("but_del").style.display = "none";
    document.getElementById("img_loading").style.display = "block";
    document.getElementById("but_stop").style.display = "inline";
    fun_del();//開始
};

///
///關閉視窗
///
document.getElementById("but_close").onclick = function () {
    var child = document.getElementById("d_box");
    child.parentNode.removeChild(child);//刪除視窗元素
    fun_end();//結束
};

///
///暫停
///
document.getElementById("but_stop").onclick = function () {  
    fun_end();//結束
};



///
///操作完成
///
function fun_end() {

    //初始化
    bool_stop = true;
    document.getElementById("but_del").style.display = "inline";
    document.getElementById("img_loading").style.display = "none";
    document.getElementById("but_stop").style.display = "none";
    document.getElementById("div_output").innerHTML = "完成<br>共取得：" + MSG_box2.length + "筆";
    document.getElementById("but_del").innerHTML = "再次執行";
}

///
///開始執行
///
function fun_del() {

    var only_name = document.getElementById("text_only_name").value;//只留下這個人
    var int_max = Number(document.getElementById("text_max_nub").value);//最大筆數
    var ar = new Array();//用陣列來存放要被刪除的文章

    for (var i = 0; i < MSG_box2.length; i++) {//

        //發文者的名字
        var s_name = MSG_box2[i].getElementsByClassName('AT1')[0].innerHTML;

        if (s_name != only_name) {//把要刪除的文章放入陣列
            ar.push(MSG_box2[i]);
        }
    }

    //逆著刪除文章，才不會因為元素位置變動導致錯誤
    for (var i = ar.length - 1; i >= 0; i--) {
        var child = ar[i];
        child.parentNode.removeChild(child);//刪除元素
    }

    document.getElementById("div_output").innerHTML = "執行中：" + MSG_box2.length + "筆";

    if (MSG_box2.length > int_max || bool_stop) {
        fun_end();
        return;
    } else {
        setTimeout("fun_del()", 1500);
    }

    document.getElementById("moreBtn").click();

}



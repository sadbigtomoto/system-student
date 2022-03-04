var show = document.getElementById("show");
var banner = document.getElementById("banner");
var Left = document.getElementById("left");
var Right = document.getElementById("right");
// 通过获取类名
var list = document.getElementsByClassName("a");
var banner_list = banner.children;
// var cricle=document.getElementById("cricle");
// 获取由cricle的子级组成的数组
// console.log(cricle.children);
var i = 0;
// var timer = setInterval(function(){
//                 i++;
// 				if(i==5){
// 					i=0
// 				}
// 				for(var j=0;j<list.length;j++){
// 					list[j].style.background = "white";
// 					banner_list[j].className = '';
// 				}
// 				list[i].style.background = "#f50";
// 				banner_list[i].className = "show";
// 			},1000)
// 			show.onmouseover = function(){
// 				clearInterval(timer);
// 			}
// 			show.onmouseout = function(){
// 				timer = setInterval(function(){
// 					i++;
// 					if(i==5){
// 						i= 0 ;
// 					}
// 					for(var j=0;j<list.length;j++){
// 						list[j].style.background = "white";
// 						banner_list[j].className = '';
// 					}
// 					list[i].style.background = "#f50";
// 					banner_list[i].className = "show";
// 				},1000)
// 			}
// 			Left.onclick=function(){
// 				i--;
// 				if(i==-1){
// 					i=4;
// 				}
// 				for(var j=0;j<list.length;j++){
// 					list[j].style.background = "white";
// 					banner_list[j].className = '';
// 				}
// 				list[i].style.background = "#f50";
// 				banner_list[i].className = "show";
// 			}
// 			Right.onclick = function(){
// 				i++;
// 				if(i==5){
// 					i= 0;
// 				}
// 				for(var j=0;j<list.length;j++){
// 					list[j].style.background = "white";
// 					banner_list[j].className = '';
// 				}
// 				list[i].style.background = "#f50";
// 				banner_list[i].className = "show";
// 			}
// 			for(var j = 0;j<list.length;j++){
// 				list[j].index = j;
// 				list[j].onclick = function(){
// 					i = this.index;
// 					for(var j=0;j<list.length;j++){
// 						list[j].style.background = "white";
// 						banner_list[j].className = '';
// 					}
// 					this.style.background = "#f50";
// 					banner_list[i].className = "show";
// 				}
// 			}


var timer = setInterval(a, 1000, 1)
for (var j = 0; j < list.length; j++) {
    list[j].index = j;

}

function a(d, c) {

    i = i + d;
    if (i == 5) {
        i = 0;
    }
    if (i == -1) {
        i = 4;
    }
    if (c != undefined) {
        i = c;
    }
    for (var j = 0; j < list.length; j++) {
        list[j].style.background = "white";
        // banner_list[j].style.opacity = 0;
        // 两种实现方法一种是类名一种是样式
        banner_list[j].className = '';

    }
    // banner_list[i].style.opacity = 1;
    banner_list[i].className = "show";
    list[i].style.background = "#f50";
}
/*******************
开发制作
该插件仅供学习参考使用
*******************/

function myEvent(obj,ev,fn){
	if (obj.attachEvent){
		obj.attachEvent('on'+ev,fn);
	}else{
		obj.addEventListener(ev,fn,false);
	};
};

function getByClass(obj,sClass){
	var array = [];
	var elements = obj.getElementsByTagName('*');
	for (var i=0; i<elements.length; i++){
		if (elements[i].className == sClass){
			array.push (elements[i]);
		};
	};
	return array;
};

var cs_box = {
	set : function(json){
		this.box = document.getElementById('cs_box');
		//this.setimg(json);
		this.qqfn(json);
	},
	qqfn : function(json){
		this.btn = getByClass(this.box,'cs_btn')[0];
		//var link = 'http://wpa.qq.com/msgrd?v=3&uin='+json.qq+'&site=qq&menu=yes';
		var link='http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=YlNaUVtaWlBVW1AiExNMAQ0P';
		this.btn.onclick = function(){
			window.open(link,'_blank');
		};
	},
	fn : function(){
		var _this = this;
		var timer = setTimeout(function(){
			_this.box.style.display = 'none';
		}, 1000);
	},
};
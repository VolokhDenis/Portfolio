$(document).ready(function ($) {
PopUpHide();
//var cards=$('.serv_card').length;
//var card_width=100/cards;
//card_width=card_width-0.4+"%";
//var mleft="0.2%";
//var mright="0.2%";
//$('.serv_card').css({'width':card_width,
//					'margin-left' : mleft,
//					'margin-right' : mright,
//});
//alert(card_width);

//Все работает продолжай отсюда

	//Добавлю отслежку для GA(google analitics)
$('.pr_prev').attr('onClick',"ga('send', 'event', 'proj', 'proj_open');");
	

$('.addsite').hover(function(){

	var el='#'+$(this).attr('id');
	$(el+'.addsite'+' .info_screen').stop().animate({opacity : 0.8});
 

},function(){
	var el='#'+$(this).attr('id');
	$(el+'.addsite'+' .info_screen').stop().animate({opacity : 0});

	
});
	
function startLoadingAnimation() // - функция запуска анимации
{
  // найдем элемент с изображением загрузки и уберем невидимость:
  var imgObj = $("#loadImg");
  imgObj.show();
}

	
	
function stopLoadingAnimation() // - функция останавливающая анимацию
{
  $("#loadImg").hide();
}
	
	

$('.pr_prev').click(function(){
 
	var el='#'+$(this).attr('id');
	var line='#'+$(this).parent().parent().attr('id');
	
	//alert(el);
	//alert(line);
	//При клике нужно вызвать php функцию.
	$.ajax({
	url:"comp/functions.php",
	method : 'POST' ,
	data: {element : el},
	success:function(data){
	//alert(data);

	$(line+".pr_line_detailed .picgall").html(data);
	}
	});
	
	//alert(line);
	var info_field_height="700px";
	var gallery_height="600px";
	var clear_height="0px";
	
	$('#pr_wrapper').css({height : 'auto'});
	
	var circ=$(line+' .pr_prev').length;
	//alert(circ);
	var slide_id='#'+$(this).parent().parent().parent().parent().attr('id');
	//после того как узнали номер слайда, надо его
	$(slide_id+'.slide').css({height:'auto'});
	//alert(slide_id);
	
	//$().css({});
	$(line+'.pr_line_detailed').css({"-webkit-box-shadow" : "0  1px 12px rgba(0, 0, 0, 0.8) inset"});
	$(line+'.pr_line_detailed').css({"-moz-box-shadow" : "0  1px 12px rgba(0, 0, 0, 0.8) inset"});
	$(line+'.pr_line_detailed').css({"box-shadow" : "0  1px 12px rgba(0, 0, 0, 0.8) inset"});
	$(line+'.pr_line_detailed').css({"background-color" : "#fff"});

	//$(el+'.pr_line_detailed').css({"background-image" : "url('images/classy_fabric.png')"});
	var n = 0;
	
	var pics=$('.picture').length; 
	//расчет количества картинок
	//alert(pics);
	
	
	for (var i = 1; i <= circ; i++) {
		n=n+1;
		var w=$(line+'.pr_line_detailed').css("height");
		//alert(n);
		if(w != "0px") {
			//alert(el);
			n=n-1;
			$(line +'.pr_line_detailed .gallery').animate({opacity : 0});
			$(line+'.pr_line_detailed .gallery').animate({height : clear_height});
			$(line+'.pr_line_detailed .gallery #pr_pic').animate({height : clear_height});
			$(line+'.pr_line_detailed .gallery #next_pic').animate({height : clear_height});
			$(line+'.pr_line_detailed .gallery .picgall').animate({height : clear_height});
			$(line+'.pr_line_detailed .gallery .picgall .picture').animate({height : clear_height});
			$(line +'.pr_line_detailed').animate({"height" : "0px"},function(){$(line+'.pr_line_detailed').animate({height : info_field_height},600,
			
			 
			function(){
				$(line+'.pr_line_detailed .picgall  #1.picture').animate({opacity : 1});
					$(line+'.pr_line_detailed .gallery').animate({height : gallery_height});
					$(line+'.pr_line_detailed .gallery #pr_pic').animate({height : gallery_height});
					$(line+'.pr_line_detailed .gallery #next_pic').animate({height : gallery_height});
					$(line+'.pr_line_detailed .gallery .picgall').animate({height : gallery_height});
					$(line+'.pr_line_detailed .gallery .picgall #1.picture').animate({height : gallery_height});
				$(line+'.pr_line_detailed .gallery').animate({opacity : 1});
				
			}
			);});
		}
		
		
	}
	//alert(n);
	if(n==circ){
		
		$(line+'.pr_line_detailed').animate({height : info_field_height},600,function(){
			$(line+'.pr_line_detailed .picgall #1.picture').animate({opacity : 1});
				$(line+'.pr_line_detailed .gallery').animate({height : gallery_height});
				$(line+'.pr_line_detailed .gallery #pr_pic').animate({height : gallery_height});
				$(line+'.pr_line_detailed .gallery #next_pic').animate({height : gallery_height});
				$(line+'.pr_line_detailed .gallery .picgall').animate({height : gallery_height});
				$(line+'.pr_line_detailed .gallery .picgall #1.picture').animate({height : gallery_height});
			$(line+'.pr_line_detailed .gallery').animate({opacity : 1});
		}
		);
	}	
	

	
	
	
	
});

$("#next_pic").click(function(){
	
	var gallery_height="700px";
	
	var pics=$('.picture').length; 
	var line='#'+$(this).parent().parent().attr('id');
	//var pics_cat='#'+$(this).parent().parent().attr('id');
	//alert(line);
	var next_elem="";
	var now_elem="";
	var pic_num=0;
	
	for (var i = 1; i <= pics; i++) {
		var vis = $(line+'.pr_line_detailed .gallery .picgall #'+i+'.picture').css('opacity');
			if (vis==1){
				pic_num=i+1;
				now_elem = '#'+i+'.picture';
					if(i<pics){
					
						 next_elem= '#'+pic_num+'.picture';
					}
					if(i==pics){
						 next_elem= '#1.picture';
					}
			}
		
	}
		
	//alert(next_elem);
	$(line+'.pr_line_detailed .gallery .picgall '+now_elem).animate({opacity: 0});
	$(line+'.pr_line_detailed .gallery .picgall '+now_elem).animate({height: "0px"});
	$(line+'.pr_line_detailed .gallery .picgall '+next_elem).animate({height: gallery_height});
	$(line+'.pr_line_detailed .gallery .picgall '+next_elem).animate({opacity: 1});
	
	});
	
$("#pr_pic").click(function(){
	
	var gallery_height="700px";
	
	var pics=$('.picture').length; 
	var line='#'+$(this).parent().parent().attr('id');
	//var pics_cat='#'+$(this).parent().parent().attr('id');
	//alert(line);
	var pr_elem="";
	var now_elem="";
	var pic_num=0;
	
	for (var i = 1; i <= pics; i++) {
		var vis = $(line+'.pr_line_detailed .gallery .picgall #'+i+'.picture').css('opacity');
			if (vis==1){
				pic_num=i-1;
				now_elem = '#'+i+'.picture';
					if(i != 1){
					
						 pr_elem= '#'+pic_num+'.picture';
					}
					if(i==1){
						 pr_elem= '#3.picture';
					}
			}
		
	}
		
	//alert(next_elem);
	$(line+'.pr_line_detailed .gallery .picgall '+now_elem).animate({opacity: 0});
	$(line+'.pr_line_detailed .gallery .picgall '+now_elem).animate({height: "0px"});
	$(line+'.pr_line_detailed .gallery .picgall '+pr_elem).animate({height: gallery_height});
	$(line+'.pr_line_detailed .gallery .picgall '+pr_elem).animate({opacity: 1});
	
	});
	
	
    function PopUpShow(){
        $(".popup-container").show();
    }
    //Функция скрытия PopUp
    function PopUpHide(){
        $(".popup-container").hide();
    }

	
$(".addsite").click(function(){
	 PopUpShow();
});	

$(".pr_close").click(function(){
	 PopUpHide();
});	


	
//Плавный скрол к проекту открытому
	$('.pr_prev').click(function(){
 
	//var el='#'+$(this).attr('id');
	//var line='#'+$(this).parent().parent().attr('id');

	    var scroll_el ='#' + $(this).parent().parent().attr('id')+".pr_line_detailed";// возьмем содержимое атрибута href
		
			var scroll_item=$(this).parent().parent().attr('id');
		//alert(scroll_item);
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
					
				 $('html, body').animate({ scrollTop: $(scroll_el).offset().top-65 },400,"easeInExpo");// анимируем скроолинг к элементу scroll_el

					

        }
		//alert(scroll_el);
	    return false; // выключаем стандартное действие
    });	
	
	
$('.menu_item').click(function(){

	
var clear_height = "0px";
var w=$('.pr_line_detailed').css("height");	
	if (w!=0){
$('.pr_line_detailed .gallery').animate({opacity : 0});
		
			$('.pr_line_detailed').animate({height : clear_height});
			$('.pr_line_detailed .gallery').animate({height : clear_height});
			$('.pr_line_detailed .gallery #pr_pic').animate({height : clear_height});
			$('.pr_line_detailed .gallery #next_pic').animate({height : clear_height});
			$('.pr_line_detailed .gallery .picgall').animate({height : clear_height});
			$('.pr_line_detailed .gallery .picgall .picture').animate({height : clear_height});
			$('#slide_03').animate({height : "100%"});
	}

	
	
	
});
	
	
});


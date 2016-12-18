/**
 * Created by denisvolokh on 12.11.16.
 */
$(document).ready(function () {
    portfolioOpen=1;
   //для начала постоянные переменные
    elementsperline = 6;
    elementIndent = 15;
   //Нужно узнать ширину сетки и записать в глобальную переменную
    fieldWidth= $('.portfolio-container').width(); //.portfolio-container обязательный класс
    var ItemQty = $('.portfolio-item').length;//Узнаю количество блоков
  
});

$(".portfolio-item").hover(function(){ //Событие наведение на элемент
//Первым делом надо проверить не развернута ли какая то другая галлерея
    if(portfolioOpen!=1){
        console.log("close portfolio before", portfolioOpen);
    }else{
        console.log("OK");
    //$("div.content").offset() возвратит координаты первого div-элемента с классом content, относительно начала страницы.
    //$(".content").offset({top:30, left:100})    устанавливает координаты относительно начала страницы, равные (100, 30) для всех элементов с классом content.

    var ItemPos = $(this).offset(); 
    console.log(ItemPos);
    var ItemW= $(this).width();//element width
    var ItemH= $(this).height();//element height
    console.log(ItemH, ItemW, ItemPos.left, ItemPos.top);


    $(".portfolio-loader").css({height: ItemH, width: ItemW+elementIndent*2, left : ItemPos.left , top: ItemPos.top});
    $(".portfolio-loader").css({
        zIndex : "100"
    });

    $(".portfolio-loader").stop().animate({opacity : "0.7"});

    }

});


$(".portfolio-loader").click(function(){
//Let's check position of clicked item and put it into value
    var ItemId = $(this).attr('id');
    var ItemPos = $(this).offset(); 
    var ItemW= $(this).width();
    var ItemH= $(this).height();
    var ItemNum = $(this).attr('ItemNum');
   

    console.log(ItemH, ItemW, ItemNum, ItemPos);


    $(".portfolio-loader").css({height: ItemH, left : ItemPos.left});
    $(".portfolio-loader").css({
        zIndex : "100"
    });
    $(".portfolio-loader").animate({opacity : "1"});
    $(".portfolio-loader").animate({width: fieldWidth},300,'easeInOutBack',
    $(".portfolio-loader").animate({left : elementIndent },200,'easeInBack')
    );
    portfolioOpen = 1;
});

$("button.close").click(function(){


    $(".portfolio-loader").animate({width: 0},500,'easeInOutBack',
    $(".portfolio-loader").animate({opacity : "1"})
    );
    portfolioOpen =portfolioOpen - 1;
});

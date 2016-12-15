/**
 * Created by denisvolokh on 12.11.16.
 */
$(document).ready(function () {
   //для начала постоянные переменные
    elementsperline = 6;
   //Нужно узнать ширину сетки и записать в глобальную переменную
    fieldWidth= $('.portfolio-container').width()-30;

    var ItemQty = $('.portfolio-item').length;
    var ItemW= $('.portfolio-item').width()+30;
    RowsQty = Math.ceil(ItemW*ItemQty/fieldWidth);
    console.log(fieldWidth,ItemW, ItemQty, RowsQty);

});

$(".portfolio-item").hover(function(){

    var ItemW= $(this).width();
    var ItemH= $(this).height();

    var ItemNum = $(this).attr('ItemNum');
    if(ItemNum*(ItemW+30)>fieldWidth){
        //Длина строки:
        var RowLen=(ItemW+30)*ItemNum;
        var RowNum = Math.ceil(RowLen/(fieldWidth-30));
        var a = (fieldWidth-30)*RowNum-RowLen;

        var OpenPosX= (a);
        var OpenPosY= (RowNum-1)*ItemH;
    }else{
    var OpenPosX= (ItemW+30)*(ItemNum-1);
    var OpenPosY= 0;
    }

    console.log(ItemH, ItemW, ItemNum, OpenPosX);

    $(".portfolio-loader").css({height: ItemH, width: ItemW+30, left : OpenPosX+15, top: OpenPosY});

    $(".portfolio-loader").css({
        zIndex : "100"
    });

    $(".portfolio-loader").stop().animate({opacity : "0.7"});


});

$(".portfolio-loader").mouseleave(function(){

    $(this).stop().animate({opacity : "0"});
    $(this).css({height: 0, width: 0, left : 0});
    $(this).css({
        zIndex : "0"
    });
});


$(".portfolio-loader").click(function(){
//Let's check position of clicked item and put it into value
    var ItemW= $(this).width();
    //var ItemPad=$(this).css("padding-left");
    var ItemH= $(this).height();
    var ItemNum = $(this).attr('ItemNum');
    var OpenPos= (ItemW)*(ItemNum-1);
    console.log(ItemH, ItemW, ItemNum, OpenPos);


    //alert(ItemNum);
    $(".portfolio-loader").css({height: ItemH, left : OpenPos});
    $(".portfolio-loader").css({
        zIndex : "100"
    });
    $(".portfolio-loader").animate({opacity : "1"});
    $(".portfolio-loader").animate({left : "0"},500,'easeInBack',
        $(".portfolio-loader").animate({ width: "100%" },500,'easeInOutBack')
    );

});



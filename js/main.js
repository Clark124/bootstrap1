$(function () {

    function changeImg() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768
        $('#main_ad .carousel-inner .item').each(function (i, item) {
            var $item = $(item);
            var imgSrc = $item.data(isSmallScreen ? 'img-xs' : 'img-lg')
            if (isSmallScreen) {
                $item.html('<img src="' + imgSrc + '" alt=""/>')
                $item.css('backgroundImage', '')
            } else {
                $item.css('backgroundImage', 'url("' + imgSrc + '")')
                $item.html('')
            }

            // $item.css('backgroundImage','url("'+imgSrc+'")')
        })
    };

    //当产品的Tab超过设备宽度，让其产生scroll
    function scrollProTab(){
        var $ulContainer = $('.nav-tabs');
        var width = 30;
        $ulContainer.children().each(function (index, element) {
            width += $(element).width();
        })
        if (width > $(window).width()) {
            $ulContainer.css('width', width);
            $ulContainer.parent().css('overflow-x', "scroll");

        }else{
             $ulContainer.css('width', '100%')
        }
    }
    changeImg()
    scrollProTab()
    $(window).on('resize', function () {
        changeImg();
        scrollProTab();
    });

    $('[data-toggle="tooltip"]').tooltip();
    var $newTitle = $('.news-title')
    $('#news .nav-pills a').on('click',function(){
        var $this = $(this);
        var title = $this.data('title')
        $newTitle.text(title)  
    })


//让轮播图用手势切换画面
    var $carousels = $('.carousel');
    var startX,endX;
   
    $carousels.on('touchstart',function(e){
        startX = e.originalEvent.touches[0].clientX
        // console.log(startX);   
    })
    $carousels.on('touchmove',function(e){
        endX = e.originalEvent.touches[0].clientX;
        // console.log(endX);
    })
    $carousels.on('touchend',function(){
        var distance = Math.abs(startX-endX);
        if(distance>50){
            $(this).carousel(startX>endX?"next":'prev')
        }
    })
})
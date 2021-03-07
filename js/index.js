/* preventDefault */
$(function(){
            $('a[href="#"]').click(function(event){
                event.preventDefault();
            })
        })


$(function(){
    $('.best_list').bxSlider({auto:true});
    
    
    $('.menu_btn').click(function(){
        $('.gnb').toggleClass('on');
        var on=$('.gnb').hasClass('on');
        if(on){
            $('.menu_btn').attr({src:'img/close_btn.png'})
        }else{
            $('.menu_btn').attr({src:'img/menu_btn.png'})
        }
    })
})

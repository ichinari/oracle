$(function(){
    $('.js-button-push').on('click', function(){
        var num = Math.floor(Math.random() * 6);
       switch(num){
           case 1:
               $(this).text('大吉');
           break;
           case 2:
               $(this).text('中吉');
           break;
           case 3:
               $(this).text('小吉');
           break;
           case 4:
               $(this).text('吉');
           break;
           case 5:
               $(this).text('凶');
           break;
           case 6:
               $(this).text('大凶');
           break;
        }
    });
});
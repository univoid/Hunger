/**
 * Created by yuhui on 7/15/14.
 */
$(function(){
    $(window).scroll( function(){
        if ($(document).scrollTop() + $(window).height() > $(document).height() - 50) {
//            appendText();
            for (var i=0;i<6;i++) {
                $("#grid").append("<li></li>").children().last().load("li.txt");
                $("#content").append("<div></div>").children().last().load("content.txt");
            }
//            hack method  low efficiency
            new GridScrollFx( document.getElementById( 'grid' ) );
            new grid3D( document.getElementById( 'waterfall' ) );
        }
    })

//    function appendText()
//    {
//        var txt1='<li><a><img src="img/12.jpg" alt="img12"><h3>Shitamachi Rocket</h3></a></li>'
//        var txt2='<div><div class="dummy-img"></div><p class="dummy-text"> a</p><p class="dummy-text"></p></div>'
//        $("#grid").append(txt1);
//        $("#content").append(txt2);
//    }

});

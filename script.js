
$(document).ready(function(){

    // scroll event listener

    window.addEventListener("scroll", function(event){
        var scroll =this.scrollY;
        console.log(scroll)

        if (scroll>500){
            console.log("animatetext!")
            $(".section1txt").show()
            $(".section1txt").addClass("slide-up")

        }

        // if (scroll>2000)
        //     console.log("goodbyearrow")
        //     $(".arrowbox").show()
        //     $(".arrowbox").hide()
  
    });


    $(".searchkey").click(function(){
        $(".fas").toggleClass("color-white");
        $(".searchbar").toggleClass("expand")
        // $(".input").focus().toggleClass("active-width").val('')
        setTimeout($(".input").toggle(), 20000);
    })

     $(".todayrectangle").hover(function(){
        $(this).toggleClass("zoom")
    })

    $(".meet").hover(function(){
        $(this).toggleClass("zoom")
    })

    $(".section1txt").hover(function(){
        $(this).toggleClass("grey")
    })

    $(".container").hover(function(){
        $(this).toggleClass("zoom")
    })

    $(".banner").click(function(){
        $(this).toggleClass("long")
    })

    $(".menuleft").children().click(function(){
        // $(this).toggleClass("menuitems")
        $(this).toggleClass("menuitems2")
    })


    $('.scroll-box').mouseenter(function () {
        $(this).stop();
        var boxWidth = $(this).width();
        var textWidth = $('.scroll-text', $(this)).width();
        if (textWidth > boxWidth) {
            var animSpeed = textWidth * 10;
            $(this).animate({
                scrollLeft: (textWidth - boxWidth)
            }, animSpeed, function () {
                $(this).animate({
                    scrollLeft: 0
                }, animSpeed, function () {
                    $(this).trigger('mouseenter');
                });
            });
        }
    }).mouseleave(function () {
        var animSpeed = $(this).scrollLeft() * 10;
        $(this).stop().animate({
            scrollLeft: 0
        }, animSpeed);
    });

     $( ".row-item").draggable();
     $( ".todayrectanglepic").draggable();

});


    // $( ".menu3" ).children().draggable();
    // $("#menuitem1").click(function(){
    //     console.log("click")
    //     $("#container1").html("<p>this is a funny class</p>");
    // })

    // $("#menuitem2").click(function(){
    //     console.log("menuitem2click")
    //     $("#container1").text("this is a funny text")
    // })
    // $("#menuitem3").click(function(){
    //     console.log("menuitem2click")
    //     $("#container1").append("this is a funny text")
    // })

    // $(".menu2").children().click(function(){
    //     console.log("children!")
    //     $(this).toggleClass("menuitems")
    //     $(this).toggleClass("menuitems2")
    //     // $("#container2").slideToggle();
        // $("#container2").animate({
        //    opacity: '0.2',
        //    height: '60%',
        //    width: '60%',},2000,function(){
        //      alert("The paragraph is now hidden");
        // });

//     })

//     $("#menuitem6").click(function(){
//         console.log("menuitem6clicked")
//         scrollTo(0,5000)
//     })
  
// });


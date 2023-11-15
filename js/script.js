//title hide after seconds
$(document).ready(function() {

  $(".content-container, .info-button, .contact-button, .reload-button, .zoom-buttons").hide();
    $(".title").fadeIn(500);
//    setTimeout(function() { $(".title").hide(); }, 4000);
        $(".enter-website-button").click(function(){
          $(".title, .enter-website-button").fadeOut(500);
          $(".content-container, .info-button, .contact-button, .reload-button, .zoom-buttons").fadeIn(500);
        });

//reload button
    $('.reload-button').click(function() {
        location.reload();
    });

//buttons menu
    $(".info-button").click(function(){
      $("#info-text-div, .close-menuinfo-button").fadeIn(200);
      $("#contact-text-div, .info-button, .contact-button").fadeOut(200);

    });

    $(".contact-button").click(function(){
      $("#contact-text-div, .close-menuinfo-button").fadeIn(200);
      $("#info-text-div, .info-button, .contact-button").fadeOut(200);
    });
//close menu info button
      $(".close-menuinfo-button").click(function(){
        $(".info-button").fadeIn(200);
        $(".contact-button").fadeIn(200);
        $("#info-text-div, #contact-text-div, .close-menuinfo-button").hide();
      });



//zoom buttons
    var currentZoom = 0.8;
              $('.zoom-in-button').click(function () {
                currentZoom += .2;
                if (currentZoom >  0.8){currentZoom = 0.8}
                      $('#wrapper').animate({ 'zoom':currentZoom }, 'slow');
                    })
              $('.zoom-out-button').click(function () {
                currentZoom -= .2;
                if (currentZoom < 0.5){currentZoom = 0.5}
                      $('#wrapper').animate({ 'zoom': currentZoom}, 'slow');
                  })

//elarge image when click
      $(".img-small").click(function(){
        $(this).addClass('img-big');
        $('.img-small').not(this).removeClass('img-big');
        $(".close-content-button").fadeIn(200);
        $(".buttons-menu, .zoom-buttons, .text-bottom").fadeOut(200);
      });

      $(".close-content-button").click(function(){
        $('.img-small').removeClass('img-big');
        $(".close-content-button").fadeOut(200);
        $(".buttons-menu, .zoom-buttons, .text-bottom").fadeIn(200);
        });

//elarge video when click
        $(".vid-small").click(function(){
          $(this).addClass('vid-big');
      //add text to video display
          $(".information-video").addClass('text-bottom');
          $(".close-content-button").fadeIn(200);
          $(".buttons-menu, .zoom-buttons, .text-bottom").fadeOut(200);
          $("audio").get(0).pause();
        });

        $(".close-content-button").click(function(){
          $('.vid-small').removeClass('vid-big');
          $(".close-content-button").fadeOut(200);
          $(".buttons-menu, .zoom-buttons, .text-bottom").fadeIn(200);
    //video stop when close content button pressed, and start by 0
          $(".vid-small").get(0).pause();
          $(".vid-small").get(0).currentTime = 0;
          $("audio").get(0).play();
        });

//elarge lyrics when click
        $(".lyrics-video").click(function(){
          $('.lyrics-video').addClass('lyrics-video-big');
          $(".close-content-button").fadeIn(200);
          $(".buttons-menu, .zoom-buttons, .text-bottom").fadeOut(200);
    //color black lyrics
          $('p').addClass('p-black');
        });

        $(".close-content-button").click(function(){
          $('.lyrics-video').removeClass('lyrics-video-big');
          $(".close-content-button").fadeOut(200);
          $(".buttons-menu, .zoom-buttons, .text-bottom").fadeIn(200);
      //color transparent lyrics
          $('p').removeClass('p-black');

        });




//refresh page after time not acting
      var time = new Date().getTime();
        $(document.body).bind("mousemove keypress", function(e) {
            time = new Date().getTime();
        });

        function refresh() {
            if(new Date().getTime() - time >= 60000)
                window.location.reload(true);
            else
                setTimeout(refresh, 10000);
        }

        setTimeout(refresh, 10000);


//audio played shen enter title button
      $(".enter-website-button").on("click", function(){
       var selAudio = $("audio")[0];
        selAudio.play();
       });






















});

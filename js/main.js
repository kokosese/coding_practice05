$(function(){


    /* ローディング*/
    var loading = $(".loading");

  //ページの読み込みが完了後にアニメーションを非表示・MVの高さを調整
  $(window).on("load", function () {
    var windowHeight = $(window).height();
    $(".mainvisual").height(windowHeight);
    loading.delay("1000").fadeOut("2000");
  });

  //ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
  setTimeout(function () {
    loading.fadeOut("3000");
  }, 8000);

  //画面リサイズ時にMVの高さを調整
  $(window).resize(function () {
    var windowHeight = $(window).height();
    $(".mainvisual").height(windowHeight);
  });


    /*オーディオ　ON OFF*/
    var audio = $('#audio-js').get(0);
    var isPlaying = false;
    audio.volume = 0.5;

    $('#audio-btn-play').click(function(){
        if(isPlaying) {
            audio.pause();
            $('#audio-btn-play').removeClass('on');
            $('.audio-btn-play-text').html('SOUND OFF');
        } else {
            audio.play();
            $('#audio-btn-play').addClass('on');
            $('.audio-btn-play-text').html('SOUND ON');
        }
    });
    audio.onplaying = function () {
        isPlaying = true;
      };
      audio.onpause = function () {
        isPlaying = false;
      };

      /*ページ内スクロール*/
    $('a[href^="#"]').click(function(){
        var speed = 700;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });

      /* spのボタン表示 */

      var pagetop = $('.btn-sp');
      pagetop.hide();
      $(window).scroll(function () {
         if ($(this).scrollTop() > 100) {
              pagetop.fadeIn();
         } else {
              pagetop.fadeOut();
         }
      });
})
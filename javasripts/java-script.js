$(document).ready(function(){

    $(function(){
        $(".boxe").draggable();
    });

    $(function(){
        $(".curves").draggable();
    });

    $(function(){
        $(".decoration").draggable();
    });



// 3 экран смена флаконов при нажатии на стрелки
    var slideIndex = 1;
    showSlides(slideIndex);

    $(".arrow1").click(function() {
      slideIndex++;
      showSlides(slideIndex);
    });

    $(".arrow2").click(function() {
      slideIndex--;
      showSlides(slideIndex);
    });

    function showSlides(n) {
      var i;
      var slides = $(".vase img");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides.eq(i).css("display", "none");
      }
      slides.eq(slideIndex - 1).css("display", "block");
    }


//экраны

    $(".button1").click(function() {
        $(".sectionsecond").addClass("sectionblock").removeClass("sectionnone");
        $(".sectionthird").addClass("sectionnone").removeClass("sectionblock");
        $(".sectionfour").addClass("sectionnone").removeClass("sectionblock");
        $(".sectionfive").addClass("sectionnone").removeClass("sectionblock");
        $(".sectionfirst").addClass("sectionnone").removeClass("sectionblock");

    });

    $(".button2").click(function() {
        $(".sectionthird").addClass("sectionblock").removeClass("sectionnone");
        $(".sectionfour").addClass("sectionnone").removeClass("sectionblock");
        $(".sectionfive").addClass("sectionnone").removeClass("sectionblock");
        $(".sectionfirst").addClass("sectionnone").removeClass("sectionblock");
        $(".sectionsecond").addClass("sectionnone").removeClass("sectionblock");
    });

    $(".button4").click(function() {
        $(".sectionfour").addClass("sectionblock").removeClass("sectionnone");
        $(".sectionfive").addClass("sectionnone").removeClass("sectionblock");
        $(".sectionfirst").addClass("sectionnone").removeClass("sectionblock");
        $(".sectionsecond").addClass("sectionnone").removeClass("sectionblock");
        $(".sectionthird").addClass("sectionnone").removeClass("sectionblock");
    });



    $(".button5").click(function() {
        $(".sectionfirst").addClass("sectionblock").removeClass("sectionnone");
        $(".sectionsecond").addClass("sectionnone").removeClass("sectionblock");
        $(".sectionthird").addClass("sectionnone").removeClass("sectionblock");
        $(".sectionfour").addClass("sectionnone").removeClass("sectionblock");
    });


    // звучание

    $(".s1").click(function(){
        var audio = $(".sound_1")[0];
        audio.play() ;
    });

    $(".s2").click(function(){
        var audio = $(".sound_2")[0];
        audio.play() ;
    });

    $(".s3").click(function(){
        var audio = $(".sound_3")[0];
        audio.play() ;
    });

    $(".s4").click(function(){
        var audio = $(".sound_4")[0];
        audio.play() ;
    });

    $(".s5").click(function(){
        var audio = $(".sound_5")[0];
        audio.play() ;
    });

    $(".s6").click(function(){
        var audio = $(".sound_6")[0];
        audio.play() ;
    });

    $(".s7").click(function(){
        var audio = $(".sound_7")[0];
        audio.play() ;
    });

    $(".s8").click(function(){
        var audio = $(".sound_8")[0];
        audio.play() ;
    });

    $(".s9").click(function(){
        var audio = $(".sound_9")[0];
        audio.play() ;
    });

    $(".s10").click(function(){
        var audio = $(".sound_8")[0];
        audio.play() ;
    });

    $(".s11").click(function(){
        var audio = $(".sound_9")[0];
        audio.play() ;
    });


  
//риосвание при нажатии на элементы
    let
      canvas, ctx, brush = {
        x: 0,
        y: 0,
        color: '#FF6F6F',
        size: 8,
        down: false,
      },
      strokes = [],
      currentStroke = null;
    function redraw () {
      ctx.clearRect(0, 0, canvas.width(), canvas.height());
      ctx.lineCap = 'round';
      for (let i = 0; i < strokes.length; i++) {
        let s = strokes[i];
        ctx.strokeStyle = s.color;
        ctx.lineWidth = s.size;
        ctx.beginPath();
        ctx.moveTo(s.points[0].x, s.points[0].y);
        for (let j = 0; j < s.points.length; j++) {
          let p = s.points[j];
          ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }
    }
    function init () {
      canvas = $('#canvas');
      canvas.attr({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      ctx = canvas[0].getContext('2d');
      function mouseEvent (e) {
        brush.x = e.pageX;
        brush.y = e.pageY;
        currentStroke.points.push({
          x: brush.x,
          y: brush.y,
        });
        redraw();
      }
      canvas.mousedown(function (e) {
        brush.down = true;
        currentStroke = {
          color: brush.color,
          size: brush.size,
          points: [],
        };
        strokes.push(currentStroke);
        mouseEvent(e);
      }).mouseup(function (e) {
          brush.down = false;
          mouseEvent(e);
        currentStroke = null;
      }).mousemove(function (e) {
        if (brush.down)
        mouseEvent(e);
      });
      $('.clearButton').click(function () {
        strokes = [];
        redraw();
      });
      $('.c_red').click(function () {
        brush.color = "#FF6F6F";
      });
      $('.c_green').click(function () {
        brush.color = "#9DBE73";
      });
      $('.c_pink').click(function () {
        brush.color = "#FF8DDF";
      });
      $('.c_yellow').click(function () {
        brush.color = "#FFC774";
      });

      $('.c_blue').click(function () {
        brush.color = "#7A97FF";
      });

      $('.c_purple').click(function () {
        brush.color = "#9C6FFB";
      });
    }
    $(init);
  });




      


    








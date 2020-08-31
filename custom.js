$(document).ready(function(){
    $(".goto2").click(function(){
      $("body").addClass("open2");
      $("#sec2").find('.vjs-play-control').click();
    });
    $(".goto3").click(function(){
      $("body").addClass("open3");
      $("#sec2").find('.vjs-playing').click();
      $("#sec3").find('.vjs-play-control').click();
    });
    $(".goto4").click(function(){
      $("body").addClass("open4");
      $("#sec3").find('.vjs-playing').click();
      $("#sec4").find('.vjs-play-control').click();
    });
    $(".goto5").click(function(){
      $("body").addClass("open5");
      $("#sec4").find('.vjs-playing').click();
    });
    $(".goto6").click(function(){
      $("body").addClass("open6");
    });
    $(".goto7").click(function(){
  
      var th = $(this);
      var rating = $('input[name="rating"]:checked').val();
      if(th.hasClass('goto7')===true){
        if(rating!='' && rating!=undefined){
         
                th.attr('href','#');
               
                if(rating<=3){
                  $('.question_section').show();
                  $('.success_section').hide();
                }else{
                  $('.question_section').hide();
                  $('.success_section').show();
                  call_complete();
                }            
                $("body").addClass("open7");
            
        }else{
          alert('Rating already given.');
        }
      }else{
        alert('Please select rating first.');
      }
      
    });
    $(".goto8").click(function(){
      $("body").addClass("open8");
    });
  
    $(".backtohome").click(function(){
      $("body").removeClass("open2 open3 open4 open5 open6 open7 open8");
    });
  
  
    $(".back1").click(function(){
      $("body").removeClass("open2");
      $("#sec2").find('.vjs-playing').click();
    });
    $(".back2").click(function(){
      $("body").removeClass("open3");
      $("#sec3").find('.vjs-playing').click();
      $("#sec2").find('.vjs-play-control').click();    
    }); 
    $(".back3").click(function(){
      $("body").removeClass("open4");
      $("#sec4").find('.vjs-playing').click();
      $("#sec3").find('.vjs-play-control').click();
    }); 
    $(".back4").click(function(){
      $("body").removeClass("open5");
      $("#sec4").find('.vjs-play-control').click();
    }); 
    $(".back5").click(function(){
      $("body").removeClass("open6");
    }); 
    $(".back6").click(function(){
      $("body").removeClass("open7");
    }); 
    $(".back7").click(function(){
      $("body").removeClass("open8");
    });
  
    // $('.endsasion').click(function(){ alert(55)
    //   window.top.opener = null;
    //   window.close();
    // });
  
    if(page_title!=''){
      $('title').html(page_title);
    }
  
    if(view_mode=='doctor'){
      $('.totalpoll-buttons-results').remove();
    }else{
      $('.totalpoll-buttons-vote').remove();
      
    }
  
    $(document).on('click','.request_sample',function(){
      var th = $(this);
      
        $('.thanktxt').removeClass('hide_me');
        th.html('<span>Free sample requested</span>');
        th.addClass('sample_requested').addClass('btntickIcon').removeClass('request_sample');

        setTimeout(function(){
            $('.thanktxt').addClass('hide_me');
        },5000);
          
        
  
    });
  
    $(document).on('click','.request_call',function(){
      var th = $(this);
      
            $('.thanktxt').removeClass('hide_me');
            th.html('<span>Call back initiated</span>');
            th.addClass('call_requested').addClass('btntickIcon').removeClass('request_call');
  
            setTimeout(function(){
              $('.thanktxt').addClass('hide_me');
            },5000);
          
  
    }); 
  
    $(document).on('click','.submit_question',function(){
      var th = $(this);
      var qalist = $('input[name="qalist"]:checked').val();
      var question_comment = $('#question_comment').val();
      $('.question_error').hide();
  
      if(qalist!='' && qalist!=undefined){      
        
              $('.question_section').hide();
              $('.success_section').show();
              
            
      }else{
        $('.question_error').show();
      }
  
    });
  
    $(document).on('click','.question_skip',function(){
  
      $('.question_error').hide();
      $('.question_section').hide();
      $('.success_section').show();
      call_complete();
  
    });
  
  });
  
  
  
  
  /************** equal-height **************/
   
    $(document).ready(function () {
        pageHeight();
    });
    $(window).resize(function () {
        pageHeight();
    });
  
    function pageHeight() {
        var pageH = $(window).height();
        var fixdedpositionH = $(".pheight").innerHeight();
        var footerH = $(".footer").innerHeight();
        var contHeightH = $(".contHeight").innerHeight();
        var exceptbodycontH = fixdedpositionH - footerH;
        // var mainContainerH = $(".accountPage > .container").innerHeight();
        // $(".accountPage > .container").css({ "height": mainboxH });
         $(".pheight").css({ "min-height": pageH });
        $(".contHeight").css({ "min-height": exceptbodycontH });
    }
  
  /************** equal-height **************/
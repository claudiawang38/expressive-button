jQuery(document).ready(function ($) {


  var mouseOverStatus = false;

  var entryPosX;
  var entryPosY;
   var currentMousePosX;
    var currentMousePosY;

  var underlayerPosX;
  var underlayerPosY;

  $( ".button-needy-underlayer" )
  .mouseover(function(e) {
    mouseOverStatus = true;

    entryMousePosX = e.pageX;
    entryMousePosY = e.pageY;



    entryPosX = $( ".button-needy-visible" ).offset().left;
    entryPosY = $( ".button-needy-visible" ).offset().top;

    // var underlayerPosX = $( ".button-cuck-underlayer" ).offset().left;
    // var underlayerPosY = $( ".button-cuck-underlayer" ).offset().top;


  })
  .mouseout(function() {
    mouseOverStatus = false;
    console.log(mouseOverStatus);
  });

  // var originalPosX = $( ".button-cuck-underlayer" ).offset().left;
  // var originalPosY = $( ".button-cuck-underlayer" ).offset().top;

  var $mouseX = 0, $mouseY = 0;
  var $xp = 0, $yp =0;

  $(document).mousemove(function(e){
    $mouseX = e.pageX;
    $mouseY = e.pageY;

    $xp += (($mouseX - $xp)/12);
    $yp += (($mouseY - $yp)/12);

    if(mouseOverStatus){
      $(".button-needy-visible").css({marginLeft:$mouseX - entryPosX - 48, marginTop: $mouseY - entryPosY - 24});
      // console.log(" MouseX: " + $xp + " mouseY " + $yp + " entryMouseX: "+entryMousePosX + " entryMouseY: "+entryMousePosY + " entryPosX: "+entryPosX + " entryPosY: "+entryPosY + " ");
    }else{
      $(".button-needy-visible").css({margin:0 +'px', top:"none"});
    }
    // console.log($xp+"   "+$yp + "    "+originalPosX+"    "+originalPosY);

  });

});

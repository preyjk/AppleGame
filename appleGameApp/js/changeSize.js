$(function () {
  //初始化内容尺寸
  var initialHeight = $(window).height();
  var initialWidth = $(window).width();
  var heightScale = initialHeight / 946;
  var widthScale = initialWidth / 1920;
  if (heightScale >= widthScale) {
    $(".content").css("transform", "scale(" + widthScale + ")");
    $(".content").css("-ms-transform", "scale(" + widthScale + ")");
    $(".content").css("-moz-transform", "scale(" + widthScale + ")");
    $(".content").css("-webkit-transform", "scale(" + widthScale + ")");
    $(".content").css("-o-transform", "scale(" + widthScale + ")");
  } else {
    $(".content").css("transform", "scale(" + heightScale + ")");
    $(".content").css("-ms-transform", "scale(" + heightScale + ")");
    $(".content").css("-moz-transform", "scale(" + heightScale + ")");
    $(".content").css("-webkit-transform", "scale(" + heightScale + ")");
    $(".content").css("-o-transform", "scale(" + heightScale + ")");
  }
  //根据窗口大小调整尺寸
  $(window).resize(function () {
    initialHeight = $(window).height();
    initialWidth = $(window).width();
    heightScale = initialHeight / 946;
    widthScale = initialWidth / 1920;
    if (heightScale >= widthScale) {
      $(".content").css("transform", "scale(" + widthScale + ")");
      $(".content").css("-ms-transform", "scale(" + widthScale + ")");
      $(".content").css("-moz-transform", "scale(" + widthScale + ")");
      $(".content").css("-webkit-transform", "scale(" + widthScale + ")");
      $(".content").css("-o-transform", "scale(" + widthScale + ")");
    } else {
      $(".content").css("transform", "scale(" + heightScale + ")");
      $(".content").css("-ms-transform", "scale(" + heightScale + ")");
      $(".content").css("-moz-transform", "scale(" + heightScale + ")");
      $(".content").css("-webkit-transform", "scale(" + heightScale + ")");
      $(".content").css("-o-transform", "scale(" + heightScale + ")");
    }
  });
});

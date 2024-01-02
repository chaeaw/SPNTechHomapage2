$(document).ready(function () {
  //gnb, m-gnb 아이템 클릭 시 item 활성화
  $(".gnb-item").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

  // m-gnb 활성화
  $(".m-gnb-burger").click(function () {
    $(this).siblings(".m-gnb-menu").addClass("active");
  });

  // m-gnb 아이템, btn-close 클릭 시 menu 비활성화
  $(".m-gnb-item, .btn-close").click(function () {
    $(".m-gnb-menu").removeClass("active");
  });
});

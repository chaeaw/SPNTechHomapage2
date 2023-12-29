$(document).ready(function () {
  // m-gnb 활성화
  $(".m-gnb-burger").click(function () {
    $(this).siblings(".m-gnb-menu").addClass("active");
  });

  // m-gnb 아이템 클릭 시 비활성화
  $(".m-gnb-item").click(function () {
    $(".m-gnb-menu").removeClass("active");
  });
});

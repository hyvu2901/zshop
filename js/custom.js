// JavaScript Document
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


$("#banner").owlCarousel({
loop:true, // cho lap lại
items:1, // xuất hiện 1 ảnh thôi
smartSpeed:1000, // tốc độ thay đổi ảnh
autoplay:true, // cho phép tự động chạy
autoplayTimeout:5000, // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true, // cho xuất hiện bộ nút tới lui
margin:0
})
$("#gallery").owlCarousel({
loop:true, // cho lap lại
items:4, // xuất hiện 1 ảnh thôi
smartSpeed:1000, // tốc độ thay đổi ảnh
autoplay:true, // cho phép tự động chạy
autoplayTimeout:5000, // thời gian chờ khi chuyển ảnh khi chạy tự động
// nav:true, cho xuất hiện bộ nút tới lui
margin:30,
	dots:false,
})
$("#logobrand").owlCarousel({
loop:true, // cho lap lại
items:4, // xuất hiện 1 ảnh thôi
smartSpeed:1000, // tốc độ thay đổi ảnh
autoplay:true, // cho phép tự động chạy
autoplayTimeout:3000, // thời gian chờ khi chuyển ảnh khi chạy tự động
// nav:true, cho xuất hiện bộ nút tới lui
margin:30,
	dots:false,
})



import $ from 'jquery'
import 'slick-carousel'

document.addEventListener('DOMContentLoaded', function () {
  $('.slider-content').slick({
    dots: true,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
  })
  $('.slider-wrapper').removeAttr('style')
})

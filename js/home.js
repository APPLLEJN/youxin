"use strict"

var Home = {
  _setInitDom: function() {
    // 搜索
    $('.search-left-content').text($('.search-select').find("option:selected").text())
    // 轮播
    var imgNum = $('#headerList li').length
    for (var i = 0; i < imgNum; i++) {
      $('.home-num-list ul').append('<li></li>')
    }
    $('.home-num-list ul li').eq(0).addClass('on')
    this.pw = new pageSwitch('headerList', {
      duration: 600,
      direction: 0,
      start: 0,
      loop: true,
      ease: 'ease',
      transition: 'scroll',
      mouse: false,
      autoplay: true,
      interval: 3000,
      slideCallback: function (index) {
        var num = $('#headerList li').length
        if (index == num) {
          index = 0
        }
        $('.home-num-list li').removeClass('on').eq(index).addClass('on')
      }
    })
  },
  _bindEvent: function() {
    var _this = this
    // 搜索
    $('.search-select').on('change', function() {
      $('.search-left-content').text($('.search-select').find("option:selected").text())
    })
  },
  init: function() {
    this._setInitDom()
    this._bindEvent()
  },
  getInitData: function() {
    
  }
}

// main
$(function() {
  Home.init();
  Home.getInitData();
})

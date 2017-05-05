/***** POSITION TITLES *****/
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


var GLOBAL_PADDING = 35;

var $sidebar = $('.sidebar');
var $content = $('.content');

var $scrollTracker = $('.scroll-tracker');
var $scrollbar = $('.scrollbar');
var $document = $(document);

resize();
$(window).resize(resize);

initImgLoad();

function getCenteredContentFixedLeft($el) {

  var width = $el.outerWidth();
  var windowWidth = $(window).outerWidth();
  var sidebarWidth = $sidebar.outerWidth();
  var scrollbarWidth = $scrollbar.outerWidth();

  var contentWidth = windowWidth - sidebarWidth;

  var left = ((contentWidth - scrollbarWidth - width) / 2) + sidebarWidth;

  return left;
}

function getCenteredContentFixedTop($el) {
  var height = $el.height();
  var windowHeight = $(window).height();

  return (windowHeight - height) / 2;
}

function positionSectionTitles() {
  // $('.section-title').each(function(){
  //     var title = $(this);
  //
  //     var left = getCenteredContentFixedLeft(title);
  //
  //     title.css({'left': left + 'px'});
  //     title.show();
  // });
  //
  // scrollSection();
}

/***** POSITION FOOTER & CATEGORIES *****/
function positionCategoriesFooter() {
  var $categories = $('.content-nav');
  var $footer = $('.content footer');

  var categoriesLeft = getCenteredContentFixedLeft($categories);
  var footerLeft = getCenteredContentFixedLeft($footer);

  $categories.css('left', categoriesLeft + 'px');
  $footer.css('left', footerLeft + 'px');
}

/***** HANDLE RESIZING *****/

// will be called on window resize
function resize() {
    positionSectionTitles();
    positionCategoriesFooter();
    resizeTracker();
    // resizeSectionHeader();
}

/***** SECTION HEADER *****/

// function scrollSection() {
//   $('.shop-section').each(function(){
//
//     var $section = $(this);
//     var $window = $(window);
//     var $title = $(this).children('.section-title');
//
//     var sectionId = $section.attr('id');
//     var $sectionLink = $('#' + sectionId + '-link');
//
//     var centeredTop = getCenteredContentFixedTop($title);
//
//     var windowHeight = $window.height();
//     var windowTop = $window.scrollTop();
//
//     // Due to the title sticking up further because of the tilt, have to modify a calculation here
//     var windowTopBuffered = windowTop - windowHeight / 2;
//     windowTopBuffered = windowTopBuffered > 0 ? windowTopBuffered : 0;
//
//     var windowBottom = windowHeight + $window.scrollTop();
//
//     var elemTop = $section.offset().top;
//     var elemBottom = elemTop + $section.innerHeight();
//
//     if (windowTop >= elemBottom || windowBottom <= elemTop) {
//       // console.log('not on screen');
//       // Not on Screen at all
//       $title.hide().css('top', '200%');
//       $sectionLink.removeClass('active');
//     } else if (windowTop < elemBottom && windowBottom > elemBottom) {
//       // console.log('leave screen');
//       // Should start scrolling out of screen
//       var offset = windowBottom - elemBottom;
//       $sectionLink.removeClass('active');
//
//       $title.css('top', (centeredTop - offset) + 'px')
//       $title.show();
//     } else if (windowTopBuffered < elemTop && windowBottom > elemTop) {
//       // console.log('enter screen');
//       $sectionLink.addClass('active');
//       // Should start scrolling into screen
//       var offset = elemTop - windowTopBuffered;
//
//       $title.css('top', (offset > centeredTop ? offset : centeredTop) + 'px')
//       $title.show();
//     } else {
//       // console.log('wt: ' + windowTop);
//       // console.log('elt: ' + elemTop);
//       // console.log('wb: ' + windowBottom);
//       // console.log('elb: ' + elemBottom);
//       // console.log('on screen');
//       $sectionLink.addClass('active');
//       // Center it
//       $title.css('top', centeredTop + 'px');
//     }
//
//   });
// }
//
// // $('.scrollable').scroll(scrollSection);
// $(window).scroll(scrollSection);


/***** SECTION SLIDESHOW ****/

// resizeSectionHeader();

function resizeSectionHeader() {
  $('.slider').each(function(){
    var $sectionHeader = $(this).parent();

    var height = $(this).children('img').first().height();
    $sectionHeader.css('height', height + 'px');
  });
}

$('.slider').each(function(){
  var $slider = $(this);
  var $firstImage = $slider.children('img');

  $slider.children('img').first().addClass('active');
  $sliderLink = $slider.children('.slider-shop-link');

  $sliderLink.attr('href', $firstImage.attr('data-href'));
  $sliderLink.css({color: $firstImage.attr('data-color')});
});

$('.scrollable').on('swiperight', '.product', function(e){
  if (isMobile.any()) {
    $(this).find('.prev').click();
  }
});

$('.scrollable').on('swipeleft', '.product', function(e){
  if (isMobile.any()) {
    $(this).find('.next').click();
  }
});

$('.scrollable').on('swiperight', '.section-header', function(e){
  if (isMobile.any()) {
    $(this).find('.prev').click();
  }
});

$('.scrollable').on('swipeleft', '.section-header', function(e){
  if (isMobile.any()) {
    $(this).find('.next').click();
  }
});

$('.shop-section').on('click', '.next', function(e){
  e.preventDefault();
  var wrapped = false;

  var $current = $(this).siblings('.slider').find('img.active').first();
  var $next = $current.next('img');

  var $sliderShopLink = $(this).siblings('.slider').children('.slider-shop-link');

  if ($next.length == 0) {
    var $sliderImages = $current.siblings('img');

    $next = $sliderImages.first();

    // reset positions of sliderimages without transitions
    $sliderImages.addClass('notransition');
    $sliderImages.removeClass('previous');
    $sliderImages[0].offsetHeight;
    $sliderImages.removeClass('notransition');


    $current.removeClass('active');
    var wrapped = true;
  }

  $current.addClass('previous').removeClass('active').prevAll('img');
  $next.addClass('active');

  var sliderId = $next.attr('data-slider-id');
  var $mobileSliderControl = $next.parent().siblings('.mobile-slider-control');
  var $sliderLink = $mobileSliderControl.find('[data-slider-link-id="'+sliderId+'"]');

  $sliderLink.addClass('active').siblings().removeClass('active');

  $sliderShopLink.attr('href', $next.attr('data-href'));
  $sliderShopLink.css('color', $next.attr('data-color'));

  if (wrapped) {
    setTimeout(function(){
      $current[0].offsetHeight;
      wrapped = false;
      $current.addClass('notransition');
      $current.removeClass('previous');
      $current[0].offsetHeight;
      $current.removeClass('notransition');
    }, 600)

  }

});

$('.shop-section').on('click', '.prev', function(e){
  e.preventDefault();

  var wrapped = false;

  var $current = $(this).siblings('.slider').find('img.active').first();
  var $previous = $current.prev('img');

  var $sliderShopLink = $(this).siblings('.slider').children('.slider-shop-link');

  if ($previous.length == 0) {
    var $sliderImages = $current.siblings('img');

    $previous = $sliderImages.last();

    // reset positions of sliderimages without transitions
    $sliderImages.addClass('notransition');
    $sliderImages.addClass('previous');
    $sliderImages[0].offsetHeight;
    $sliderImages.removeClass('notransition');


    $current.removeClass('active');
    var wrapped = true;
  }

  $current.removeClass('active').removeClass('previous');
  $previous.addClass('active');

  var sliderId = $previous.attr('data-slider-id');
  var $mobileSliderControl = $previous.parent().siblings('.mobile-slider-control');
  var $sliderLink = $mobileSliderControl.find('[data-slider-link-id="'+sliderId+'"]');

  $sliderLink.addClass('active').siblings().removeClass('active');

  $sliderShopLink.attr('href', $previous.attr('data-href'));
  $sliderShopLink.css('color', $previous.attr('data-color'));

  if (wrapped) {
    setTimeout(function(){
      $current[0].offsetHeight;
      wrapped = false;
      $current.addClass('notransition');
      $current.addClass('previous');
      $current[0].offsetHeight;
      $current.removeClass('notransition');
    }, 600)

  }

});

/***** SCREENSAVER *****/

var mousetimeout;
var clockInterval;
var screensaverActive = false;
var idletime = 10000;
var $time = $('.screensaver .time');

function showScreensaver(){
    updateClock();
    $('.screensaver').fadeIn();
    screensaverActive = true;
    clockInterval = setInterval(updateClock, 1000);
}

function stopScreensaver(){
    $('.screensaver').fadeOut();
    screensaverActive = false;
    clearInterval(clockInterval);
}

function updateClock() {
  var date = new Date();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var timeString = hour + ' hours / ' + minute + ' minutes / ' + second + ' seconds';
  $time.html(timeString);
}

if (isMobile.any()) {
  $('.screensaver').on('swipe swipeup swipeupedown', function(e){
      $(this).click();
  });
}

var mouseDragX = null;
var mouseDragY = null;
var startPosLeft = null;
var startPosTop = null;

var $drape = $('.drape');

$drape.on("mousemove", function(e) {
  if (e.which == 1) {
    var deltaX = mouseDragX - e.pageX;
    var deltaY = mouseDragY - e.pageY;

    var offsetX = parseInt(startPosLeft) - deltaX;
    var offsetY = parseInt(startPosTop) - deltaY;

    $drape.css({left: offsetX+'px', top: offsetY+'px'});
    $drape.css({right: 'auto', bottom: 'auto'});
  }
});

$drape.mousedown(function(e){
  mouseDragX = e.pageX;
  mouseDragY = e.pageY;

  if (parseInt($drape.css('bottom')) == 0) {

    var windowHeight = $(window).height();
    var drapeHeight = $drape.height();

    startPosTop = (windowHeight - drapeHeight)/2;
  } else {
    startPosTop = $drape.css('top');
  }

  startPosLeft = $drape.offset().left;

});

$drape.mouseup(function(e){
  mouseDragX = null;
  mouseDragY = null;
  startPosLeft = null;
  startPosTop = null;
});

$('.drape').click(function(e){
  e.stopPropagation();
});

$('.screensaver').click(function(e){
  if (screensaverActive) {
    stopScreensaver();
  }
});

$(document).mousemove(function(){
  clearTimeout(mousetimeout);

  mousetimeout = setTimeout(function(){
      showScreensaver();
  }, 1000 * idletime); // 5 secs
});


/***** CLICK HANDLERS *****/

$('.shop-section').on('click', '.info', function(e){
  e.preventDefault();
  var $product = $(this).parents('.product');

  if ($product.hasClass('info-open')) {
    $product.removeClass('info-open').removeClass('cart-open').removeClass('slider-open');
  } else {
    deactivateSelectFromProduct($product);

    $product.removeClass('cart-open').addClass('info-open').addClass('slider-open');
  }

});

$('.shop-section').on('click', '.add-to-cart', function(e){
  e.preventDefault();


  if ($(this).hasClass('disabled')) {
    return false;
  }

  var $product = $(this).parents('.product');

  var defaultId = $(this).attr('data-prod-id');

  if (defaultId) {
    $product.find('.select-radio').prop('checked', true);
    $product.find('form').submit();
    return;
  }

  if ($product.hasClass('cart-open')) {
    deactivateSelectFromProduct($product);
    $product.removeClass('info-open').removeClass('cart-open').removeClass('slider-open');
  } else {
    $product.removeClass('info-open').addClass('cart-open').addClass('slider-open');
  }

});

$('.shop-section').on('click', '.zoom',function(e){
  e.preventDefault();
  var $product = $(this).parents('.product');

  if ($product.hasClass('zoomed')) {
    window.history.replaceState(null, null, '/collections');
  } else {
    var name = $product.find('name').html();
    var url = $product.attr('data-prod-url');
    window.history.replaceState(name, name, url);
  }

  $product.toggleClass('zoomed');
  resize();
});

$('.shop-section').on('click', '.close-slider',function(e){
  e.preventDefault();
  var $product = $(this).parents('.product');

  deactivateSelectFromProduct($product);

  $product.removeClass('info-open').removeClass('cart-open').removeClass('slider-open');
});

//$('.mobile-slider-control a').click(function(e) {
//  e.preventDefault();
//
//  var $slideLink = $(this);
//  $slideLink.addClass('active').siblings().removeClass('active');
//  var $mobileControl = $slideLink.parent();
//  var $slider = $mobileControl.next('.slider');
//
//  var slideId = $slideLink.attr('data-slider-link-id');
//
//  var $img = $slider.find('[data-slider-id="'+slideId+'"]');
//
//  var $prevMiddleImg = $img.prevAll('img');
//  var $nextMiddleImg = $img.nextAll('img');
//  $prevMiddleImg.addClass('previous').not('.active').addClass('notransition');
//  $nextMiddleImg.not('.active').addClass('notransition').removeClass('previous');
//
//  $slider.children('.active').removeClass('active');
//  $img.addClass('active').removeClass('previous');
//
//  if ($prevMiddleImg.length > 0) {
//    $prevMiddleImg[0].offsetHeight;
//  }
//
//  if ($nextMiddleImg.length > 0) {
//    $nextMiddleImg[0].offsetHeight; // force reflow
//  }
//
//  $slider.children('.notransition').removeClass('notransition');
//});

/**** SEARCH ****/

$('.search-link').click(function(e){
  e.preventDefault();
  $(this).siblings('.search').show().children().first().focus();
  $(this).hide();
  resize();
});

/**** SUBSCRIBE ****/

$('.subscribe-link').click(function(e) {
  e.preventDefault();

  var $subscribe = $('.subscribe');

  $subscribe.fadeIn();
  var $emailInput = $subscribe.find('.email-input');

  $subscribe.click(function(e) {
        if (e.target == this) {
            $subscribe.fadeOut();
        }
    });

  $(document).keyup(function(e) {
     if (e.keyCode == 27) {
        $subscribe.fadeOut();
      }
  });

  $emailInput.focus();
});

$('#mc-embedded-subscribe').click(function(){
  $('#subscribe-smiley').fadeIn();
  $('#mc_embed_signup').fadeOut();

  setTimeout(function(){
    $('.subscribe').fadeOut(function(){
      $('#subscribe-smiley').hide();
      $('#mc_embed_signup').show();
    });

  }, 3000)

});

$('.subscribe .email-input').val('');


/*** SELECT BOX ***/

$('.shop-section').on('click', '.select-box-label', function(){
  var $selectBox = $(this).parent();
  var $productInner = $selectBox.parents('.product-inner');

  if ($selectBox.hasClass('open')) {
    deactivateSelect($selectBox, $productInner);
  } else {
    activateSelect($selectBox, $productInner);
  }

});

$('.shop-section').on('click', '.select-radio-label', function(){
  var $radio = $(this);
  var $mainLabel = $radio.parent().siblings('.select-box-label');

  var $selectBox = $mainLabel.parent();
  var $productInner = $selectBox.parents('.product-inner');
  deactivateSelect($selectBox, $productInner);

  $mainLabel.html($radio.html());
});

function deactivateSelectFromProduct($product) {
  var $productInner = $product.find('.product-inner');
  var $selectBox = $product.find('.select-box');
  deactivateSelect($selectBox, $productInner);
}

function deactivateSelect($selectBox, $productInner) {
  $selectBox.removeClass('open');
  $productInner.removeClass('select-open');
}

function activateSelect($selectBox, $productInner) {
  $selectBox.addClass('open');
  $productInner.addClass('select-open');
}

/**** MOBILE NAV ****/

$('.hamburger').click(function(){
  $('.scrollbar').toggleClass('hide');
  $(this).toggleClass('hamburger-open');
  $('.mobile-nav').toggleClass('nav-open');
  $('body').toggleClass('mobile-nav-open');
});

$('.primary-nav a').click(function(){
  $('.hamburger').click();
});

/***** SCROLLBAR *****/

function resizeTracker() {
  var windowHeight = $(window).height();
  var scrollTop = $document.scrollTop();
  var height = $document.height();

  var tempPercentage = scrollTop / height;

  var scrollSize = scrollTop + (windowHeight * tempPercentage);

  var size = scrollSize / height * 100;

  if (size > 99.5) {
    size = 100;
  }

  $scrollTracker.css('height', size + '%');
}

$document.scroll(resizeTracker);

/***** ARROW KEY SCROLL *****/
$(document).keydown(function(e) {

  if (e.keyCode === 38 || e.keyCode === 37) {
    var $currentlyActive = $('.primary-nav .active');
    var $prev = $currentlyActive.parent().prev().find('a');

    if ($prev.length > 0) {
      var id = $prev.attr('href').replace('/collections/', '');
      $(document).scrollTop($(id).offset().top + 100);
    }

    e.preventDefault();
    return false;

  } else if (e.keyCode === 40 || e.keyCode === 39) {
    var $currentlyActive = $('.primary-nav .active');
    var $next = $currentlyActive.parent().next().find('a');

    if ($next.length > 0) {
      var id = $next.attr('href').replace('/collections/', '');
      $(document).scrollTop($(id).offset().top + 100);
    }

    e.preventDefault();
    return false;
  }

});


/**** CURTAIN ****/
var $curtain = $('.curtain');
var $body = $('body');

if ($curtain.length > 0) {

  $body.css('overflow', 'hidden');

  if (isMobile.any()) {
    $('.curtain').on('swipe swipeup swipeupedown', function(e){
        $(this).click();
    });
  }

  $curtain.click(function(){
    $curtain.remove();
    window.history.replaceState('Actual Source', 'Actual Source', '/collections');
    $body.css('overflow', 'auto');
  });
} else {
  $body.css('overflow', 'auto');
}

/***** PAGINATION *****/

function loadPagination($more) {
      $more.each(function(){
      $moreLink = $(this);

      var pageUrl = $moreLink.attr('data-pagination-url');
      var collectionsUrl = $moreLink.attr('data-collection-url');

      var moreUrl = collectionsUrl + '?' + pageUrl.split('?')[1];

      $.get(moreUrl, function(data){
        var $nextMore = $(data).find('.more');
        var moreProducts = $(data).find('.shop-section').children('article');
        
        var $parent = $('#'+$moreLink.parent().attr('id'));

        moreProducts.appendTo($parent).each(function(){
          // console.log($(this).find('.slider'));
          $(this).find('.slider').children('.product-image').first().addClass('active');
        });

          initImgLoad();
          $more.remove();
            if ($nextMore.length > 0){
          		loadPagination($nextMore);
            }
      });

    });
}

function initImgLoad() {

    $('img.lazy').lazyload({
            placeholder: '//cdn.shopify.com/s/files/1/0866/5580/t/10/assets/transparent.png?15848447532710438483',
            threshold: 500
        });
}


/***** LAZY LOAD *****/

$('.preload').each(function(){
    var $section = $(this);

    var url = $section.attr('data-collection-url');

    $.get(url, function(data) {
        var products = $(data).find('.shop-section').children('article');

        $section.removeClass('preload');

        products.appendTo($section).each(function(){
            $(this).find('.slider').children('.product-image').first().addClass('active');
        });

        $more = $section.find('.more');

        loadPagination($more);

        initImgLoad();

    });
});

/****** SHARE ******/

var $shareLink = $('.share-link');

$('.shop-section').on('click', '.share-link', function(e){
    e.preventDefault();
    $link = $(this);
    $link.parent().toggleClass('open');

    var $productDetails = $link.parents('.product-details');

    var scrollAmount = $productDetails.prop('scrollHeight') - $productDetails.innerHeight();

    $productDetails.animate({scrollTop: scrollAmount + 140});
});


/****** INSTAFEED ******/
var $instafeed = $('#instagram-feed');

if ($instafeed.length > 0) {

    var url = 'https://api.instagram.com/v1/users/2057330618/media/recent?access_token=2057330618.67c3f47.51c9efe1a1c34946b576eb08aa177150'

    $.ajax({
        method: "GET",
        url: url,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "jsonpcallback",
        success: function(data) {

            $(data.data).each(function(){

                var date = moment(parseInt(this.created_time) * 1000);

                var igImage = '' +
                    '<div class="feed-post">';

                    if (this.type == 'video') {
                        igImage += '<video autoplay loop muted width="100%">' +
                            '<source src="' + this.videos.standard_resolution.url + '" type="video/mp4">' +
                            '</video>'

                    } else {
                        igImage += '<a target="_blank" href="' + this.link + '">' +
                        '<img src="'+this.images.standard_resolution.url+'"></a>';
                    }

                    igImage += '<p class="caption">' +
                    '<a target="_blank" href="'+ this.link + '"><span class="date">'+ date.format('MMM D, YYYY') + '</span><br>' + this.caption.text +
                    '</a></p></div>';

                $instafeed.append(igImage);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
}

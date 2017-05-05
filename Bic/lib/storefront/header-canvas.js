@charset "UTF-8";html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline
}

article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
    display: block
}

body {
    line-height: 1
}

ol,ul {
    list-style: none
}

blockquote,q {
    quotes: none
}

blockquote:before,blockquote:after,q:before,q:after {
    content: '';
    content: none
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

h1,h2,h3,h4,h5,h6,.h1,.h1,.h3,.h4,.h5 {
    font-family: 'Agipo Bold Condensed', 'Arial Narrow', 'HelveticaNeue-CondensedBlack';
    font-weight: bold;
    font-style: normal;
    font-stretch: condensed;
    word-spacing: 0;
    text-transform: uppercase;
    line-height: 1em
}

body,html {
    height: 100%
}

body {
    font-family: "Agipo Mono","monofspaced";
    color: red;
    word-spacing: -1px
}

a {
    color: red;
    cursor: pointer;
    cursor: url(//cdn.shopify.com/s/files/1/0866/5580/t/10/assets/hand1x.png?12329719807685719109),pointer;
    cursor: -webkit-image-set(url(//cdn.shopify.com/s/files/1/0866/5580/t/10/assets/hand.png?12329719807685719109) 2x),pointer
}

.anchor {
    display: block;
    visibility: hidden;
    position: relative
}

::-webkit-scrollbar {
    display: none
}

html {
    overflow: -moz-scrollbars-none
}

nav {
    text-transform: uppercase;
    font-size: 15px
}

.hide {
    display: none
}

.center {
    text-align: center
}

.notransition {
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -o-transition: none !important;
    -ms-transition: none !important;
    transition: none !important
}

.input-box,.select-radio-label {
    padding: 0;
    margin: -1px 0 0 0;
    height: 39px;
    border: 1px solid red;
    width: 100%;
    overflow: hidden;
    text-transform: uppercase;
    font-size: 15px;
    line-height: 39px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.input-box select,.select-radio-label select,.input-box input,.select-radio-label input {
    text-transform: uppercase;
    font-family: "Agipo Mono","monofspaced";
    color: red;
    width: 100%;
    border: none;
    box-shadow: none;
    background-color: transparent;
    background-image: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0
}

.input-box select:focus,.select-radio-label select:focus,.input-box input:focus,.select-radio-label input:focus {
    outline: none
}

.input-box select,.select-radio-label select {
    box-sizing: content-box;
    margin-left: -10px;
    margin-right: -10px;
    padding-left: 10px;
    padding-right: 10px;
    height: 100%
}

.input-box input,.select-radio-label input {
    border: 1px solid red
}

.input-box.select-box:after,.select-box.select-radio-label:after {
    font-size: 15px;
    content: "▼";
    position: absolute;
    top: 1px;
    right: 17px;
    z-index: -1
}

.input-box.select-box.open:after,.select-box.open.select-radio-label:after {
    content: "▲";
    z-index: auto
}

.input-box .quantity,.select-radio-label .quantity {
    width: 19px;
    height: 19px;
    padding: 1px;
    float: right;
    text-align: center;
    margin-top: 7px
}

.select-radio {
    display: none
}

.select-radio-label {
    display: block;
    position: relative;
    z-index: 11;
    margin-left: -1px;
    margin-right: -1px;
    width: auto;
    cursor: pointer
}

.select-radio-label:hover {
    text-decoration: underline
}

.select-radio:checked+.select-radio-label {
    text-decoration: underline
}

.select-box-options {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #f5d3d5;
    z-index: 10;
    margin-top: 1px
}

.select-box-label {
    width: 100%;
    height: 100%;
    display: block
}

.select-box {
    overflow: visible
}

.select-box-switch {
    display: none
}

.select-box.open .select-box-options {
    display: block
}

.curtain,.screensaver {
    background-color: #000000;
    background-image: url(//cdn.shopify.com/s/files/1/0866/5580/t/10/assets/curtain_bg_image.png?12329719807685719109);
    background-size: cover;
    background-position: center center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100
}

.curtain .upside-down,.screensaver .upside-down {
    display: inline-block;
    -webkit-transform: rotate(-180deg) translateY(-0.09em);
    -moz-transform: rotate(-180deg) translateY(0.09em);
    -o-transform: rotate(-180deg) translateY(0.09em);
    transform: rotate(-180deg) translateY(0.09em);
    ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2)
}

.center-title {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 185px;
    margin: auto;
    height: 185px;
    text-align: center;
    color: #fff
}

@media (max-width: 1168px) {
    .center-title {
        font-size:14vw;
        height: 22.5vw
    }
}

.screensaver {
    background-image: none;
    display: none;
    background-color: #f5d3d5;
    z-index: 99;
    text-align: center
}

.screensaver .drape {
    height: 100%;
    max-height: 810px;
    width: auto;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    -webkit-user-drag: none
}

@media (max-width: 1168px) {
    .screensaver .drape {
        height:62vw
    }
}

@media (max-width: 480px) {
    .screensaver .drape {
        height:105%
    }
}

.screensaver .center-title {
    color: red
}

@media (max-width: 480px) {
    .screensaver .center-title {
        display:none
    }
}

.screensaver .time,.screensaver .temperature {
    position: fixed;
    top: 35px;
    font-size: 15px;
    text-transform: uppercase
}

.screensaver .time {
    left: 0;
    width: 100%;
    text-align: center
}

.screensaver footer {
    left: 0;
    width: 100%;
    text-align: center
}

.sidebar {
    padding: 35px;
    border-right: 1px solid red;
    text-align: center;
    display: inline-block;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 322px;
    min-height: 500px;
    background-color: #fff;
    z-index: 2
}

.hamburger {
    display: none
}

.mobile-heading {
    display: none
}

.mobile-heading a {
    text-decoration: none
}

.mobile-heading .upside-down {
    display: inline-block;
    -webkit-transform: rotate(-180deg) translateY(-0.09em);
    -moz-transform: rotate(-180deg) translateY(0.09em);
    -o-transform: rotate(-180deg) translateY(0.09em);
    transform: rotate(-180deg) translateY(0.09em);
    ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2)
}

.secondary-nav {
    position: absolute;
    bottom: 35px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    word-spacing: 2px
}

.secondary-nav li {
    display: inline
}

.secondary-nav a {
    text-decoration: none;
    border-bottom: 1px solid
}

.cart-nav a {
    text-decoration: none;
    border-bottom: 1px solid
}

.primary-nav {
    font-family: 'Agipo Bold Condensed', 'Arial Narrow', 'HelveticaNeue-CondensedBlack';
    font-weight: bold;
    font-style: normal;
    font-stretch: condensed;
    word-spacing: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    margin: auto;
    font-size: 48px;
    line-height: 47.5px
}

.primary-nav a {
    text-decoration: none;
    color: red
}

.primary-nav a:hover,.primary-nav a.active {
    display: inline-block;
    -webkit-transform: rotate(-180deg) translateY(-0.09em);
    -moz-transform: rotate(-180deg) translateY(0.09em);
    -o-transform: rotate(-180deg) translateY(0.09em);
    transform: rotate(-180deg) translateY(0.09em);
    ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2)
}

.content {
    margin-left: 322px;
    padding: 35px;
    padding-right: 47px;
    padding-bottom: 0;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.content-nav {
    position: fixed;
    top: 35px;
    text-align: center
}

.mobile-content-nav {
    display: none
}

.page-temp .content-nav,.cart-temp .content-nav,.blog-temp .content-nav,.page-feed-temp .content-nav {
    z-index: 2
}

.search-link {
    text-decoration: none;
    border-bottom: 1px solid
}

.search {
    display: none
}

.search input[type="text"] {
    -webkit-appearance: none;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid red;
    background: transparent;
    float: left;
    text-transform: uppercase;
    width: 200px;
    font-family: "Agipo Mono","monofspaced";
    font-size: 15px;
    color: red;
    word-spacing: -1px
}

.search input[type="text"]:focus {
    outline: none
}

@media (max-width: 480px) {
    .search input[type="text"] {
        width:190px
    }
}

.search input[type="submit"] {
    -webkit-appearance: none;
    border-radius: 0;
    border: none;
    background: transparent;
    width: 18px;
    height: 18px;
    background-image: url(//cdn.shopify.com/s/files/1/0866/5580/t/10/assets/looking-glass.png?12329719807685719109);
    background-repeat: no-repeat;
    background-size: contain;
    float: left;
    display: block;
    margin-left: 10px;
    cursor: pointer;
    cursor: url(//cdn.shopify.com/s/files/1/0866/5580/t/10/assets/hand1x.png?12329719807685719109),pointer;
    cursor: -webkit-image-set(url(//cdn.shopify.com/s/files/1/0866/5580/t/10/assets/hand.png?12329719807685719109) 2x),pointer
}

.search input[type="submit"]:focus {
    outline: none
}

.scrollable {
    width: 100%;
    height: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    left: 0;
    top: 0
}

.canvas-container {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    padding-left: 322px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    z-index: -1
}

.shop-section {
    padding-top: 120vh
}

.shop-section:after {
    content: "";
    display: table;
    clear: both
}

.shop-section.single-product {
    padding-top: 0
}

.shop-section.single-product .zoom {
    display: none
}

.section-title {
    font-size: 200px;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=.5)";
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=.5);
    position: fixed;
    display: none;
    z-index: -1
}

.section-header {
    margin-bottom: 35px;
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 70%
}

.next,.prev {
    position: absolute;
    z-index: 2;
    width: 50%;
    height: 100%;
    top: 0
}

.prev {
    left: 0;
    cursor: w-resize;
    cursor: url(//cdn.shopify.com/s/files/1/0866/5580/t/10/assets/arrow-left.png?12329719807685719109) 0 32,w-resize
}

.next {
    right: 0;
    cursor: e-resize;
    cursor: url(//cdn.shopify.com/s/files/1/0866/5580/t/10/assets/arrow.png?12329719807685719109) 127 32,e-resize
}

.slider-shop-link {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4vw;
    z-index: 2;
    text-align: center;
    font-family: "Agipo Mono";
    font-size: 1.8vw;
    color: #fff;
    text-decoration: none
}

@media (max-width: 786px) {
    .slider-shop-link {
        font-size:3vw;
        bottom: 6vw
    }
}

.slider img {
    position: absolute;
    top: 0;
    left: 100%;
    z-index: 1;
    width: 100%;
    height: auto;
    vertical-align: top;
    -moz-transition: left .5s;
    -webkit-transition: left .5s;
    transition: left .5s
}

.slider img.previous {
    left: -100%
}

.slider img.active {
    left: 0
}

.product {
    margin-bottom: 35px;
    width: 50%;
    float: left;
    padding-right: 35px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.product .next,.product .prev {
    z-index: 1
}

.product .slider {
    position: relative;
    z-index: 0;
    height: 0;
    overflow: hidden;
    padding-bottom: 66.6%;
    background-color: #000
}

.product .mobile-slider-control {
    display: none
}

@media (min-width: 1321px) {
    .product:nth-of-type(even) {
        float:right;
        padding-right: 0;
        padding-left: 35px
    }
}

.product.zoomed,.single-product .product {
    width: 100%;
    position: relative;
    z-index: 2;
    padding: 0
}

.product.zoomed .add-to-cart-form,.single-product .product .add-to-cart-form {
    width: 50%
}

.product.zoomed .zoom,.single-product .product .zoom {
    background-image: url(//cdn.shopify.com/s/files/1/0866/5580/t/10/assets/close-white.png?12329719807685719109)
}

.product.zoomed .details-top-cover,.product.zoomed .details-bottom-cover,.single-product .product .details-top-cover,.single-product .product .details-bottom-cover {
    height: 60px
}

.product.zoomed .slide-over,.single-product .product .slide-over {
    padding-top: 90px
}

@media (min-width: 1321px) {
    .product.zoomed .product-header,.single-product .product .product-header {
        font-size:20px
    }

    .product.zoomed .product-header .close-slider,.product.zoomed .product-header .zoom,.single-product .product .product-header .close-slider,.single-product .product .product-header .zoom {
        width: 30px;
        height: 30px;
        background-size: 18px 18px;
        bottom: 11px
    }

    .product.zoomed .product-header .close-slider,.single-product .product .product-header .close-slider {
        bottom: 13px
    }

    .product.zoomed .product-details p,.product.zoomed .product-details,.single-product .product .product-details p,.single-product .product .product-details {
        font-size: 20px;
        line-height: 1.25em;
        padding-bottom: 1.25em;
        padding-right: 100px
    }

    .product.zoomed .product-details .description,.single-product .product .product-details .description {
        max-width: 920px
    }
}

.product-inner {
    position: relative;
    overflow: hidden
}

.product-inner.select-open {
    overflow: visible
}

.product-inner.select-open img {
    display: none
}

.product-inner.select-open .product-details {
    visibility: hidden
}

.product-inner.select-open .details-top-cover,.product-inner.select-open .details-bottom-cover {
    display: none
}

.product-inner.select-open .slide-over {
    z-index: auto
}

.product-inner.select-open .next,.product-inner.select-open .prev {
    z-index: auto
}

.product-header {
    font-family: "Agipo Mono";
    font-size: 15px;
    color: #fff;
    transition: color .5s
}

.product-header a {
    color: #fff;
    transition: color .5s;
    text-decoration: none
}

.product-header .name,.product-header .add-to-cart,.product-header .info,.product-header .price,.product-header .close-slider,.product-header .zoom {
    position: absolute;
    z-index: 2
}

.product-header .name {
    left: 16px;
    top: 16px;
    width: 66.67%
}

@media (max-width: 480px) {
    .product-header .name {
        left:10px;
        top: 10px
    }
}

.product-header .add-to-cart,.product-header .info {
    padding: 10px
}

.product-header .add-to-cart {
    right: 6px;
    top: 6px
}

.product-header .add-to-cart.disabled {
    text-decoration: line-through;
    cursor: default
}

@media (max-width: 480px) {
    .product-header .add-to-cart {
        right:0px;
        top: 0px
    }
}

.product-header .info {
    left: 6px;
    bottom: 6px
}

@media (max-width: 480px) {
    .product-header .info {
        left:0px;
        bottom: 0px
    }
}

.product-header .price {
    right: 16px;
    bottom: 16px
}

@media (max-width: 480px) {
    .product-header .price {
        right:10px;
        bottom: 10px
    }
}

.product-header .zoom {
    bottom: 7px;
    left: 0;
    right: 0;
    margin: auto;
    margin-bottom: 2px;
    font-size: 15px;
    width: 30px;
    height: 30px;
    display: block;
    background: url(//cdn.shopify.com/s/files/1/0866/5580/t/10/assets/zoom.png?12329719807685719109) no-repeat center;
    background-size: 12px 12px
}

.product-header .close-slider {
    display: none;
    bottom: 7px;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 30px;
    width: 30px;
    height: 30px;
    background: url(//cdn.shopify.com/s/files/1/0866/5580/t/10/assets/close.png?12329719807685719109) no-repeat center;
    background-size: 12px 12px
}

.product-header .details-top-cover,.product-header .details-bottom-cover {
    position: absolute;
    left: -100%;
    width: 100%;
    height: 40px;
    z-index: 2;
    background-color: #f5d3d5;
    transition: left .5s
}

.product-header .details-bottom-cover {
    bottom: 0
}

.product-header .details-top-cover {
    top: 0
}

.product-image {
    width: 100%;
    height: auto;
    background-size: cover;
    vertical-align: top
}

.slide-over {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-top: 55px;
    position: absolute;
    top: 0;
    background-color: #f5d3d5;
    width: 100%;
    height: 100%;
    z-index: 1
}

@media (max-width: 480px) {
    .slide-over {
        padding-top:40px
    }
}

.product-details {
    overflow-y: scroll;
    left: -100%;
    transition: left .5s;
    font-family: "Agipo Mono"
}

.product-details .description {
    padding-left: 16px;
    padding-bottom: 45px
}

.product-details p {
    font-size: 15px;
    line-height: 19px;
    padding: 0 75px 16px 0
}

.product-details h2 {
    font-family: 'Agipo Bold Condensed', 'Arial Narrow', 'HelveticaNeue-CondensedBlack';
    font-weight: bold;
    font-style: normal;
    font-stretch: condensed;
    word-spacing: 0;
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px
}

.slider-open .zoom {
    display: none
}

.slider-open .close-slider {
    display: block
}

.slider-open .product-header {
    color: red
}

.slider-open .product-header a {
    color: red
}

.info-open .product-details {
    left: 0
}

.info-open .info {
    text-decoration: underline
}

.info-open .details-top-cover,.info-open .details-bottom-cover {
    left: 0
}

.cart-details {
    right: -100%;
    transition: right .5s;
    padding-left: 16px;
    padding-right: 16px
}

.cart-open .cart-details {
    right: 0
}

.cart-open .add-to-cart {
    text-decoration: underline
}

.input-box .cart-submit,.select-radio-label .cart-submit {
    cursor: pointer;
    width: 23px;
    height: 23px;
    padding: 3px;
    font-size: 15px;
    float: right;
    display: block;
    text-align: center;
    border: 1px solid red;
    margin-top: 7px;
    box-shadow: none;
    background-image: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}

.page-header {
    line-height: 1em;
    margin-top: -35px;
    padding-top: 1.25em;
    padding-bottom: 35px;
    font-size: 100px;
    text-align: center;
    border-bottom: 1px solid red;
    background-color: #fff;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding-left: 322px;
    z-index: 1;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

@media (max-width: 1250px) {
    .page-header {
        font-size:8vw
    }
}

.page-content {
    padding-top: 260px;
    font-size: 15px;
    line-height: 1.3333em;
    padding-left: 170px;
    padding-right: 170px;
    font-family: "Agipo Mono";
    letter-spacing: .005em;
    max-width: 1024px;
    margin: auto;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

@media (max-width: 1250px) {
    .page-content {
        padding-top:22vw
    }
}

.page-content p {
    margin-bottom: 1em
}

.rte strong {
    font-weight: bold
}

.rte img {
    max-width: 100%;
    height: auto
}

.rte a {
    text-decoration: none;
    border-bottom: 1px solid
}

.cart {
    width: 100%
}

.cart tr {
    height: 106px
}

.cart tbody tr {
    border-bottom: 1px solid red
}

.cart td {
    vertical-align: middle;
    padding-left: 6px;
    padding-right: 6px
}

@media (max-width: 400px) {
    .cart {
        font-size:12px
    }
}

.cart-quantity {
    border: none;
    box-shadow: none;
    background-color: transparent;
    background-image: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    border: 1px solid red;
    border-radius: 0;
    color: red;
    font-family: "Agipo Mono";
    height: 45px;
    width: 45px;
    text-align: center;
    font-size: 15px;
    padding: 0
}

.cart-quantity:focus {
    outline: none
}

@media (max-width: 600px) {
    .cart-quantity {
        height:30px;
        width: 30px;
        font-size: 12px
    }
}

.checkout-btn {
    -webkit-appearance: none;
    border-radius: 0;
    width: 100%;
    border: 1px solid red;
    font-weight: bold;
    font-family: "Agipo Mono";
    color: #fff;
    height: 45px;
    text-align: center;
    display: block;
    background-color: red;
    border: none;
    text-transform: uppercase;
    font-size: 15px
}

.checkout-btn.outline-btn {
    background-color: transparent;
    color: red
}

.update-cart {
    background: transparent;
    border: 0;
    border-radius: 0;
    color: red;
    cursor: pointer;
    font-family: "Agipo Mono";
    font-size: 15px;
    -webkit-appearance: none
}

.update-cart:focus {
    outline: none
}

.remove-btn {
    font-size: 30px;
    text-decoration: none;
    text-align: center;
    display: block;
    height: 24px;
    width: 24px;
    background: url(//cdn.shopify.com/s/files/1/0866/5580/t/10/assets/remove.png?12329719807685719109) no-repeat center;
    background-size: contain
}

.blog-article {
    margin-bottom: 55px
}

.blog-title,.blog-date {
    font-family: "Agipo Mono";
    font-weight: bold;
    text-transform: normal
}

.blog-date {
    text-align: center;
    margin-bottom: 20px
}

#subscribe-smiley {
    display: none;
    font-size: 200px;
    font-family: 'Agipo Bold Condensed', 'Arial Narrow', 'HelveticaNeue-CondensedBlack';
    font-weight: bold;
    font-style: normal;
    font-stretch: condensed;
    word-spacing: 0;
    color: red;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    margin: auto;
    text-align: center
}

.subscribe {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 98
}

.subscribe form {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    margin: auto
}

.subscribe .button {
    font-size: 200px
}

.subscribe input {
    font-size: 200px;
    font-family: 'Agipo Bold Condensed', 'Arial Narrow', 'HelveticaNeue-CondensedBlack';
    font-weight: bold;
    font-style: normal;
    font-stretch: condensed;
    word-spacing: 0;
    color: red;
    background-color: transparent;
    border: none
}

.subscribe input:focus {
    outline: none
}

.subscribe #mce-responses {
    display: none !important
}

.subscribe .email-input {
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 35px;
    border: none
}

.subscribe div.mce_inline_error {
    display: none !important
}

.scrollbar {
    background-color: red;
    width: 12px;
    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;
    height: 100%
}

.scrollbar .scroll-tracker {
    background-color: #f5d3d5;
    width: 100%;
    height: 0
}

.login-links {
    font-family: "Agipo Mono","monofspaced";
    font-size: 15px;
    color: red;
    word-spacing: -1px;
    text-transform: uppercase
}

.login-links input {
    border: none;
    box-shadow: none;
    background-color: transparent;
    background-image: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    font-family: "Agipo Mono","monofspaced";
    font-size: 15px;
    color: red;
    word-spacing: -1px;
    color: red;
    text-decoration: underline;
    cursor: pointer;
    cursor: url(//cdn.shopify.com/s/files/1/0866/5580/t/10/assets/hand1x.png?12329719807685719109),pointer;
    cursor: -webkit-image-set(url(//cdn.shopify.com/s/files/1/0866/5580/t/10/assets/hand.png?12329719807685719109) 2x),pointer;
    text-align: left;
    padding: 0;
    text-transform: uppercase
}

.login-links input:focus {
    outline: none
}

.login-links.forgot-password {
    position: relative;
    top: -39px
}

#recover-password {
    display: none
}

.login .cart * {
    width: 100%
}

.login .cart tr {
    height: 61px
}

.login .cart tr td {
    padding-left: 0;
    padding-top: 40px;
    padding-bottom: 3px;
    vertical-align: bottom
}

.login .cart .action {
    width: 117px
}

.login .cart tfoot {
    padding-top: 10px
}

.login-input {
    border: none;
    box-shadow: none;
    background-color: transparent;
    background-image: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    font-size: 15px;
    text-transform: uppercase;
    width: 100%;
    color: red
}

.login-input:focus {
    outline: none
}

.login-input:focus {
    outline: none
}

.login-input::-webkit-input-placeholder {
    color: red
}

.login-input::-moz-placeholder {
    color: red
}

.login-input:-moz-placeholder {
    color: red
}

.login-input:-ms-input-placeholder {
    color: red
}

footer {
    position: fixed;
    bottom: 35px;
    text-align: center;
    font-size: 15px;
    text-transform: uppercase;
    z-index: -1
}

@media (max-width: 1320px) {
    .product {
        width:100%;
        float: none;
        padding-right: 0;
        padding-left: 0
    }

    .product .zoom {
        display: none
    }

    .product .description {
        max-width: 700px
    }

    .page-content {
        padding-left: 12%;
        padding-right: 12%
    }
}

@media (max-width: 768px) {
    .anchor {
        top:-117px
    }

    .content {
        padding: 137px 32px 20px 20px;
        margin-left: 0
    }

    .page-temp .content,.page-feed-temp .content {
        padding-top: 117px
    }

    .page-temp .scrollable,.page-feed-temp .scrollable {
        padding-top: 0
    }

    .scrollable {
        padding-top: 2.625em
    }

    .sidebar {
        display: block;
        width: 100%;
        height: 117px;
        min-height: 0;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 98;
        border-right: none;
        background-color: #fff;
        padding: 0;
        border-bottom: none
    }

    .sidebar-inner {
        padding: 35px 35px 34px 35px;
        background-color: #fff;
        border-bottom: 1px solid red;
        position: relative;
        z-index: 1
    }

    .hamburger {
        display: inline-block;
        height: 17px;
        width: 32px;
        background: url(//cdn.shopify.com/s/files/1/0866/5580/t/10/assets/hamburger.png?12329719807685719109) no-repeat center;
        background-size: contain;
        top: 0;
        bottom: 0;
        position: absolute;
        left: 20px;
        margin: auto;
        cursor: pointer
    }

    .hamburger.hamburger-open {
        height: 29px;
        width: 32px;
        background-image: url(//cdn.shopify.com/s/files/1/0866/5580/t/10/assets/hamburger-open.png?12329719807685719109)
    }

    .mobile-heading {
        display: inline-block;
        font-size: 48px;
        margin-left: -12px
    }

    .mobile-nav {
        padding-top: 50px;
        padding-bottom: 50px;
        position: absolute;
        width: 100%;
        height: auto;
        left: 0;
        top: -300%;
        background-color: #fff;
        border-bottom: 1px solid red;
        transition: top .5s
    }

    .mobile-nav.nav-open {
        top: 117px
    }

    .primary-nav {
        position: static;
        -webkit-transform: none;
        -o-transform: none;
        -moz-transform: none;
        -ms-transform: none;
        transform: none;
        padding-top: 15px;
        padding-bottom: 15px
    }

    .secondary-nav {
        position: absolute;
        bottom: 20px
    }

    .mobile-content-nav {
        display: block;
        position: absolute;
        top: 17px;
        width: 100%;
        text-align: center
    }

    .content-nav {
        top: 135px;
        padding-top: 0;
        left: 0 !important;
        width: 100%
    }

    .page-temp .content-nav,.page-feed-temp .content-nav {
        display: none
    }

    .search {
        width: 230px;
        margin: auto;
        -moz-transform: none;
        -o-transform: none;
        -webkit-transform: none;
        transform: none
    }

    .search input[type="text"] {
        float: none
    }

    .search input[type="submit"] {
        float: right;
        width: 18px;
        height: 18px;
        margin-left: 0
    }

    .cart-nav {
        text-align: center;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 32px;
        height: 10px;
        margin: auto
    }

    .cart-nav a {
        text-decoration: none;
        border-bottom: none
    }

    .cart-nav.not-empty {
        height: 25px
    }

    .cart-link-quantity {
        display: block
    }

    .cart-price {
        display: none
    }

    .shop-section {
        padding-top: 0
    }

    .canvas-container {
        display: none !important
    }

    .product .mobile-slider-control {
        display: block;
        position: absolute;
        bottom: 16px;
        left: 0;
        width: 100%;
        z-index: 3;
        text-align: center;
        color: #fff;
        transition: color .5s
    }

    .product .mobile-slider-control span {
        display: none
    }

    .product .mobile-slider-control span.active {
        display: inline
    }

    .product.slider-open .mobile-slider-control {
        z-index: 1
    }

    .product.slider-open .mobile-slider-control a {
        color: #f5d3d5
    }

    .product-header .info {
        z-index: 4
    }

    .product-header .close-slider {
        bottom: 13px;
        width: 15px;
        height: 15px
    }

    .product-header .zoom {
        display: none
    }

    .product-details p {
        line-height: 1.0625em
    }

    .product-details h2 {
        font-size: 44px
    }

    .page-header {
        position: static;
        padding-left: 0;
        font-size: 48px;
        border: none;
        padding-top: .88889em;
        padding-bottom: .729em;
        margin-top: 0
    }

    .page-content {
        padding-top: 0;
        padding-left: 0;
        padding-right: 0
    }

    footer {
        display: none
    }
}

@media (max-width: 768px) and (min-width: 530px) {
    body {
        font-size:14px
    }
}

@media (max-width: 768px) and (max-width: 529px) {
    body {
        font-size:12px
    }
}

@media (max-width: 768px) and (min-width: 530px) {
    .secondary-nav {
        font-size:14px
    }
}

@media (max-width: 768px) and (max-width: 529px) {
    .secondary-nav {
        font-size:12px
    }
}

@media (max-width: 768px) and (min-width: 530px) {
    .search-link {
        font-size:14px
    }
}

@media (max-width: 768px) and (max-width: 529px) {
    .search-link {
        font-size:12px
    }
}

@media (max-width: 768px) and (min-width: 530px) {
    .search input[type="text"] {
        font-size:14px
    }
}

@media (max-width: 768px) and (max-width: 529px) {
    .search input[type="text"] {
        font-size:12px
    }
}

@media (max-width: 768px) and (min-width: 530px) {
    .cart-nav {
        font-size:14px
    }
}

@media (max-width: 768px) and (max-width: 529px) {
    .cart-nav {
        font-size:12px
    }
}

@media (max-width: 768px) and (max-width: 480px) {
    .product .mobile-slider-control {
        font-size:10px;
        bottom: 8px
    }
}

@media (max-width: 768px) and (min-width: 530px) {
    .product-header .name,.product-header .add-to-cart,.product-header .info,.product-header .price,.product-header .close-slider,.product-header .zoom {
        font-size:14px
    }
}

@media (max-width: 768px) and (max-width: 529px) {
    .product-header .name,.product-header .add-to-cart,.product-header .info,.product-header .price,.product-header .close-slider,.product-header .zoom {
        font-size:12px
    }
}

@media (max-width: 768px) and (max-width: 480px) {
    .product-header .close-slider {
        width:10px;
        height: 10px;
        bottom: 10px
    }
}

@media (max-width: 768px) and (max-width: 480px) {
    .product-details .description {
        padding-left:10px
    }
}

@media (max-width: 768px) and (min-width: 530px) {
    .product-details p {
        font-size:14px
    }
}

@media (max-width: 768px) and (max-width: 529px) {
    .product-details p {
        font-size:12px
    }
}

@media (max-width: 768px) and (min-width: 530px) {
    .page-content {
        font-size:14px
    }
}

@media (max-width: 768px) and (max-width: 529px) {
    .page-content {
        font-size:12px
    }
}

@media (max-width: 768px) and (min-width: 530px) {
    .input-box,.select-radio-label,.select-radio-label {
        font-size:14px
    }
}

@media (max-width: 768px) and (max-width: 529px) {
    .input-box,.select-radio-label,.select-radio-label {
        font-size:12px
    }
}

@media (max-width: 530px) {
    .content {
        padding-top:126px
    }

    .page-temp .content,.page-feed-temp .content {
        padding-top: 106px
    }

    .hamburger {
        width: 25px;
        height: 11px
    }

    .page-header {
        font-size: 36px;
        top: 155px
    }

    .hamburger.hamburger-open {
        height: 16px;
        width: 25px
    }

    .mobile-heading {
        font-size: 36px;
        margin-top: 3px
    }

    .primary-nav {
        font-size: 36px;
        line-height: .98em
    }

    .content-nav {
        top: 123px
    }

    .mobile-nav.nav-open {
        top: 106px
    }

    .cart-nav {
        height: 6px
    }

    .cart-nav.not-empty {
        height: 19px
    }

    .sidebar {
        height: 106px
    }

    .search input[type="submit"] {
        width: 16px;
        height: 16px
    }
}

@media (max-width: 530px) and (min-width: 530px) {
    .cart-nav {
        font-size:14px
    }
}

@media (max-width: 530px) and (max-width: 529px) {
    .cart-nav {
        font-size:12px
    }
}

@media (max-width: 372px) {
    .content-nav {
        top:120px
    }

    .mobile-heading {
        font-size: 27px;
        margin-top: 7px
    }

    .primary-nav {
        font-size: 36px;
        line-height: 36px
    }
}

.feed-post {
    margin-bottom: 75px;
    margin-left: auto;
    margin-right: auto;
    max-width: 640px
}

.feed-post a {
    text-decoration: none
}

.feed-post img {
    max-width: 100%;
    height: auto
}

.feed-post .date {
    font-weight: bold
}

.product-details .share-container {
    height: 1em;
    padding-bottom: 2px !important;
    overflow: hidden;
    -webkit-transition: height .5s;
    transition: height .5s
}

.product-details .share-container .down {
    display: inline-block
}

.product-details .share-container .up {
    display: none
}

.product-details .share-container.open {
    height: 8em
}

.product-details .share-container.open .down {
    display: none
}

.product-details .share-container.open .up {
    display: inline-block
}

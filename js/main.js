/*global $, alert, console */

$(function () {
    'use strict';

    // Adjust Header Height
    var myHeader = $('header .carousel, header .carousel .carousel-inner .carousel-item img');
    myHeader.height($(window).height());
    $(window).resize(function () {
        myHeader.height($(window).height());
    
    });

});
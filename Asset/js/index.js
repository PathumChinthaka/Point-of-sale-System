
$(document).ready(function () {
    $("#order-section").css("display", "none");
    $("#orderDetails-section").css("display", "none");
    $("#item-section").css("display", "none");
    $("#customer-section").css("display", "none");
});

$("#dashboard-page").click(function () { 
    $("#home-content").css("display", "unset");
    $("#customer-section").css("display", "none");
    $("#item-section").css("display", "none");
    $("#order-section").css("display", "none");
    $("#orderDetails-section").css("display", "none");
});

$("#order-page").click(function () { 
    $("#home-content").css("display", "none");
    $("#customer-section").css("display", "none");
    $("#item-section").css("display", "none");
    $("#orderDetails-section").css("display", "none");
    $("#order-section").css("display", "unset");
});

$("#orderDetails-page").click(function () { 
    $("#home-content").css("display", "none");
    $("#customer-section").css("display", "none");
    $("#item-section").css("display", "none");
    $("#order-section").css("display", "none");
    $("#orderDetails-section").css("display", "unset");
});

$("#item-page").click(function (e) { 
    $("#home-content").css("display", "none");
    $("#order-section").css("display", "none");
    $("#customer-section").css("display", "none");
    $("#orderDetails-section").css("display", "none");
    $("#item-section").css("display", "unset");
});

$("#customer-page").click(function (e) { 
    $("#home-content").css("display", "none");
    $("#order-section").css("display", "none");
    $("#item-section").css("display", "none");
    $("#orderDetails-section").css("display", "none");
    $("#customer-section").css("display", "unset");
});







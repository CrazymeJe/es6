$(".iscriviti").click (function () {
    $("#nascondi").removeClass("nascondi");
    $("#nascondi").addClass("blocco");
    $("body").addClass("no-scroll");

});
$(".close").click( function (){
    $("#nascondi").addClass("nascondi");
    $("#nascondi").removeClass("blocco");
    $("body").removeClass("no-scroll");

});

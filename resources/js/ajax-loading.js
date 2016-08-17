// Load slide in slide div in body
$(function() {
    $.ajax('/pages/slide.html').done(function(result) {
        $('#slide').html(result);
    });
});

// Load menu
$(function() {
    $.ajax('/menu.html').done(function(result) {
        $("#menu").html(result);
    });
});

// Load footer
$(function() {
    $.ajax('/footer.html').done(function(result) {
        $("#footer").html(result);
    });
});

// Carga cuando se hace click en algun item del menu
$(document).on("click","#menu-principal li > a",function(e) {
    $('#slide').remove();
    e.preventDefault();
    var url = $(this).attr("href");
    // -- Cargo el contenido de la pagina en el div principal
    $.ajax(url).done(function(result){
        $("#content").html(result);
    });
});
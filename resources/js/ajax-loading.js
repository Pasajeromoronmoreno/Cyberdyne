// Load slide in body
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
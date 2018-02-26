function overlayGenerate() {
    for (var i = 0; i < 6; i += 1) {
    
        var element = ".tourDay." + i
    
        var width = ($(element).width())
    
        $(element).children().css('right', (width + 10.5) + 'px')
    }    
}

function loginPadding() {
    var windowWidth = $(window).width()
    $(".login").css("padding-right", windowWidth * .057)
}

$(document).ready(function() {
    loginPadding()
    overlayGenerate()
})

window.onresize = function() {
    loginPadding()
}
// overlayGenerate()
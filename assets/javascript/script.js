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

function gridLayout() {
    $(".grid").css("background-image", "url('./assets/images/grid_checked.png'")
    $(".list").css("background-image", "url('./assets/images/hamburger_unchecked.png")
    $(".artistNameTour").removeAttr("style")
    $(".desktopArtistInfo").removeAttr("style")
    $(".artistHolder").switchClass("col-md-12", "col-md-4")
    $(".artistImage").removeAttr("style")
    $(".buyTicketsLink").removeAttr("style")
}

function listLayout() {
    $(".grid").css("background-image", "url('./assets/images/grid_unchecked.png'")
    $(".list").css("background-image", "url('./assets/images/hamburger_checked.png")
    $(".artistNameTour").css("display", "block")
    $(".desktopArtistInfo").css("display", "none")
    $(".artistHolder").switchClass("col-md-4", "col-md-12")
    $(".artistImage").css("width", "20%")
    $(".artistNameTour").css({"width": '80%', "padding": "41px 0",})
    $("").css("display", "block")
    $(".buyTicketsLink").css("display", "inline-block")
}

$(document).ready(function() {
    loginPadding()
    overlayGenerate()
    $(".list").on("click", function() {
        listLayout()
    })
    
    $(".grid").on("click", function() {
        gridLayout()
    })
})

window.onresize = function() {
    var windowWidth = $(window).width()
    if (windowWidth < 991) {
        gridLayout()
    }
    loginPadding()
}


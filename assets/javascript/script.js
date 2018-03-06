//Generates dynamic "triangles" for each of the performance days on each artist
function overlayGenerate() {
    for (var i = 0; i < 6; i += 1) {
    
        var element = ".tourDay." + i
    
        var width = ($(element).width())
    
        $(element).children().css('right', (width + 10.5) + 'px')
    }    
}

//Function to generate padding for login button based on current window width
function loginPadding() {
    var windowWidth = $(window).width()
    $(".login").css("padding-right", windowWidth * .057)
}

//Switch from list layout to grid layout at desktop view
function gridLayout() {
    document.getElementById("grid").style.backgroundImage = "url('./assets/images/grid_checked.png')"
    document.getElementById("list").style.backgroundImage = "url('./assets/images/hamburger_unchecked.png')"
    $(".artistNameTour").removeAttr("style")
    $(".desktopArtistInfo").removeAttr("style")
    $(".artistHolder").switchClass("col-md-12", "col-md-4")
    $(".artistImage").removeAttr("style")
    $(".buyTicketsLink").removeAttr("style")
}

//Switch from grid layout to list layout at desktop view
function listLayout() {
    document.getElementById("grid").style.backgroundImage = "url('./assets/images/grid_unchecked.png')"
    document.getElementById("list").style.backgroundImage = "url('./assets/images/hamburger_checked.png')"
    $(".artistNameTour").css("display", "block")
    $(".desktopArtistInfo").css("display", "none")
    $(".artistHolder").switchClass("col-md-4", "col-md-12")
    $(".artistImage").css("width", "20%")
    $(".artistNameTour").css({"width": '80%', "padding": "41px 0",})
    $("").css("display", "block")
    $(".buyTicketsLink").css("display", "inline-block")
}

//Function to dynamically resize header based on width of window
function tabletHeaderSize() {
    var windowWidth = $(window).width()
    if (windowWidth > 752 && windowWidth < 975) {
        $("#header").removeAttr("style")
        document.getElementById("header").style.width = ((windowWidth*.886) - 30) + 'px'
        document.getElementById("header").style.marginLeft = ((windowWidth*.045) + 26) + 'px'
        document.getElementById("header").style.marginRight = ((windowWidth*.045) + 15) + 'px' 
    }
    else if (windowWidth > 974) {
        $("#header").removeAttr("style")
        document.getElementById("header").style.width = ((windowWidth*.91) - 30) + 'px'
        document.getElementById("header").style.marginLeft = ((windowWidth*.045) + 15) + 'px'
        document.getElementById("header").style.marginRight = ((windowWidth*.045) + 15) + 'px' 
    }
    else {
        $("#header").removeAttr("style")
    }
}

$(document).ready(function() {
    loginPadding()
    overlayGenerate()
    tabletHeaderSize()

    //Click handler for list layout
    $(".list").on("click", function() {
        console.log("test")
        listLayout()
    })
    
    //Click handler for grid layout
    $(".grid").on("click", function() {
        gridLayout()
    })
})

//Function to automatically revert to grid layout once a certain window width is achieved
window.onresize = function() {
    var windowWidth = $(window).width()
    if (windowWidth < 991) {
        gridLayout()
    }

    tabletHeaderSize()
    loginPadding()
}

$(document).ready(function() {
    loginPadding()
    overlayGenerate()

    //Click handler for list layout
    $(".list").on("click", function() {
        console.log("test")
        listLayout()
    })
    
    //Click handler for grid layout
    $(".grid").on("click", function() {
        gridLayout()
    })
})
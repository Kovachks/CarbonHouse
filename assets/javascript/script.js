function overlayGenerate() {
    for (var i = 0; i < 6; i += 1) {
    
        var element = ".tourDay." + i
    
        console.log(element)
    
        var width = ($(element).width())
    
        $(element).children().css('right', (width + 10.5) + 'px')
    }    
}

$(document).ready(function() {
    overlayGenerate()
})
overlayGenerate()
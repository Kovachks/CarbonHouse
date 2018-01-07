function overlayGenerate() {
    var concerts = [".tourDay.0", ".tourDay.1", ".tourDay.2", ".tourDay.3", ".tourDay.4", ".tourDay.5",]    
    for (var i = 0; i < 6; i += 1) {
        var element = concerts[i]
        console.log(element)
        var width = ($(element).width())
        console.log($(element.child))
        $(element).children().css('right', (width + 11) + 'px')
    }    
}

$(document).ready(function() {
    overlayGenerate()
})
overlayGenerate()
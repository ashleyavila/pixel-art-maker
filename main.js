document.addEventListener("DOMContentLoaded", function(event) {
    var cell = document.getElementsByClassName("cell")
    for (var i = 0; i < cell.length; i++) {
        let cells = cell[i]

        cells.addEventListener('click', function(event) {
            console.log(event.target.className)
            if (event.target.className.includes('selected')) {
                event.target.classList.remove('selected') 
                event.target.style.background = 'grey'
            } else {
                event.target.classList.add('selected')

                let color = document.getElementsByClassName("color")
                console.log(findSelectedColor())
                event.target.style.background = findSelectedColor()
            }
        })
    }

    var colors = document.getElementsByClassName("color")
    for (var j = 0; j < colors.length; j++) {
        let color = colors[j]
    
        color.addEventListener('click', function(event) {
            console.log(event.target.id)
            unselectAllColors()
            event.target.classList.add('selected-color')
        })
    }
})

function unselectAllColors() {
    var colors = document.getElementsByClassName("color")
    for (var j = 0; j < colors.length; j++) 
    {
        let color = colors[j]
        color.classList.remove('selected-color')
    }
}

function findSelectedColor(){
    let selectedColor = 'grey'
    var colors = document.getElementsByClassName("color")
    for (var j = 0; j < colors.length; j++) 
    {
        let color = colors[j]
        if (color.className.includes('selected-color')) 
        {
            selectedColor = color.id.toString()
        }
    }
    return selectedColor
}
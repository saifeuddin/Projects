filter("all")

function filter(c) {
    var x, i;
    x = document.getElementsByClassName("column")

    if (c === "all") {
        c = "";
    }
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show")

        console.log(x[i].classList, '😒')

        if (x[i].className.indexOf(c) > -1) {
            console.error(x[i].className.indexOf(c))
            AddClass(x[i], "show")
        }
    }

}



function AddClass(element, name) {
    var i, arr1, arr2
    arr1 = element.className.split(" ")
    arr2 = name.split(' ')


    console.log('Add')
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            console.log(arr1.indexOf(arr2[i]) === -1)

            element.className += " " + arr2[i];
        }
    }
    console.warn(element.className, '+++++++++++')
}


function RemoveClass(element, name) {
    var i, arr1, arr2
    arr1 = element.className.split(" ")
    arr2 = name.split(' ')

    console.log(element.className)
    console.log('Remove')
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1)
        }
    }

    element.className = arr1.join(" ");
    console.log(element.className, '----------')
}





// Add active class to the current button
var btns = document.getElementsByClassName("btn")

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active")

        // Remove exsisting active class
        current[0].className = current[0].className.replace(" active", "")


        // Add active class
        this.className += " active"
    })

}
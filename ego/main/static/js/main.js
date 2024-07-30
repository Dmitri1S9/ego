function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}

function openMenu(propertyName, propertyValue) {
    const element = document.getElementById("menuOptional");
    if (element.style["visibility"] === "hidden") {
        element.style["visibility"] = "visible";
    } else {
        element.style["visibility"] = "hidden";
    }
}


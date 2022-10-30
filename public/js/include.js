window.addEventListener('load', function() {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const params = new URL(location).searchParams;
    let m = params.get("m");
    m = (m === null || m === '') ? 'main' : m ;

    const main = document.querySelector("main")
    main.dataset.includePath='./html/include/' + m + '.html'
    
    const style = document.getElementsByClassName('css-style')
    if(style) {
        style.href = './css/' + m + '.html'
    }
});

   
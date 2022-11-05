export function includeHTML(){
    const includeArea = document.querySelectorAll('[data-include]');
 
    for(let dom of includeArea){
        const url = dom.dataset.include;
        fetch(url)
        .then(response => response.text())
        .then(data =>{
            dom.innerHTML = data;
            dom.removeAttribute('data-include');
        });
    }//for
}//includeHTML



// document.addEventListener("DOMContentLoaded", () => {
//     const params = new URL(location).searchParams;
//     let m = params.get("m");
//     m = (m === null || m === '') ? 'main' : m ;

//     const main = document.querySelector("main")
//     main.dataset.includePath='./html/' + m + '.html'
    
//     const cssStyle = document.getElementById('css-style')
//     console.log(cssStyle)
//     if(cssStyle) {
//         cssStyle.href = ('./css/' + m + '.css')
//     }

//     // const jsFile = document.getElementById('js-file')
//     // console.log(jsFile)
//     // if(jsFile) {
//     //     jsFile.src = ('./js/' + m + '.js')
//     // }
    
//     //새로운 script 추가시 아래형식으로 추가할것
//     const script_element = document.createElement('script');
//     script_element.setAttribute('src', ('./js/' + m + '.js'));
//     document.querySelector('footer').appendChild(script_element);


// });

// window.addEventListener('load', function() {
//     var allElements = document.getElementsByTagName('*');
//     Array.prototype.forEach.call(allElements, function(el) {
//         var includePath = el.dataset.includePath;
//         if (includePath) {
//             var xhttp = new XMLHttpRequest();
//             xhttp.onreadystatechange = function () {
//                 if (this.readyState == 4 && this.status == 200) {
//                     el.outerHTML = this.responseText;
//                 }
//             };
//             xhttp.open('GET', includePath, true);
//             xhttp.send();
//         }
//     });

//     if(jsfiles !== undefined) {
//         load(jsfiles);
//     }
// });

// function load(files) {
//     for(i=0; i < files.length; i++) {
//         let src = document.createElement('script');
//         src.setAttribute('src', files[i]);
//         document.getElementsByTagName('footer')[0].appenndChild(src);
//     }
// }

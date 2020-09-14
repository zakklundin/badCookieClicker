const clickMe = document.getElementById("clickme");
let count = 0
function click() {
    count++
    clickMe.innerHTML = 'Click me: ' + count

}
clickMe.onclick = click
clickMe.innerHTML = 'Click me: ' + count

//clickMe.onclick = function (){
//    count += 1
//    clickMe.innerHTML = 'Click me: ' + count
//}
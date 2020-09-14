const clickMe = document.getElementById("clickme")
let count = 0

function click() {
    count++
    clickMe.innerHTML = 'Click me: ' + count
    
        if (count === 11){
            alert('Grattis! Du har tryckt 10 gånger')
        }
}
clickMe.onclick = click
clickMe.innerHTML = 'Click me: ' + count



const seccount = document.getElementById("secCount")
let sekund = 0

setInterval(function(){
    sekund++
    seccount.innerHTML = 'Antal Sek: ' + sekund
        if (sekund === 20){
            alert('Det har gått 20 sekunder.')
        }
}, 1000)


setTimeout(function(){
    document.getElementById('titeln').style.color="#0059FF"
    console.log("Bytte färgen på titel")
}, 10000)
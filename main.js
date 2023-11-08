let container = document.getElementById("container")

// let max_number = 100;
let start = 1;

function isprime(number) {
    let check = Math.floor(number ** 0.5)
    let prime = number != 1 &&  number != 0;    
    for (let i = 2; i <= check; i++) {
        if(number%i === 0) {
            prime = false;
            break;
        }         
    }
    return prime
}
function CreateBox(max_number) {
    for (let  i = 0;  i <= max_number;  i++) {
        let div = document.createElement('div')
        div.className = "box"
        div.innerHTML = i
        if (i % 2 === 0) {
            div.style.backgroundColor = "green"
        } else {
            div.style.backgroundColor = "yellow"
        }
        if(isprime(i)) { div.style.backgroundColor = "red" }
        
        container.appendChild(div)
        
    }
    
}
CreateBox(100)
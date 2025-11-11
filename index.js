
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 0.25;
    countEl.textContent = count;
    updateDecrementVisibility();  

function decrement() {  
    count -= 0.25;
    countEl.textContent = count;
    updateDecrementVisibility();  
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
    updateDecrementVisibility(); 
}

function updateDecrementVisibility() {
    const decrementBtn = document.getElementById("decrement-btn");
    if (count >= 2) {
        decrementBtn.style.display = "block";
    } else if (count <= 0) {
        decrementBtn.style.display = "none"; 
    }
}

function clearFunction() {
    count = 0;
    countEl.textContent = count; 
    updateDecrementVisibility();
}

clearFunction();
updateDecrementVisibility();


let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 0.25;
    countEl.textContent = count;
    updateDecrementVisibility();  // Add this to update visibility after increment
}

function decrement() {  // Match the onclick="decerenent()" from HTML (fix spelling inconsistency)
    count -= 0.25;
    countEl.textContent = count;
    updateDecrementVisibility();  // Add this to update visibility after decrement
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
    countEl.textContent = count; // reset the displayed count
    updateDecrementVisibility(); // keep button visibility consistent
}

clearFunction();
updateDecrementVisibility();

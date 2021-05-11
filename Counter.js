let count_display = document.getElementById("count")
let increase = document.getElementById("increase")
let decrease = document.getElementById("decrease")
let reset = document.getElementById("reset")

// For increasing the value 
increase.addEventListener('click', function() {
    let count = Number(count_display.innerText)
    count += 1;
    count_display.innerText = count
})

// For decreasing the value 
decrease.addEventListener('click', function() {
    let count = Number(count_display.innerText)
    count -= 1;
    count_display.innerText = count
})

// to reset the value
reset.addEventListener('click', function() {
    count_display.innerText = 0
})
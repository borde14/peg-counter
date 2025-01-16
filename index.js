let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let errorEl = document.getElementById("error-el")
let totalEl = document.getElementById("total-el")
let count = 0

function increment() {
    errorEl.textContent = ""
    count += 5
    countEl.textContent = count
    let totalIncrement = count
}

function decrement() {
    errorEl.textContent = ""
    count = count - 5
    countEl.textContent = count
    let totalDecrement = count
}

const saveElFromLocalStorage = JSON.parse(localStorage.getItem("saveEl"))

if (saveElFromLocalStorage) {
    saveEl.textContent = saveElFromLocalStorage
    save()
}


function save() {
    if (count === 0) {
        errorEl.textContent = "Are You Drunk! Enter ML"
    } else {
        let countStr = count + " | "
        saveEl.textContent += countStr
        let totalStr = count
        totalEl.textContent = parseInt(totalEl.textContent || 0) + count
        localStorage.setItem("saveEl", JSON.stringify(saveEl.textContent))
        countEl.textContent = 0
        count = 0
    }
}

function newentry() {
    localStorage.clear()
    saveEl.textContent = "Previous Entries:" + ""
    totalEl.textContent = 0
    errorEl.textContent = ""
}


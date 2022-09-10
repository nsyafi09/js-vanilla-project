

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
// Get the delete button element html
const deleteBtn = document.getElementById("delete-btn")
// Get tab button element
const tabBtn = document.getElementById("tab-btn")

// Empty ARRAY for collecting leads
let myURLs = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

const URLsFromLocalStorage = JSON.parse(localStorage.getItem("myURLs"))
if (URLsFromLocalStorage) {
    myURLs = URLsFromLocalStorage
    render(myURLs)
}

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

// Event listener for click for tabBtn
tabBtn.addEventListener("click", function () {
    // Get current tab from chrome:
    // Active is current tabs, currentwindow is the current chrome window
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // console.log(tabs)
        myURLs.push(tabs[0].url)
        localStorage.setItem("myURLs", JSON.stringify(myURLs))
        render(myURLs)
    })
})


// Event listener for delte button (Double click)
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myURLs = []
    render(myURLs)
})


// Trying event listener for save
inputBtn.addEventListener("click", function() {
    myURLs.push(inputEl.value)
    inputEl.value = ""
    // Save myLeads array to LocalStorage (USE stringify to turn into string)
    // LocalStorage/ JSON can only store string
    localStorage.setItem("myURLs", JSON.stringify(myURLs))

    render(myURLs)
})

// Make the function my dynamic by givign it an argument to take
function render(url) { // Refactoring (to make function dynamic)
    let listItems = ""
    for (let i = 0; i < url.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        // Use TEMPLATE STRING instead:
        listItems += `
            <li>
                <a target='_blank' href='${url[i]}'>
                    ${url[i]}
                </a>
            </li>
        `
        // Use dom 3 times (un-optimized) instant
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

        // Alternate way of doing
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    } ulEl.innerHTML = listItems
}


const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
// Get the delete button element html
const deleteBtn = document.getElementById("delete-btn")

// Empty ARRAY for collecting leads
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

// Event listener for delte button (Double click)
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})


// Trying event listener
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // Save myLeads array to LocalStorage (USE stringify to turn into string)
    // LocalStorage/ JSON can only store string
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        // Use TEMPLATE STRING instead:
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
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
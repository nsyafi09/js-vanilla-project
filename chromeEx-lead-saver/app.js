

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

// Empty ARRAY for collecting leads
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

// Trying event listener
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    renderLeads()
    inputEl.value = ""
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
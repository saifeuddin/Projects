
let myLeads = [];
let inputEl = document.getElementById('input-el')
let buttonEl = document.getElementById('button-el')
let tabBtn = document.getElementById('buttonS')
let buttonEl2 = document.getElementById('button-el2')
let ulE = document.getElementById('ul-el')


let fromLocal = JSON.parse(localStorage.getItem("myLead"))
if (fromLocal) {
    myLeads = fromLocal;
    render(myLeads);
}


    tabBtn.addEventListener("click", function() {
        console.log("LLLLL")

        chrome.tabs.query({ active: true, currentWindow: true}, function(tabs) {
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads))
            render(myLeads)
        })
    })



    function render(leads) {
        let listItems = "";
        for (let i = 0; i < leads.length; i++) {
            listItems +=
                `<li> 
                        <a target= _'blank' href="${leads[i]}"> 
                            ${leads[i]}  
                        </a> 
                    </li>`
        }
        ulE.innerHTML = listItems.toLocaleLowerCase();
    };


    buttonEl.addEventListener("click", function () {
        myLeads.push(inputEl.value)
        inputEl.value = " ";
        localStorage.setItem("myLead", JSON.stringify(myLeads));
        render(myLeads)

        console.log(myLeads)
    });


    buttonEl2.addEventListener('dblclick', function () {
        console.log("Deleted")
        localStorage.clear()
        myLeads = []
        render(myLeads)
    })
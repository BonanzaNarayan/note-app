const notes = document.getElementById("notes")
const note = document.querySelectorAll(".notes-input")
const name = document.querySelectorAll(".name")

function addNote(){
    let noteBox = document.createElement("div")
    noteBox.className = "note-box"

    let name = document.createElement("h2")
    name.innerHTML = "Note Name Here ☻"
    name.contentEditable = "true"
    name.className = "name"

    let p = document.createElement("div")
    p.className = "notes-input"
    p.contentEditable = "true"

    let span = document.createElement("span")
    span.innerHTML = "-"
    noteBox.appendChild(name)
    noteBox.appendChild(p)
    noteBox.appendChild(span)

    notes.appendChild(noteBox)
    saveData()
}
notes.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }else if(e.target.tagName === "DIV"){
        const noteApp = document.querySelectorAll(".notes-input")
        noteApp.forEach(nt =>{
            nt.onkeyup = function(){
                saveData()
            }
        })
    }else if(e.target.tagName === "H2"){
        const nameApp = document.querySelectorAll(".name")
        nameApp.forEach(nt =>{
            nt.onkeyup = function(){
                saveData()
            }
        })
    }
})

function saveData(){
    localStorage.setItem("Data", notes.innerHTML)
}
function showData(){
    notes.innerHTML = localStorage.getItem("Data")
}
showData()
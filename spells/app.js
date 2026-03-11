let allSpells = []
let currentList = []

// Startseite laden
window.onload = () => {
loadAllSpells()
}


// Sidebar öffnen
document.getElementById("menuBtn").onclick = () => {

let sidebar = document.getElementById("sidebar")

sidebar.style.display =
sidebar.style.display === "none"
? "block"
: "none"

}


// Suche anzeigen
document.getElementById("searchBtn").onclick = () => {

let bar = document.getElementById("searchBar")

bar.style.display =
bar.style.display === "none"
? "block"
: "none"

}


// ENTER Suche
document.getElementById("searchInput").addEventListener("keypress", e=>{

if(e.key === "Enter"){
searchSpells(e.target.value)
}

})


// Alle Zauber laden
async function loadAllSpells(){

let res = await fetch("data/spells.json")

allSpells = await res.json()

currentList = [...allSpells]

displaySpellList(currentList)

history.replaceState({page:"list"},"")

}


// Klassenliste laden
async function loadClass(name){

let res = await fetch(`data/${name}.json`)

let classSpells = await res.json()

currentList = classSpells

displaySpellList(classSpells)

history.pushState({page:"list"},"")

}


// Liste anzeigen
function displaySpellList(list){

let content = document.getElementById("content")

content.innerHTML=""

// Sortierung: Level → Name
list.sort((a,b)=>{

let levelA = a.level ?? 999
let levelB = b.level ?? 999

if(levelA !== levelB){
return levelA - levelB
}

return a.name.localeCompare(b.name)

})

list.forEach(spell=>{

let div = document.createElement("div")

div.className="spell"

let levelText = spell.level !== undefined
? " (Level " + spell.level + ")"
: ""

div.innerText = spell.name + levelText

div.onclick = ()=>showSpell(spell.name)

content.appendChild(div)

})

}


// Zauber anzeigen
function showSpell(name){

let spell = allSpells.find(s=>s.name===name)

if(!spell) return

history.pushState({spell:name},"","#"+name)

renderSpell(spell)

}


function renderSpell(spell){

let c = document.getElementById("content")

c.innerHTML=`

<button onclick="history.back()">⬅ Zurück</button>

<h2>${spell.name}</h2>

<p><b>Grad:</b> ${spell.level ?? "-"}</p>
<p><b>Schule:</b> ${spell.school ?? "-"}</p>
<p><b>Zauberzeit:</b> ${spell.casting_time ?? "-"}</p>
<p><b>Reichweite:</b> ${spell.range ?? "-"}</p>
<p><b>Komponenten:</b> ${spell.components ?? "-"}</p>
<p><b>Dauer:</b> ${spell.duration ?? "-"}</p>

<p>${spell.description ?? ""}</p>

`

}


// Browser Back Handling
window.onpopstate = function(event){

if(event.state && event.state.spell){

let spell = allSpells.find(s=>s.name===event.state.spell)

if(spell) renderSpell(spell)

}else{

displaySpellList(currentList)

}

}


// Suche
function searchSpells(text){

text = text.toLowerCase().trim()

if(text===""){
displaySpellList(allSpells)
return
}

let results = allSpells
.map(spell=>{

let name = spell.name.toLowerCase()

let score = 0

if(name.startsWith(text)) score += 3
if(name.includes(text)) score += 2

return {spell,score}

})
.filter(r=>r.score>0)
.sort((a,b)=>b.score-a.score)
.map(r=>r.spell)

currentList = results

displaySpellList(results)

}
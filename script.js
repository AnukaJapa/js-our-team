//^ ESERCISIO: Our Team
//*MILESTONE 0:
//*Creare l’array di oggetti con le informazioni fornite.

const team = [
    {
        nome:"Wayne Barnett",
        ruolo:"Founder & CEO",
        foto:"wayne-barnett-founder-ceo.jpg"
    },
    {
        nome:"Angela Caroll",
        ruolo:"Chief Editor",
        foto:"angela-caroll-chief-editor.jpg"
    },
    {
        nome:"Walter Gordon",
        ruolo:"Office Manager",
        foto:"walter-gordon-office-manager.jpg" 
    },
    {
        nome:"Angela Lopez",
        ruolo:"Social Media Manager",
        foto:"angela-lopez-social-media-manager.jpg" 
    },
    {
        nome:"Scott Estrada",
        ruolo:"Developer",
        foto:"scott-estrada-developer.jpg" 
    },
    {
        nome:"Barbara Ramos",
        ruolo:"Graphic Designer",
        foto:"barbara-ramos-graphic-designer.jpg" 
    }
]

//* MILESTONE 1:
//*Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for(let elemento of team){
    console.log(
        `
----------------------------------------
    UTENTE ${team.indexOf(elemento)+1}
  nome: ${elemento.nome}
  ruolo:${elemento.ruolo}
  foto:${elemento.foto}
-----------------------------------------
        `
    );
}

//* MILESTONE 2:
//* Stampare le stesse informazioni su DOM sottoforma di stringhe
function displayTeamInAList(array){
    //prendere contenitore da html
    let container = document.querySelector(".myContainer");
    //creare elemento h2 per titolare la lista (dove saranno collocati i nomi dei membri del team)
    let heading = document.createElement("h2");
    heading.textContent = "TEAM MEMBERS (click to view info)";
    container.appendChild(heading);
    
    //creare la lista ordinata (per vedere quanti membri ci sono)dei membri del team. 
    let orderedListForTeamNames = document.createElement("ol");
    container.append(orderedListForTeamNames);

//creare elementi da collocare all'interno di questo ol dei membri del team
    for(let i = 0; i<array.length; i++){
    let listOpened = false; //non hai ancora cliccato per vedere info

       let newMemberName = document.createElement("li");
       newMemberName.textContent = `${array[i].nome}`;
       orderedListForTeamNames.append(newMemberName);

       newMemberName.addEventListener("click", ()=> {
if(listOpened) {
let listInfo = document.querySelector(".listInfo");
listInfo.remove();
listOpened = false;
    return
}   else {
let listInfo = document.createElement("ul");
listInfo.classList.add("listInfo");
let liRuolo = document.createElement("li");
let liFoto = document.createElement("li");

liRuolo.textContent =` ruolo: ${array[i].ruolo}`;
liFoto.textContent =` foto: ${array[i].foto}`;

newMemberName.append(listInfo);
listInfo.append(liRuolo);
listInfo.append(liFoto);
listOpened = true;
}
       })

    }
}

//displayTeamInAList(team);

//* BONUS 1:
//* Trasformare la stringa foto in una immagine effettiva
//*BONUS 2:
//*Organizzare i singoli membri in card/schede (BOOTSTRAP!)

function createMemberBox(member){
let allBoxesDiv = document.querySelector(".boxesDisplayDiv");
let eachBoxDiv = document.createElement("div");


let newImage = document.createElement("img");
let textName = document.createElement("h3");
let textRuolo = document.createElement("p");


newImage.src = `img/${member.foto}`;
textName.textContent = `${member.nome}`;
textRuolo.textContent = `${member.ruolo}`;

eachBoxDiv.classList.add("col-11");
eachBoxDiv.classList.add("col-sm-7")
eachBoxDiv.classList.add("col-md-5");
eachBoxDiv.classList.add("col-xl-3");
eachBoxDiv.classList.add("col-xxl-3");
eachBoxDiv.classList.add("text-center");
eachBoxDiv.classList.add("m-3");


allBoxesDiv.append(eachBoxDiv);
eachBoxDiv.append(newImage);
eachBoxDiv.append(textName);
eachBoxDiv.append(textRuolo);
}

for(let i =0; i<team.length; i++){
createMemberBox(team[i]);
}
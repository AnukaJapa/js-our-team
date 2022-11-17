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
        foto:" scott-estrada-developer.jpg" 
    },
    {
        nome:"Barbara Ramos",
        ruolo:"Graphic Designer",
        foto:" barbara-ramos-graphic-designer.jpg" 
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
// fonction pour modifier le contenu de t2

// function modifyText(){
//     var t2 = document.getElementById("t2");
//     if(t2.firstChild.nodeValue == "three"){
//         t2.firstChild.nodeValue = "two";
//     }
//     else{
//         t2.firstChild.nodeValue = "three";
//     }
// }
// ajout d'un ecouteur d'évenmenet au tableau
// var el = document.getElementById("outside");
// el.addEventListener("click", modifyText, false);

// Écouteur d'évènement avec une fonction anonyme
// fonction pour modifier le contenu de t2
function modifyText(new_text){
    let t2 = document.getElementById("t2");

        t2.firstChild.nodeValue = new_text;
   
}
let el = document.getElementById("outside");
el.addEventListener("click",function(){modifyText("foor")}, true)
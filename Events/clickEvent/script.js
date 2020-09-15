// And whatever alert returns which I'm pretty sure is just undefined alert hey or h What do we get back undefined.
// So then it sets on click to undefined when we do it in our inline HMO.
// It seems deceiving.
// But what happens is that the DOM is just going to take this string turn it into javascript but rapid
// in a function so that it only runs when you actually mouse over or you on click.
// So if we want to make this work through javascript we need to write a function.
// We could do a regular function expression function.
// We don't have to even give it a name.
// And in here if we could say alert or console dot log let's do a console that log you clicked me go away.
// All of them are basically saying the same thing you click me click the input doesn't matter.

const btn = document.querySelector('#clicker');
btn.onclick = function(){
    alert('clicked');
};
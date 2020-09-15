// getElementById(element-id): The element ID is the ID attribute of the element.Returned as an HTMLElement object.
let byId = document.getElementById("user-id");
console.log(byId);

// getElementsByTagName(element-name): The element name is the static name of HTML elements such as body, div, p, footer, ol, and ul.
// This returns a NodeList object. A NodeList object is similar to an array of objects.
let tagName = document.getElementsByTagName("div");
console.log(tagName);

// getElementsByClassName(css-class-name): The css class name is the class attribute of the elements.
// This returns a NodeList object. A NodeList object is similar to an array of objects.
let className = document.getElementsByClassName("container");
console.log(className);

// querySelector(selectors): The selectors are like the selectors that are used in CSS. This returns an HTMLElement object 
// for the first element that's matched.
let queSelect = document.querySelector("li");
console.log(queSelect);

// querySelectorAll(selectors): The selectors are like the selectors that are used
// in CSS. This returns a NodeList object. A NodeList object is similar to an array of
// objects for each element that's matched.
let queSelectAll = document.querySelectorAll("li");
console.log(queSelectAll);

// createElement(tag name): This creates an HTMLElement object for the HTML tag
// name that's supplied.
let creatElt = document.createElement("li");
console.log(creatElt);

// createTextNode(data): This creates a Text object that can be placed inside an HTML
// element, for example, inside an h1 or a p element. The data argument is a string.
let createTxtNode = document.createTextNode("milky")
// console.log(createTxtNode);

// The createElement method returns an HTMLElement object. It provides the appendChild
// method, which we can use in this instance. For the appendChild method argument, the
// document object's createTextNode method can supply the required text node:
let appendchild = creatElt.appendChild(createTxtNode);
// console.log(appendchild);

// or
let appendChildS = creatElt.append(document.createTextNode("highway"));
// console.log(appendChildS);

// Let's take this a bit further and assume that we have a list of full moon names in an array:
let mayMoons = [
    "Flower Moon",
    "Planting Moon",
    "Milk Moon"
    ];

// Now, we want to use the array to populate a ul element that has the id attribute of full-moons:
// First, you may want to remove the existing li elements from the ul element. You can do
// that by using the document.getElementById method and the innerHTML property of the element:
let removeLifromUl = document.getElementById("full-moons");
removeLifromUl.innerHTML= "";

// Next, we can loop through the array, appending li elements to the moon names:
for (let i= 0; i <= mayMoons.length - 1; i++){
    let liEle = document.createElement("li");
    liEle.appendChild(document.createTextNode(mayMoons[i]));
    removeLifromUl.appendChild(liEle);
}


// The childNodes collection lists all child nodes, including text nodes
// for (let i = 0; i < document.body.childNodes.length; i++) {
//     alert( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
//   }
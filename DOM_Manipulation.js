// DOM Manipulation Uses Statements like:
// HTML DOM methods are actions you can perform (on HTML Elements).
// ************************************************
// 1. TO FIND;

document.getElementById(id);
document.getElementsByClassName(className);
document.getElementsByTagName(tagname);
// or
document.querySelector(selector)

// ************************************************
// 2. TO CHANGE ELEMENT;

element.innerHTML = ("newHTML ontent") // change the innerHTML of an element.
// or
element.innerText;
// or 
element.attribute= ("newValue;") // change the attribute value of an element.
// or 
element.style.propertyName = ("newStyle;")  // to change the style property of an element.


// ************************************************
// 3. TO MODIFY THE CSS PROPERTY;

element.style.propertyName;


// ************************************************
// 4. TO HANDLE USER INTERACTION;

element.addEventListener(type, listener, UseCapture);

//  ADDING AND DELETING ELEMENTS:

document.createElement("element");
document.removeChild("element");
document.appendChild("element");
document.replaceChild("element");
document.write("text");

//  and there are many more methods which can be used but not to be memorised cause there are a lot of methods.

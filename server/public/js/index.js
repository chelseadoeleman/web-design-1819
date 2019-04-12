"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}var monthInput=document.getElementById("monthInput"),buttonAm=document.getElementById("am"),buttonPm=document.getElementById("pm"),months=["January","February","March","April","May","June","July","August","September","October","November","December"],keyUpEvents=["y","u","i","o","p","h","j","k","l","b","n","m","{",";","|",",",".","/","}"],keyDownEvents=["t","g","b","v","f","r","e","d","c","w","s","x","q","a","z","`"],keyPlusses=document.querySelectorAll(".keyUpEvent"),keyMinuses=document.querySelectorAll(".keyUpEvent"),focussables=document.querySelectorAll(".focussable"),state={focussedElement:null,previousKey:null};function focusNextElement(e){if("Shift"===e.key||" "===e.key){var t=state.previousKey,n=state.focussedElement,r=n?_toConsumableArray(focussables).findIndex(function(e){return e===n}):-1;if("Shift"!==t&&" "===e.key){var o=r+1>focussables.length?0:r+1;focussables[o].focus()}else if("Shift"===t&&" "===e.key){focussables[r-1<0?0:r-1].focus()}state.previousKey=e.key}}(buttonAm||buttonPm)&&(buttonAm.addEventListener("click",function(e){buttonPm.classList.remove("clicked"),buttonAm.classList.contains("clicked")?buttonAm.classList.remove("clicked"):e&&buttonAm.classList.add("clicked")}),buttonPm.addEventListener("click",function(e){buttonAm.classList.remove("clicked"),buttonPm.classList.contains("clicked")?buttonPm.classList.remove("clicked"):e&&buttonPm.classList.add("clicked")})),keyPlusses.forEach(function(e){e.addEventListener("keyup",function(e){var t=e.key,n=e.target,r=keyUpEvents.filter(function(e){return e===t});r&&0<r.length&&n.value<Number(n.getAttribute("max"))&&n.value++})}),keyMinuses.forEach(function(e){e.addEventListener("keyup",function(e){var t=e.key,n=e.target,r=keyDownEvents.filter(function(e){return e===t});r&&0<r.length&&n.value>Number(n.getAttribute("min"))&&n.value--})}),monthInput&&monthInput.addEventListener("keyup",function(e){var t=e.key,n=e.target,r=keyUpEvents.filter(function(e){return e===t});if(r&&0<r.length){var o=document.getElementById("monthAbove");o.innerText="";var u=e.target.value;if(u){var s=months[u-1];o.innerText=s}n.value+1<Number(n.getAttribute("max"))&&n.value++}else{var a=document.getElementById("monthAbove");a.innerText="";var i=e.target.value;if(i){var c=months[i-1];a.innerText=c}}}),window.addEventListener("keydown",focusNextElement),focussables.forEach(function(e){e.addEventListener("focus",function(e){state.focussedElement=e.target})});
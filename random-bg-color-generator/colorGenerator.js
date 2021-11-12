function chooseIndex(max) {
 let index = Math.floor(Math.random() * (max));
 return index;
}

function colorGenerateor() {
 let colorTokens = "0123456789abcdef".split('');
 let color = "#";

 for (let i = 0; i < 6; i++) {
  color += colorTokens[chooseIndex(colorTokens.length)]
 }
 return color;
}


let button = document.querySelector("button");
let colorName = document.querySelector("input");

button.addEventListener( 'click', () => {
 button.value = colorGenerateor();
 colorName.value = button.value;
 document.body.style.backgroundColor = colorName.value;
} )

window.onload = function() {
 colorName.value = "#";
}
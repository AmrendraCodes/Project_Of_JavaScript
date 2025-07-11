const colorInput = document.getElementById("colorInput");
const colorDisplay = document.getElementById("colorDisplay");

colorInput.addEventListener('click', function() {
    const color = colorInput.value;
    colorDisplay.textContent = color;
    colorDisplay.style.backgroundColor = color;
    colorDisplay.style.color = getContrastYIQ(color)

})
function getContrastYIQ(hexcolor){
    hexcolor = hexcolor.replace("#", "");
const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  const yiq = (r*299 + g*587 + b*114) / 1000;
  return (yiq >= 128) ? '#000' : '#fff';
} 





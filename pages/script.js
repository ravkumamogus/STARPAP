const letters = "STARP";
const starpaps = ["STARPAP","PARSTAP","PAPSTAR","PARAPTS","PSARAPT","PATPARS","PASPART","PARPATS","PRASTAP","ARPTAPS","ARSPAPT","RATPAPS","APTARPS","TRASPAT","SPARTAP","STRAPAP","TARPSAS","ARPSTAP"]
let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
          
        }
      
        return letters[Math.floor(Math.random() * 5)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
      event.target.dataset.value = starpaps[Math.floor(Math.random() * starpaps.length)]
    }
    
    iteration += 1 / 3;
  }, 30);
}

function showPopup() {
  var popup = document.getElementById("mailPopup");
  popup.classList.toggle("show");
}

showPopup()
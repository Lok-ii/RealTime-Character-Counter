let buttons = document.querySelectorAll(".btn");
let selectMenu = document.querySelector("select");
let options = document.querySelectorAll("option");
let updateTotal = document.querySelector("#updateTotal");
let countTotal = document.querySelector("#countTotal");
let updateRemaining = document.querySelector("#updateRemaining");
let countRemaining = document.querySelector("#countRemaining");
let reset = document.querySelector(".reset");
let limitCount = document.querySelector("#limitCount");
let text = document.querySelector("textarea");

let Option1 = `<option selected>Character</option>
<option>Word</option>`;

let Option2 = `<option selected>Word</option>
<option>Character</option>`;

let charInput = "0.00";
let wordInput = 0;
let limit
limitCount.addEventListener("input", () => {
    countRemaining.innerText = limitCount.value;
    limit = limitCount.value;
  });
text.addEventListener("input", () => {
  if(selectMenu.value == "Character"){
    charInput = text.value.length;
    countTotal.innerText = charInput;
    countRemaining.innerText = limitCount.value - charInput;
  }else{
    if(text.value[text.value.length - 1] == " " && text.value[text.value.length - 2] != " "){
        wordInput++;
        countTotal.innerText = wordInput;
        countRemaining.innerText = limitCount.value - wordInput;
    }
  }
  
  if (selectMenu.value == "Character") {
    text.setAttribute("maxlength", limit);
    if (limitCount.value <= 0) {
      limitCount.value = "";
      let maxlength = "0";
      text.setAttribute("maxlength", maxlength);
    }
  }else{
        let length = Number.POSITIVE_INFINITY;
        if(wordInput == limitCount.value){
            length = wordInput;
        }
        text.setAttribute("maxlength", length);
  }

  if(text.value.length == 0){
    charInput = 0;
    wordInput = 0;
    countTotal.innerText = 0;
    countRemaining.innerText = limitCount.value - 0;
  }
});

buttons.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.id === "Character") {
      selectMenu.innerHTML = Option1;
      updateTotal.innerText = "Total Characters:  ";
      updateRemaining.innerText = "Remaining Characters:  ";
    } else {
      selectMenu.innerHTML = Option2;
      updateTotal.innerText = "Total Words:  ";
      updateRemaining.innerText = "Remaining Words:  ";
    }
  });
});

selectMenu.addEventListener("input", () => {
  if (selectMenu.value == "Character") {
    updateTotal.innerText = "Total Characters:  ";
    updateRemaining.innerText = "Remaining Characters:  ";
    text.value = "";
  } else {
    updateTotal.innerText = "Total Words:  ";
    updateRemaining.innerText = "Remaining Words:  ";
    text.value = "";
  }

  countTotal.innerText = 0;
  countRemaining.innerText = limitCount.value;
});


reset.addEventListener("click", ()=>{
    text.value = "";
    countTotal.innerText = 0;
    countRemaining.innerText = "50";
    updateTotal.innerText = "Total Characters:  ";
    updateRemaining.innerText = "Remaining Characters:  ";

})
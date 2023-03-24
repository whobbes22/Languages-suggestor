//internal
function findScore() {
  let score = parseInt(document.querySelector("input[name='chal']:checked").value);
  score += parseInt(document.querySelector("input[name='corr']:checked").value);
  score += parseInt(document.querySelector("input[name='past']:checked").value);
  score += parseInt(document.querySelector("input[name='thre']:checked").value);
  score += parseInt(document.querySelector("select#time").value);
  score += parseInt(document.querySelector("select#lett").value);
  return score;
}
//UI
function completedForm(event) {
  event.preventDefault();
  const score = findScore();
  revealAnswer(score);
}
function randomizedLanguage(event) {
  event.preventDefault();
  const score = Math.round(Math.random() * 12) - 5;
  revealAnswer(score);
}
function revealAnswer(score) {
  document.querySelector("div#results").removeAttribute("class");
  if (score > 5) {
    //learn SQL    
    document.querySelector("span#showLanguage").innerText = "SQL";
    document.querySelector("a#showLink").href = "https://en.wikipedia.org/wiki/SQL";
    document.querySelector("a#showLink").innerText = "Click here to learn about SQL";
  } else if (score >= 3) {
    //learn python  
    document.querySelector("span#showLanguage").innerText = "Python";
    document.querySelector("a#showLink").href = "https://en.wikipedia.org/wiki/Python_(programming_language)";
    document.querySelector("a#showLink").innerText = "Click here to learn about Python";
  } else if (score > 0) {
    // learn js     
    document.querySelector("span#showLanguage").innerText = "JavaScript";
    document.querySelector("a#showLink").href = "https://en.wikipedia.org/wiki/JavaScript";
    document.querySelector("a#showLink").innerText = "Click here to learn about JavaScript";
  } else if (score === 0) {
    // learn R      
    document.querySelector("span#showLanguage").innerText = "R";
    document.querySelector("a#showLink").href = "https://en.wikipedia.org/wiki/R_(programming_language)";
    document.querySelector("a#showLink").innerText = "Click here to learn about R";
  } else if (score >= -3) {
    //learn C       
    document.querySelector("span#showLanguage").innerText = "C";
    document.querySelector("a#showLink").href = "https://en.wikipedia.org/wiki/C_(programming_language)";
    document.querySelector("a#showLink").innerText = "Click here to learn about C";
  } else {
    //learn C#      
    document.querySelector("span#showLanguage").innerText = "C#";
    document.querySelector("a#showLink").href = "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)";
    document.querySelector("a#showLink").innerText = "Click here to learn about C#";
  }
}
//id names
//completedForm
//randomize
window.addEventListener("load", function () {
  const randomizer = document.querySelector("#randomize");
  const cForm = document.querySelector("#completedForm");
  randomizer.addEventListener("click", randomizedLanguage);
  cForm.addEventListener("click", completedForm);
});

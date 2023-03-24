//internal
function findScore(){
  let score = parseInt(document.querySelector("input[name='chal']:checked").value);
  score += parseInt(document.querySelector("input[name='corr']:checked").value);
  score += parseInt(document.querySelector("input[name='past']:checked").value);
  score += parseInt(document.querySelector("select#time").value);
  score += parseInt(document.querySelector("select#lett").value);
  console.log(score);
  return score;
}

//UI


function completedForm(event){
  event.preventDefault();
  const score = findScore();
  console.log("comepleted form"+score);
  revealAnswer(score);
}
function randomizedLanguage(event){
  event.preventDefault();
  const score = Math.round(Math.random()*10) -5;
  console.log("randomized score"+score);
  revealAnswer(score);
}
function revealAnswer(score){
  document.querySelector("div#results").removeAttribute("class");
  if(score > 5){
    //learn SQL    
    document.querySelector("span#showLanguage").innerText ="SQL";
    document.querySelector("spawn#showLink").href="https://en.wikipedia.org/wiki/SQL";
  } else if(score >= 3){
    //learn python  
    document.querySelector("span#showLanguage").innerText ="Python";
    document.querySelector("spawn#showLink").href="https://en.wikipedia.org/wiki/Python_(programming_language)";
  } else if(score > 0){
    // learn js     
    document.querySelector("span#showLanguage").innerText ="JavaScript";
    document.querySelector("spawn#showLink").href="https://en.wikipedia.org/wiki/JavaScript";
  } else if(score ===0){
    // learn R      
    document.querySelector("span#showLanguage").innerText ="R";
    document.querySelector("spawn#showLink").href="https://en.wikipedia.org/wiki/R_(programming_language)";
  } else if(score >= -3){
    //learn C       
    document.querySelector("span#showLanguage").innerText ="C";
    document.querySelector("spawn#showLink").href="https://en.wikipedia.org/wiki/C_(programming_language)";
  } else{
    //learn C#      
    document.querySelector("span#showLanguage").innerText ="C#";
    document.querySelector("spawn#showLink").href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)";
  }
}

window.addEventListener("load", function(){
  const form = document.querySelector("#languageFinder");
  form.addEventListener("submit", completedForm);
});
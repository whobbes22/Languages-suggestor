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
  if(score >= 4){

  } else if(score > 0){

  } else if(score ===0){

  } else if(score >= -3){

  } else{

  }
}

window.addEventListener("load", function(){
  const form = document.querySelector("#languageFinder");
  form.addEventListener("submit", completedForm);
});
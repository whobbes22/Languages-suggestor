//internal

//UI

function completedForm(event){
  event.preventDefault();
  let score = parseInt(document.querySelector("input[name='chal']:checked").value);
  score += parseInt(document.querySelector("input[name='corr']:checked").value);
  score += parseInt(document.querySelector("input[name='past']:checked").value);
  score += parseInt(document.querySelector("select#time").value);
  score += parseInt(document.querySelector("select#lett").value);
  console.log(score);
}

window.addEventListener("load", function(){
  const form = document.querySelector("#languageFinder");
  form.addEventListener("submit", completedForm);
});
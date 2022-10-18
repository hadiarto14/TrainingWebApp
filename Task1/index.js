const skillData = ["JavaScript", "Angular", "Java", "Spring Boot"];
const button = document.querySelector('.btn')
let clicked = false;
function showSkill(skill) {
  const li = document.createElement("li");
  li.textContent = skill;
  return li;
}

const skillsContainer = document.querySelector("#skills");

function show() {
  if (!clicked) {
    for (let i = 0; i < skillData.length; i++) {
      skillsContainer.appendChild(showSkill(skillData[i]));
    }
    clicked = true;
    button.innerHTML="Hide Skill"
  }else {
    reset()
  }
}

function reset(){
    clicked = false
    skillsContainer.innerHTML = ''
    button.innerHTML="Show Skill"
}

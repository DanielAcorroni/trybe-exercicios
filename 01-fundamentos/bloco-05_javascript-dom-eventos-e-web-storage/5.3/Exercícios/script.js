function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
window.onload = function () {
    addCalendar();
    btnHoliday("Feriados");

    let holidayBtn = document.getElementById("btn-holiday");

    holidayBtn.addEventListener("click", changeHolidayBackground);

    btnFriday("Sexta-Feira");

    let fridayBtn = document.querySelector("#btn-friday");

    fridayBtn.addEventListener("click", changeFridayBackground);

    zoomInHover();
    zoomOutHover();
    newTaskSpan('Projeto: ');
    newTaskDiv('green');
    setTaskClass();
    checkImportantDays();
}

let monthDays = document.querySelector("#days");
let november = [29, 30];
let dezember = [];
let btnContainer = document.querySelector(".buttons-container");

//01

for (let counter = 1; counter <= 31; counter += 1) {
    dezember.push(counter);
}

let wholeCalendar = november.concat(dezember);

function addCalendar() {
    for (let compare of wholeCalendar) {

        let dayListItem = document.createElement("li");
        dayListItem.innerText = compare;

        if (compare === 4 || compare === 11 || compare === 18) {
            dayListItem.className = "friday day";
        } else if (compare === 24 || compare === 31) {
            dayListItem.className = "holiday day";
        } else if (compare === 25) {
            dayListItem.className = "friday holiday day";
        } else {
            dayListItem.className = "day";
        }

        monthDays.appendChild(dayListItem);
    }
}

//02
function btnHoliday(feriados) {
    feriadosBtn = document.createElement("button");
    feriadosBtn.id = "btn-holiday";
    feriadosBtn.innerText = feriados;
    btnContainer.appendChild(feriadosBtn);
}

//03
let holidaysDays = document.getElementsByClassName("holiday");
let click = 0;

function changeHolidayBackground() {
    click += 1;

    for (let compare of holidaysDays) {
        if (click % 2 === 1) {
            compare.style.backgroundColor = "white";
        } else {
            compare.style.backgroundColor = "rgb(238,238,238)";
        }
    }
}

//04
function btnFriday(friday) {
    fridayBtn = document.createElement("button");
    fridayBtn.id = "btn-friday";
    fridayBtn.innerText = friday;
    btnContainer.appendChild(fridayBtn);
}

//05
let fridayDays = document.getElementsByClassName("friday");
let click2 = 0

function changeFridayBackground() {
    click2 += 1;

    for (let compare of fridayDays) {
        if (click2 % 2 === 1) {
            compare.style.backgroundColor = "white";
        } else {
            compare.style.backgroundColor = "rgb(238,238,238)";
        }
    }
}

//06
function zoomInHover() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  };
  
  function zoomOutHover() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
};

//07
function newTaskSpan(task) {

    let tasksContainer = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');
  
    taskName.innerHTML = task;
    tasksContainer.appendChild(taskName);
};

//08
function newTaskDiv(color) {

    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');
  
    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    tasksContainer.appendChild(newTask);
};

//09
function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
  
    myTasks.addEventListener('click', function(event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
};

//09
function checkImportantDays() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
};
document.addEventListener('DOMContentLoaded', () => {

  enableNewTask();

})

function enableNewTask() {
  const table = document.querySelector('.task-table');
  const newRow = document.createElement('tr');
  const newPriority = document.createElement('td');
  const newTask = document.createElement('td');
  const newTaskInput = document.createElement('input');
  const newTargetDate = document.createElement('td');
  const newTargetDateInput = document.createElement('input');
  const newSave = document.createElement('td');
  const newSaveButton = document.createElement('button');

  newPriority.textContent = table.childNodes.length - 1;
  newPriority.classList.add('priority');
  newRow.appendChild(newPriority);

  newTask.appendChild(newTaskInput);
  newRow.appendChild(newTask);

  newTargetDate.appendChild(newTargetDateInput);
  newRow.appendChild(newTargetDate);

  newSave.classList.add('no-padding');
  newSaveButton.textContent = 'Save';
  newSave.appendChild(newSaveButton);
  newRow.appendChild(newSave);

  table.appendChild(newRow);

  newSaveButton.addEventListener('click', () => {
    if (newTaskInput.value.split(' ').join('')) {
      addButtons(newSaveButton.parentNode.parentNode);
      newSaveButton.parentNode.parentNode.removeChild(newSaveButton.parentNode);
      enableNewTask();
      console.dir(table);
    }
  })
}

function addButtons(element) {
  const buttonsElement = document.createElement('td');
  buttonsElement.classList.add('no-padding');

  const up = document.createElement('div');
  up.classList.add('clickable');
  up.textContent = '⬆';
  buttonsElement.appendChild(up);

  const down = document.createElement('div');
  down.classList.add('clickable');
  down.textContent = '⬇';
  buttonsElement.appendChild(down);

  const tick = document.createElement('div');
  tick.classList.add('clickable');
  tick.textContent = '✓';
  buttonsElement.appendChild(tick);
  makeButtonChangeColour(tick, 'grey');

  const cross = document.createElement('div');
  cross.classList.add('clickable');
  cross.textContent = '✕';
  buttonsElement.appendChild(cross);
  makeCrossButtonWork(cross);

  const red = document.createElement('div');
  red.classList.add('clickable', 'red');
  buttonsElement.appendChild(red);
  makeButtonChangeColour(red, 'red');

  const blue = document.createElement('div');
  blue.classList.add('clickable', 'blue');
  buttonsElement.appendChild(blue);
  makeButtonChangeColour(blue, 'blue');

  const yellow = document.createElement('div');
  yellow.classList.add('clickable', 'yellow');
  buttonsElement.appendChild(yellow);
  makeButtonChangeColour(yellow, 'yellow');

  const green = document.createElement('div');
  green.classList.add('clickable', 'green');
  buttonsElement.appendChild(green);
  makeButtonChangeColour(green, 'green');

  element.appendChild(buttonsElement);
}

function makeButtonChangeColour(button, colour) {
  button.addEventListener('click', () => {
    button.parentNode.parentNode.childNodes[1].className = colour;
    button.parentNode.parentNode.childNodes[1].childNodes[0].className = colour;
    button.parentNode.parentNode.childNodes[2].className = colour;
    button.parentNode.parentNode.childNodes[2].childNodes[0].className = colour;
  })
}

function makeCrossButtonWork(button) {
  button.addEventListener('click', () => {
    const row = button.parentNode.parentNode;
    const removedPriority = row.childNodes[0].textContent;
    const table = row.parentNode;
    table.removeChild(row);
    const rows = table.childNodes.length - 2;
    console.log('number of rows:', rows);
    for (i = 2; i <= rows + 1; i++) {
      console.log(i);
      table.childNodes[i].childNodes[0].textContent = `${i - 1}`;
    }
  })
}

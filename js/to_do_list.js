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
  makeUpButtonWork(up);

  const down = document.createElement('div');
  down.classList.add('clickable');
  down.textContent = '⬇';
  buttonsElement.appendChild(down);
  makeDownButtonWork(down);

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
    if (button.parentNode.parentNode.childNodes[1].className !== colour) {
      button.parentNode.parentNode.childNodes[1].className = colour;
      button.parentNode.parentNode.childNodes[1].childNodes[0].className = colour;
      button.parentNode.parentNode.childNodes[2].className = colour;
      button.parentNode.parentNode.childNodes[2].childNodes[0].className = colour;
    } else {
      button.parentNode.parentNode.childNodes[1].className = '';
      button.parentNode.parentNode.childNodes[1].childNodes[0].className = '';
      button.parentNode.parentNode.childNodes[2].className = '';
      button.parentNode.parentNode.childNodes[2].childNodes[0].className = '';
    }
  })
}

function makeCrossButtonWork(button) {
  button.addEventListener('click', () => {
    const row = button.parentNode.parentNode;
    const removedPriority = row.childNodes[0].textContent;
    const table = row.parentNode;
    table.removeChild(row);
    const rows = table.childNodes.length - 2;
    for (i = 2; i <= rows + 1; i++) {
      table.childNodes[i].childNodes[0].textContent = `${i - 1}`;
    }
  })
}

function makeUpButtonWork(button) {
  button.addEventListener('click', () => {
    const row = button.parentNode.parentNode;
    const currentPriority = parseInt(row.childNodes[0].textContent, 10);
    const table = row.parentNode;
    if (currentPriority > 1) {
      const previousRowPriority = currentPriority - 1;
      const previousRow = table.childNodes[previousRowPriority + 1];
      table.insertBefore(row, previousRow);
      row.childNodes[0].textContent = currentPriority - 1;
      previousRow.childNodes[0].textContent = currentPriority;
    }
  })
}

function makeDownButtonWork(button) {
  button.addEventListener('click', () => {
    const row = button.parentNode.parentNode;
    const currentPriority = parseInt(row.childNodes[0].textContent, 10);
    const table = row.parentNode;
    const totalRows = parseInt(table.childNodes.length, 10) - 2;
    if (currentPriority < totalRows - 1) {
      const nextRowPriority = currentPriority + 1;
      const nextRow = table.childNodes[nextRowPriority + 1];
      table.insertBefore(nextRow, row);
      row.childNodes[0].textContent = currentPriority + 1;
      nextRow.childNodes[0].textContent = currentPriority;
    }
  })
}

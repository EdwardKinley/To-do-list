document.addEventListener('DOMContentLoaded', () => {

  nextPriority = 1;
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

  newPriority.textContent = nextPriority;
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
      nextPriority ++;
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

  const down = document.createElement('div');
  down.classList.add('clickable');
  down.textContent = '⬇';
  buttonsElement.appendChild(down);

  const tick = document.createElement('div');
  tick.classList.add('clickable');
  tick.textContent = '✓';
  buttonsElement.appendChild(tick);

  const cross = document.createElement('div');
  cross.classList.add('clickable');
  cross.textContent = '✕';
  buttonsElement.appendChild(cross);

  element.appendChild(buttonsElement);
}

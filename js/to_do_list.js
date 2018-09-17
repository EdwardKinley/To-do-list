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

  newSaveButton.textContent = 'Save';
  newSave.appendChild(newSaveButton);
  newRow.appendChild(newSave);

  table.appendChild(newRow);

  newSaveButton.addEventListener('click', () => {
    if (newTaskInput.value.split(' ').join('')) {
      nextPriority ++;
      console.log('new task save button clicked');
      enableNewTask();
    }
  })
}

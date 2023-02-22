console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    headline: form.headline.value,
    task: form.task.value,
  };

  console.log(formData);

  const listItem = document.createElement("li");
  const headline = document.createElement("h3");
  const task = document.createElement("p");

  headline.textContent = formData.headline;
  task.textContent = formData.task;

  listItem.appendChild(headline);
  listItem.appendChild(task);
  todoList.appendChild(listItem);

  form.reset();
  form.headline.focus();
});

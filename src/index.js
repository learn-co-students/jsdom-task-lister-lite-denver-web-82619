document.addEventListener("DOMContentLoaded", () => {
  form = document.getElementById('create-task-form')
  form.addEventListener("submit", event => {
    event.preventDefault();
    let input = document.getElementById('new-task-description')
    let list = document.getElementById('list')
    let li = document.createElement('li')

    li.innerHTML = input.value
    list.append(li)
  })
});

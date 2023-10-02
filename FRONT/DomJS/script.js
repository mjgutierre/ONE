const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
  //funcion anonima
  evento.preventDefault(); //el objeto no recarga la pagina
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  task.classList.add("card");
  input.value = "";
  const content = ` <div>
  <i class="far fa-check-square icon"></i>
  <span class="task">${value}</span>
</div>
<i class="fas fa-trash-alt trashIcon icon"></i>
</li>`; //$codigo javascript en html
  task.innerHTML = content;

  list.appendChild(task);

  console.log(content);
};

console.log(btn);

//Arrow functions o funciones anonimas
btn.addEventListener("click", createTask);


const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);//click y la funcion al darle click
    return i;
  };
  // Immediately invoked function expression IIFE
  const completeTask = (event) => {
    const element = event.target;//cambia un elemento icono para completado
    element.classList.toggle('fas');//se puede tambien add y remove (verifica si existe la clase la quita sino la pone)
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
  };

  export default checkComplete;
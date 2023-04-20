const commentForm = document.getElementById("comment-form");
const commentsContainer = document.getElementById("comments-container");

commentForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevenir que se envíe el formulario
  
  // Obtener los valores del formulario
  const name = commentForm.elements["name"].value;
  const comment = commentForm.elements["comment"].value;

  // Crear un elemento para mostrar el comentario
  const commentElement = document.createElement("div");
  commentElement.classList.add("comment");
  commentElement.innerHTML = `
    <strong>${name}:</strong>
    <div class="comment-text">${comment}</div>
  `;

  // Añadir el comentario al contenedor
  commentsContainer.appendChild(commentElement);

  // Limpiar el formulario
  commentForm.reset();
});

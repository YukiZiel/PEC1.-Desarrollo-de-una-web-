

const commentForms = document.querySelectorAll("form");

commentForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.elements["name"].value;
    const comment = form.elements["comment"].value;
    const commentsContainer = form.nextElementSibling;

    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML = `
      <strong>${name}:</strong>
      <p class="comment-text">${comment}</p>
    `;

    commentsContainer.appendChild(commentElement);

    form.reset();
  });
});

Este código selecciona todos los formularios en la página y agrega un evento de envío a cada uno. Dentro de cada controlador de eventos, se accede a los elementos del formulario y se agrega el comentario al contenedor siguiente utilizando nextElementSibling.

Ten en cuenta que esta solución asume que cada página solo tiene un formulario y un contenedor de comentarios, y que cada formulario y contenedor de comentarios tienen un ID único. Si hay más de un formulario o contenedor de comentarios en cada página, es posible que debas modificar el código para manejar eso.

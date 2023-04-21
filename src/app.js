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

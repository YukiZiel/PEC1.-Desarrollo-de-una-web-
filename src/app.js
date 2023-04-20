

const commentForms = document.getElementsByClassName("comment-form");

for (let i = 0; i < commentForms.length; i++) {
  commentForms[i].addEventListener("submit", (event) => {
    event.preventDefault();
    const name = commentForms[i].elements["name"].value;
    const comment = commentForms[i].elements["comment"].value;

    const commentsContainer = commentForms[i].nextElementSibling;

    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML = `
      <strong>${name}:</strong>
      <p class="comment-text">${comment}</p>
    `;

    commentsContainer.appendChild(commentElement);

    commentForms[i].reset();
  });
}

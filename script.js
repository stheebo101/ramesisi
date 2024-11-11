document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("learnMoreModal");
  const btn = document.getElementById("learnMoreBtn");
  const closeBtn = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = () => {
    modal.style.display = "block";
  };

  // When the user clicks the close button, close the modal
  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside the modal, close it
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

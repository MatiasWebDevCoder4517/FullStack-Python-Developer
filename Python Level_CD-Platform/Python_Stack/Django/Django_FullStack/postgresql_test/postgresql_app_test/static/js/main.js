const btnDelete1 = document.querySelectorAll(".btn-delete1");
if (btnDelete1) {
  const btnArray = Array.from(btnDelete1);
  btnArray.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (!confirm("Are you sure you want to delete this Course?")) {
        e.preventDefault();
      }
    });
  });
}
const btnDelete2 = document.querySelectorAll(".btn-delete2");
if (btnDelete2) {
  const btnArray = Array.from(btnDelete2);
  btnArray.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (!confirm("Are you sure you want to delete this Commentary?")) {
        e.preventDefault();
      }
    });
  });
}

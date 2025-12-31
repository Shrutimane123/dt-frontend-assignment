let courses = [
  { name: "HTML Basics" },
  { name: "CSS Basics" },
  { name: "JavaScript Basics" }
];

function renderCourses() {
  const container = document.getElementById("cards");
  container.innerHTML = "";

  courses.forEach(course => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = course.name;
    container.appendChild(div);
  });
}

document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.getElementById("courseInput");

  if (input.value.trim() === "") {
    alert("Please enter course name");
    return;
  }

  courses.push({ name: input.value });
  input.value = "";
  renderCourses();
});

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

renderCourses();

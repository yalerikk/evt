const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  const flex = section.querySelector(".task-container");
  section.querySelectorAll(".controller-btn").forEach((el) => {
    el.addEventListener("click", ({ target }) => {
      // Убираем класс active у всех кнопок в данной секции
      section.querySelector(".active").classList.remove("active");

      // Устанавливаем свойства в зависимости от секции
      if (section.classList.contains("flex-flow")) {
        const [direction, wrap] = target.innerText.split(" ");
        flex.style.flexDirection = direction; // Устанавливаем flex-direction
        flex.style.flexWrap = wrap || "nowrap"; // Устанавливаем flex-wrap
        console.log(`flex-direction: ${direction}, flex-wrap: ${wrap}`); // Проверяем значения
      } else if (section.classList.contains("flex-direction")) {
        flex.style.flexDirection = target.innerText;
      } else if (section.classList.contains("justify-content")) {
        flex.style.justifyContent = target.innerText;
      }

      // Добавляем класс active к нажатой кнопке
      target.classList.add("active");
    });
  });
});

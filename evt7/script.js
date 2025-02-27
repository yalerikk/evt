const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  const flex = section.querySelector(".task-container");
  const buttons = section.querySelectorAll(".controller-btn");

  // Установка стиля по умолчанию для первой кнопки (с классом active)
  const activeButton = section.querySelector(".active");
  if (activeButton) {
    setFlexStyles(activeButton.innerText, section, flex);
  }

  buttons.forEach((el) => {
    el.addEventListener("click", ({ target }) => {
      // Удаляем класс active у текущей активной кнопки, чтобы только что нажатая кнопка могла стать активной
      section.querySelector(".active").classList.remove("active");

      // Устанавливаем стили в зависимости от секции
      setFlexStyles(target.innerText, section, flex);

      // Добавляем класс active к нажатой кнопке
      target.classList.add("active");
    });
  });
});

// Функция для установки стилей flex
function setFlexStyles(value, section, flex) {
  if (section.classList.contains("flex-flow")) {
    const [direction, wrap] = value.split(" ");
    flex.style.flexDirection = direction;
    flex.style.flexWrap = wrap || "nowrap";
    console.log(`flex-direction: ${direction}, flex-wrap: ${wrap}`);
  } else if (section.classList.contains("flex-direction")) {
    flex.style.flexDirection = value;
  } else if (section.classList.contains("justify-content")) {
    flex.style.justifyContent = value;
  } else if (section.classList.contains("order")) {
    const boxThird = section.querySelector(".box.third");
    boxThird.style.order = value;
  } else if (section.classList.contains("flex-basis")) {
    const boxThird = section.querySelector(".box.third");
    boxThird.style.flexBasis = value === "content" ? "auto" : value;
  }
}

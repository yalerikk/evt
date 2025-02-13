const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  const taskContainer = section.querySelector(".task-container");
  const buttons = section.querySelectorAll(".controller-btn");

  // Установка стиля по умолчанию для первой кнопки (с классом active)
  const activeButton = section.querySelector(".active");
  if (activeButton) {
    setGridStyles(section, taskContainer, activeButton.textContent.trim());
  }

  buttons.forEach((button) => {
    button.addEventListener("click", ({ target }) => {
      // Убираем класс active у всех кнопок в данной секции
      section.querySelector(".active").classList.remove("active");

      const gridValue = target.textContent.trim();
      console.log(`Значение для ${section.className}: ${gridValue}`);

      // Устанавливаем стиль
      setGridStyles(section, taskContainer, gridValue);

      // Добавляем класс active к нажатой кнопке
      target.classList.add("active");
    });
  });
});

// Функция для установки стилей grid
function setGridStyles(section, taskContainer, gridValue) {
  // сопоставить классы секций с их соответствующими свойствами стилей
  const styleMap = {
    "grid-template-columns": "gridTemplateColumns",
    "grid-template-rows": "gridTemplateRows",
    "grid-template-areas": "gridTemplateAreas",
    "gap": "gap",
    "grid-auto-flow": "gridAutoFlow",
  };

  for (const [className, styleProp] of Object.entries(styleMap)) {
    // содержит ли текущая секция указанный класс
    if (section.classList.contains(className)) {
      taskContainer.style[styleProp] = gridValue;
      console.log(`Установлено: ${styleProp} = ${gridValue}`);
      break; // Выходим из цикла, если нашли соответствие
    }
  }
}

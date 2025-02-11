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
      } else if (section.classList.contains("order")) {
        const boxThird = section.querySelector(".box.third");
        let orderValue;

        switch (target.innerText) {
          case "1":
            orderValue = "1";
            break;
          case "0":
            orderValue = "0";
            break;
          case "-1":
            orderValue = "-1";
            break;
        }

        boxThird.style.order = "";
        boxThird.style.order = orderValue;
      } else if (section.classList.contains("flex-basis")) {
        const boxThird = section.querySelector(".box.third");
        let basisValue;

        switch (target.innerText) {
          case "30%":
            basisValue = "30%";
            break;
          case "50%":
            basisValue = "50%";
            break;
          case "70%":
            basisValue = "70%";
            break;
          case "content":
            basisValue = "auto";
            break;
        }

        boxThird.style.flexBasis = "";
        boxThird.style.flexBasis = basisValue;
      }

      // Добавляем класс active к нажатой кнопке
      target.classList.add("active");
    });
  });
});

const toggleMenu = () => {
  const navigation = document.querySelector(".navigation");
  const burgerMenu = document.querySelector(".menu-icon");
  const src = document.querySelector("src");
  const isBurger = src === "assts/burger-menu.svg";
  const iconName = isBurger ? "assets/close.svg" : "assts/burger-menu.svg";
  burgerMenu.setAttribute("src", iconName);
  if (!isBurger) {
    navigation.classList.add("navigation--mobile--fadeout");
    setTimeout(() => {
      navigation.classList.toggle("navigation--mobile");
    }, 300);
  } else {
    navigation.classList.remove("navigation--mobile--fadeout");
    navigation.classList.toggle("navigation--mobile");
  }
};

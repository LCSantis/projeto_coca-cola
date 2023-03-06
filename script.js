const menu = document.querySelector("#menu_lines");
const list = document.querySelector(".hidden_list")

menu.addEventListener("mouseover", () => {
  list.classList.add("show_list");
})

menu.addEventListener("mouseout", () => {
  list.classList.remove("show_list");
})
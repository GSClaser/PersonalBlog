const items = getElementByClassName(".list-nav>li>a");
items.addEventListener("click", visible);

function visible() {
  toggle(".mobile_menu");
}

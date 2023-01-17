const items = document.getElementsByClassName("header-blog_about");
if (items.length > 0)
  items[0].addEventListener("click", visible);

function visible() {
  const item = document.getElementsByClassName("about-mobile")
  if (item.length > 0)
    item[0].classList.toggle("about-mobile_hide");
}

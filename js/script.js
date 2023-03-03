const items = document.getElementsByClassName("header-blog_about");
if (items.length > 0)
{
  items[0].addEventListener("click", visible);
}

function visible() {
  const item = document.getElementsByClassName("about-mobile")
  if (item.length > 0)
  {
    item[0].classList.toggle("about-mobile_hide");
    const item_move = document.getElementsByClassName("header-popup");
    item_move[0].classList.toggle("header-popup_hide");
  } 
}

const items_phone = document.getElementsByClassName("mobile-press-button");
if (items_phone.length > 0)
  items_phone[0].addEventListener("click", visible_phone);

function visible_phone() {
  const item = document.getElementsByClassName("about-mobile")
  if (item.length > 0)
    item[0].classList.toggle("about-mobile_hide");
}

const items_large = document.getElementsByClassName("header-blog_about  ");
if (items_large.length > 0)
  items_large[0].addEventListener("click", visible_large);

function visible_large() {
  const item = document.getElementsByClassName("about")
  if (item.length > 0)
    item[0].classList.toggle("about-mobile_hide");
}

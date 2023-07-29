function openTab(evt, tabName) {
  let i, tab, item;

  tab = document.getElementsByClassName("tabs-title");
  for (i = 0; i < tab.length; i++) {
    tab[i].classList.remove("active");
  }

  item = document.getElementsByClassName("item");
  for (i = 0; i < item.length; i++) {
    item[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active")
}

(function () {
  const classNames = {
    active: 'active',
    submenuActive: 'submenu-active',
    toggle: 'toggle',
    item: 'item',
    menu: 'menu',
    submenu: 'submenu',
  }

  const dataContainer = document.querySelector('#mockup-navigation-data-container');
  if (!dataContainer || !dataContainer.dataset) {
    return;
  }
  const hamburger = JSON.parse(dataContainer.dataset.hamburgerIcon);
  const closeIcon = JSON.parse(dataContainer.dataset.closeIcon);

  const toggle = document.querySelector(`.${classNames.toggle}`);
  const menu = document.querySelector(`.${classNames.menu}`);
  const items = document.querySelectorAll(`.${classNames.item}`);

  /* Toggle mobile menu */
  function toggleMenu() {
    if (menu.classList.contains(classNames.active)) {
      menu.classList.remove(classNames.active);
      toggle.querySelector("a").innerHTML = hamburger;
    } else {
      menu.classList.add(classNames.active);
      toggle.querySelector("a").innerHTML = closeIcon;
    }
  }

  /* Activate Submenu */
  function toggleItem() {
    if (this.classList.contains(classNames.submenuActive)) {
      this.classList.remove(classNames.submenuActive);
    } else if (menu.querySelector(`.${classNames.submenuActive}`)) {
      menu.querySelector(`.${classNames.submenuActive}`).classList.remove(classNames.submenuActive);
      this.classList.add(classNames.submenuActive);
    } else {
      this.classList.add(classNames.submenuActive);
    }
  }

  /* Close Submenu From Anywhere */
  function closeSubmenu(e) {
    if (menu.querySelector(`.${classNames.submenuActive}`)) {
      let isClickInside = menu
        .querySelector(`.${classNames.submenuActive}`)
        .contains(e.target);

      if (!isClickInside && menu.querySelector(`.${classNames.submenuActive}`)) {
        menu
          .querySelector(`.${classNames.submenuActive}`)
          .classList.remove(classNames.submenuActive);
      }
    }
  }
  /* Event Listeners */
  toggle.addEventListener("click", toggleMenu, false);
  document.body.addEventListener("click", closeSubmenu, false);

  for (let item of items) {
    if (item.querySelector(`.${classNames.submenu}`)) {
      item.addEventListener("mouseenter", toggleItem, false);
      item.addEventListener("mouseout", closeSubmenu, false);
    }
    item.addEventListener("keypress", toggleItem, false);
  }
})();

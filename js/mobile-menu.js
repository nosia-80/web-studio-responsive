(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const { height: pageHeaderHeight } = document
    .querySelector('.page-header')
    .getBoundingClientRect();

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('menu-toggle--open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('mobile-menu--open');
    document.body.classList.toggle('menu-open');
  });

  document.documentElement.style.setProperty(
    '--page-header-height',
    `${pageHeaderHeight}px`,
  );
})();

const adSelector = "div[data-testid=top-impression-pixel]";
const sidebarSelector = "div[data-testid=sidebarColumn]";
const searchSelector = "form[aria-label='Search Twitter']";
const happeningSelector =
  "div[data-testid=sidebarColumn] div[aria-label='Timeline: Trending now']";
const followSidebarSelector = "aside[aria-label='Who to follow']";
const footerSelector = "nav[aria-label='Footer']";
const messagesSelector = "div[data-testid=DMDrawer]";
const followSelector =
  "div[data-testid=primaryColumn] div[data-testid=UserCell]";
const listsSelector =
  "div[data-testid=primaryColumn] div[data-testid=listCell]";
const topicsSelector =
  "div[data-testid=primaryColumn] div[aria-label='Timeline: Carousel']";

new MutationObserver(() => {
  document.querySelectorAll(adSelector).forEach((ad) => {
    // Twitter detects if you take down the whole tweet, so we are removing its direct child (:
    window.location.href.includes("home")
      ? ad.parentElement.parentElement.parentElement.remove()
      : ad.parentElement.parentElement.parentElement.parentElement.remove();
  });
  const happening = document.querySelector(happeningSelector);
  if (happening) {
    happening.parentElement.parentElement.parentElement.remove();
  }
  const followSidebar = document.querySelector(followSidebarSelector);
  if (followSidebar) {
    followSidebar.parentElement.remove();
  }
  const footer = document.querySelector(footerSelector);
  if (footer) {
    footer.parentElement.remove();
  }
  const messages = document.querySelector(messagesSelector);
  if (messages) {
    messages.remove();
  }
  if (
    !window.location.href.includes("explore") &&
    !window.location.href.includes("connect_people")
  ) {
    document.querySelectorAll(followSelector).forEach((f) => {
      if (
        f.parentElement.parentElement.parentElement.previousElementSibling &&
        f.parentElement.parentElement.parentElement.nextElementSibling
          ?.nextElementSibling
      ) {
        f.parentElement.parentElement.parentElement.previousElementSibling.style.display =
          "none";
        f.parentElement.parentElement.parentElement.style.display = "none";
        f.parentElement.parentElement.parentElement.nextElementSibling.style.display =
          "none";
        f.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.style.display =
          "none";
      }
    });
  }
  if (!window.location.href.includes("lists")) {
    document.querySelectorAll(listsSelector).forEach((f) => {
      f.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.style.display =
        "none";
      f.parentElement.parentElement.parentElement.previousElementSibling.style.display =
        "none";
      f.parentElement.parentElement.parentElement.style.display = "none";
      f.parentElement.parentElement.parentElement.nextElementSibling.style.display =
        "none";
      f.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.style.display =
        "none";
    });
  }
  if (!window.location.href.includes("topics")) {
    const topics = document.querySelector(topicsSelector);
    if (
      topics?.parentElement.parentElement.parentElement.parentElement
        .previousElementSibling &&
      topics?.parentElement.parentElement.parentElement.parentElement
        .nextElementSibling?.nextElementSibling
    ) {
      topics.parentElement.parentElement.parentElement.parentElement.previousElementSibling.style.display =
        "none";
      topics.parentElement.parentElement.parentElement.parentElement.style.display =
        "none";
      topics.parentElement.parentElement.parentElement.parentElement.nextElementSibling.style.display =
        "none";
      topics.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.style.display =
        "none";
    }
  }
}).observe(document.body, {
  subtree: true,
  childList: true,
});

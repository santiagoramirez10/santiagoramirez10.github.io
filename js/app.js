/*menu*/
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Close menu");
  } else {
    navToggle.setAttribute("aria-label", "Open menu");
  }
});
/*contact*/
const $form = document.querySelector(".contact-form")
const $buttonMailto = document.querySelector(".link-mail")
$form.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:santiagoramirezperez96@gmail.com?subject=nombre ${form.get('name')}, correo ${form.get('email')}&body=${form.get('message')}`)
  $buttonMailto.click()
  $form.reset();
}
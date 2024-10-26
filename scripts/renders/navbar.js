export function renderNavbar() {
  const head = Array.from(document.getElementsByTagName("head"))?.[0];
  const body = Array.from(document.getElementsByTagName("body"))?.[0];

  const navbar = `<header class="navbar">
      <h1 class="navbar__header">Products</h1>
    </header>`
  const navbarStyle = `<link rel="stylesheet" href="./styles/navbar.css" />`

  head.innerHTML += navbarStyle
  body.innerHTML += navbar
}
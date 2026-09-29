const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  const estaAberto = menu.classList.toggle("ativo");

  menuToggle.setAttribute("aria-expanded", estaAberto);

  menuToggle.setAttribute(
    "aria-label",
    estaAberto
      ? "Fechar menu de navegação"
      : "Abrir menu de navegação"
  );

  menuToggle.textContent = estaAberto ? "✕" : "☰";
});

const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("ativo");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute(
      "aria-label",
      "Abrir menu de navegação"
    );

    menuToggle.textContent = "☰";
  });
});

const formulario = document.getElementById("form-contato");
const feedback = document.getElementById("form-feedback");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    feedback.textContent =
      "Por favor, preencha todos os campos.";
    return;
  }

  feedback.textContent =
    `Obrigado, ${nome}! Sua mensagem foi recebida.`;

  formulario.reset();
});

const ano = document.getElementById("ano");

ano.textContent = new Date().getFullYear();
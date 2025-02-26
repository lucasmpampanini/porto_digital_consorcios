function sendWhatsAppMessage(e) {
  e.preventDefault();
  const loadingEl = document.querySelector(".php-email-form .loading");
  
  // Exibe o loading e atualiza o texto
  loadingEl.style.display = "block";
  loadingEl.textContent = "Enviando mensagem...";
  
  // Coleta os valores do formulário
  const name    = document.querySelector('input[name="name"]').value;
  const email   = document.querySelector('input[name="email"]').value;
  const subject = document.querySelector('input[name="subject"]').value;
  const message = document.querySelector('textarea[name="message"]').value;
  
  // Monta o texto da mensagem
  const text = `Nome: ${name}\nEmail: ${email}\nAssunto: ${subject}\nMensagem: ${message}`;
  
  // URL do WhatsApp com o número de destino
  const whatsappURL = `https://wa.me/5516998590269?text=${encodeURIComponent(text)}`;
  
  // Após um breve delay, redireciona e oculta o loading
  setTimeout(() => {
    window.open(whatsappURL, '_blank');
    loadingEl.style.display = "none";
  }, 1000);
}

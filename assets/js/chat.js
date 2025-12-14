    
    const chatResposta = document.getElementById('chatResposta');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');

    sendBtn.addEventListener('click', sendResposta);
    userInput.addEventListener('keypress', e => {
      if (e.key === 'Enter') sendResposta();
    });

    function sendResposta() {
      const text = userInput.value.trim();
      if (!text) return;

      // Mensagem do usuário
      appendResposta(text, 'user');
      userInput.value = '';

      // Resposta do "bot"
      setTimeout(() => {
        const resposta = gerarResposta(text);
        appendResposta(resposta, 'bot');
      }, 600);
    }

    function appendResposta(text, sender) {
      const msg = document.createElement('div');
      msg.classList.add('resposta', sender);
      msg.textContent = text;
      chatResposta.appendChild(msg);
      chatResposta.scrollTop = chatResposta.scrollHeight;
    }

    function gerarResposta(text) {
      text = text.toLowerCase();
      if (text.includes('1')) return 'Aguarde um momento, você já será atendido por um dos nossos atendentes.';
      if (text.includes('2')) return 'Atendemos de segunda a sexta, das 8h às 18h. ';
      else 
        return 'Opção inválida';
    }
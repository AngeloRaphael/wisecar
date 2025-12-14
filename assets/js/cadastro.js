document.addEventListener('DOMContentLoaded', () => {
    
    const cadastroForm = document.getElementById('cadastroForm');

    cadastroForm.addEventListener('submit', (event) => {
        
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const repitaSenha = document.getElementById('repitaSenha').value;

        const erros = [];
        
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

        if (!regexEmail.test(email)) {
            erros.push('O e-mail inserido não possui um formato válido (ex: seu.nome@dominio.com).');
        }

        if (senha !== repitaSenha) {
            erros.push('As senhas digitadas não coincidem.');
            document.getElementById('repitaSenha').value = ''; 
        }

        const errosDeSenha = [];

        const temNumero = /\d/.test(senha);
        const temMaiuscula = /[A-Z]/.test(senha);
        const temEspecial = /[^A-Za-z0-9]/.test(senha); 

        if (senha.length < 8) {
            errosDeSenha.push('Ter no mínimo 8 caracteres.');
        }
        if (!temNumero) {
            errosDeSenha.push('Conter pelo menos um número (0-9).');
        }
        if (!temMaiuscula) {
            errosDeSenha.push('Conter pelo menos uma letra maiúscula (A-Z).');
        }
        if (!temEspecial) {
            errosDeSenha.push('Conter pelo menos um caractere especial (ex: !@#$%).');
        }
        
        if (errosDeSenha.length > 0) {
            const mensagemSenha = 'A senha deve atender aos requisitos:\n- ' + errosDeSenha.join('\n- ');
            erros.push(mensagemSenha);
        }

        if (erros.length > 0) {
            
            const mensagemFinal = erros.join('\n\n'); 
            alert('Atenção, o cadastro não pode ser concluído:\n\n' + mensagemFinal);
            return;
        }
        
        const formData = {
            nome: nome,
            email: email,
            senha: senha
        };

        const jsonData = JSON.stringify(formData);

        console.log('Dados do formulário em formato JSON:');
        console.log(jsonData);

        alert('Cadastro enviado com sucesso!');
        
        
    });
});



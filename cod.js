document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obter dados do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var número = document.getElementById('número').value;

    // Criar elemento de lista
    var li = document.createElement('li');
    li.textContent = `Nome: ${nome}, Email: ${email} , Número: ${número}`

    // Adicionar à lista de usuários
    document.getElementById('listaUsuarios').appendChild(li);

    // Limpar o formulário
    document.getElementById('cadastroForm').reset();

    // Redirecionar para a página de sucesso
    window.location.href = 'sucesso.html';

    });
    


document.getElementById('quiz-form').addEventListener('submit', (e) => {
  e.preventDefault();  // Impede o envio padrão do formulário

  // Captura os valores dos inputs
  const nome = document.getElementById('nome').value;
  const peso = parseFloat(document.getElementById('peso').value).toFixed(2); // Formata o peso para 2 casas decimais
  const altura = parseFloat(document.getElementById('altura').value).toFixed(2); // Formata a altura para 2 casas decimais
  
  // Exibe o pop-up com a mensagem de confirmação
  alert("Cadastro realizado!");
});

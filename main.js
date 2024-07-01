$(document).ready(function() {
  // Adicionar tarefa ao submeter o formulário
  $('#taskForm').submit(function(event) {
      event.preventDefault(); // Prevenir o envio padrão do formulário

      var taskName = $('#taskName').val();
      if (taskName.trim() !== '') {
          $('#taskList').append('<li>' + taskName + '</li>');
          $('#taskName').val(''); // Limpar o campo de entrada
      }
  });

  // Marcar tarefa como concluída ao clicar nela
  $('#taskList').on('click', 'li', function() {
    $(this).toggleClass('completed');
});

  // Limpar o campo de entrada ao clicar no botão Cancelar
  $('#cancelButton').click(function() {
      $('#taskName').val('');
  });
});

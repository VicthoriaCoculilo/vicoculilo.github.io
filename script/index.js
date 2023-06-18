

$(document).ready(function() {
    $('#enviar-orcamento').click(function(event) {
      event.preventDefault(); // Interrompe o envio do formulário
  
      var nome = $('#nome').val();
      var email = $('#email').val();
      var telefone = $('#telefone').val();
      var empresa = $('#empresa').val();
      var area = $('#area').val();
      var redes = $('#redes').val();

      let message = 'Meu email:' + email + ' Telefone:' + telefone + ' Empresa:' + empresa + ' Area:' + area + ' Redes Sociais:' + redes + ' ';

      let msg = `https://api.whatsapp.com/send?phone=5521988153114&text=Olá meu nome é ${nome}, ${message}`;
  
      window.open(msg, '_blank');
    });
});
/**
 * @author Americo Chaquisse
 */

window.fbAsyncInit = function() {
    FB.init({
        appId      : '1713150355630832',
        xfbml      : true,
        version    : 'v2.6'
    });

    FB.getLoginStatus(function(response) {
        tentativaDeAutenticacao(response);
    });

};

//Tentar efectuar o login com o facebook
function autenticarComFb(){

    FB.login(function(response){
        tentativaDeAutenticacao(response);
    });

}

//Funcao chamada quando o utilizador tenta autenticar-se com o facebook
function tentativaDeAutenticacao(resposta){

    if (resposta.status === 'connected') {

        document.getElementById('tela_inicial').style.display = 'none';
        document.getElementById('tela_meio').style.display = 'block';

        buscarInformacaoDoUtilizador();

    } else if (resposta.status === 'not_authorized') {
        //O utilizador negou de autorizar esta app
        console.log('Você precisa efectuar o login nesta app para usa-la');
    } else {
        //O utilizador não está autenticado no facebook
        console.log('Por favor faça login no facebook');
    }

}

//Buscar o nome do utilizador e a sua imagem de perfil
function buscarInformacaoDoUtilizador(){

    FB.api('/me', function(response) {

        document.getElementById('text_nome').value = response.name;

    });

    FB.api("/me/picture?width=150",
        function (response) {
            if (response && !response.error) {

                document.getElementsByClassName('area_imagem_circular')[0].style.backgroundImage = 'url('+response.data.url+')';


            }
        }
    );

}

var todoNome, nomeDoElogio;

//Confirmar o nome e retornar o elogio
function confirmarNome(){

    todoNome = document.getElementById('text_nome').value;

    if(todoNome.length<2) {
        alert('O seu nome deve ter pelo menos duas letras');
        return;
    }


    var nome = todoNome.split(' ')[0];

    var totalVogais = 0;

    //Calcular o numero de vogais que a palavra tem
    for(var i = 0; i < nome.length; i++){

        //cActual é o nome do caracter actual da palavra
        var cActual = nome.charAt(i).toLowerCase();

        if(cActual=="a"||cActual=="e"||cActual=="i"||cActual=="o"||cActual=="u"){
            totalVogais++;
        }

    }


    switch (totalVogais){
        case 1:
            nomeDoElogio = "Simpatico";
            break;
        case 2:
            nomeDoElogio = "Carinhoso";
            break;
        case 3:
            nomeDoElogio = "Amigavel";
            break;
        case 4:
            nomeDoElogio = "Atencioso";
            break;
        case 5:
            nomeDoElogio = "Inteligente";
            break;
        default:
            nomeDoElogio = "Bonito";
    }

    //Mostrar a tela 3
    document.getElementById('tela_meio').style.display = 'none';
    document.getElementById('tela_partilhar').style.display = 'block';

    //Injectar o HTML
    document.getElementById('novo_nome').innerHTML = todoNome;
    document.getElementById('elogio').innerHTML = nomeDoElogio;


}

//partilhar no facebook
function partilharNoFacebook(){



}

//Mostrar a segunda tela, para o utilizador modificar o nome
function tentarNovamente(){
    document.getElementById('tela_partilhar').style.display = 'none';
    document.getElementById('tela_meio').style.display = 'block';
}

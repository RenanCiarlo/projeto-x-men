// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem,devemos seleciona-lo 
//  passo 1 - pegar os personagens no Js pra poder verificar quando o usuario passar o mouse em cima de um deles.

const personagens = document.querySelectorAll('.personagem');

// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) =>{
    personagem.addEventListener('mouseenter',()=>{
        //ajuste para o usuário que abrir com celular
        if(window.innerWidth<450){
            window.scrollTo({top:0,behavior:'smooth'});
        }
     removerSelecaoDoPersonagem();

     personagem.classList.add('selecionado');
    
     alterarImagemPersonagemSelecionado(personagem);

     alterarNomePersonagemSelecionado(personagem);
   
     alterarDescricaoPersonagem(personagem);
  })              
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    //passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    console.log(idPersonagem);
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

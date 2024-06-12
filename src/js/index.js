/*
Objetivo 1 - quando passar o mouse em cima do personagem temos que:

- Colocar a classe selelcionado no personagem que passmos o mouse em cima para adicionar a animação.
- Retirar a classe selecionado do personagem que está selecionado

Objetivo 2 - Quando passar o mouse em cima do personagem na listagem, trocar a imagem e nome do personagem grande

- Alterar a imagem do jogador 1
- Alterar o nome do jogador 1
*/

const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;
       
        if(idSelecionado === 'ultron') return;


        const personagemSelecionado = document.querySelector('.selecionado')

        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1');

        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`

        const nomeJogador1 = document.getElementById('nome-jogador-1')

        const nomeSelecionad = personagem.getAttribute('data-name')

        nomeJogador1.innerHTML = nomeSelecionad;
    })
})


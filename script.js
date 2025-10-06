
// --- PASSO 1: Selecionar os elementos do HTML ---
// Pegando o botão e o "palco" que criamos, usando os IDs
const botaoGerador = document.getElementById('botao-gerador');
const palco = document.getElementById('palco-batata');

// --- PASSO 2: Criar nossa lista de batatas ---
// Um array (uma lista) com o nome de todas as imagens
const imagensDeBatata = [
    'batata_prehistorica.png',
    'batata_cowboy.png',
    'batata_astronauta.png',
    'batata_samurai.png',
    'batata_medieval.png',
    'batata_grega.png'
];

// --- PASSO 3: Criar a função que faz a mágica ---
function gerarNovaBatata() {
    // Sorteia um número aleatório entre 0 e o tamanho da nossa lista
    const indiceAleatorio = Math.floor(Math.random() * imagensDeBatata.length);

    // Seleciona o nome do arquivo de imagem sorteado
    const imagemSorteada = imagensDeBatata[indiceAleatorio];

    // Cria o HTML da nova imagem
    const novoHtmlDaImagem = `<img src="${imagemSorteada}" width="300" alt="Batata gerada aleatoriamente">`;

    // Atualiza o nosso "palco" com a nova imagem
    palco.innerHTML = novoHtmlDaImagem;
}

// --- PASSO 4: Conectar o botão à nossa função ---
// Dizendo ao botão: "quando alguém clicar em você, execute a função gerarNovaBatata"
botaoGerador.addEventListener('click', gerarNovaBatata);


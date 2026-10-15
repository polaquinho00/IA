const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como e em qual local do arquivo HTML, o documento javascript (script.js) deve ser lincado?",
        alternativas: [
            {
                texto: "inserindo o código <script src = 'script.js' > </script>, A importação deve ser feita antes da tag de fechamento </body>",
                afirmacao: "A transcrição especifica exatamente esse passo logo no início: "antes da tag de fechamento </body>... vamos digitar script:src e definir o atributo src como o nome do documento script.js"."
            },
            {
                texto: "O código <script src="script.js"></script> deve ser colocado logo no início da tag <head>.",
                afirmacao: "Se o script for carregado no <head> (sem o uso do atributo defer), o navegador tentará executar o JavaScript antes de ler o conteúdo da página. Quando o código tentar procurar as caixas (como .caixa-principal), elas ainda não existirão na tela, resultando em erro (elemento não encontrado)."
            }
        ]
    },
    {
        enunciado: "Qual comando do JavaScript é utilizado para selecionar os elementos HTML que possuem classes, como a .caixa-principal?",
        alternativas: [
            {
                texto: " O comando document.querySelector().",
                afirmacao: " O texto explica que a conexão com os elementos HTML é feita através do DOM usando document.querySelector(".caixa-principal"), destacando a necessidade do ponto antes do nome para referenciar uma classe."
            },
            {
                texto: "O comando document.getElementById(".caixa-principal").",
                afirmacao: "O método getElementById serve exclusivamente para buscar elementos pelo atributo id, e não aceita o uso do ponto (.). Tentar buscar uma classe usando esse comando fará com que o JavaScript não encontre o elemento.."
            }
        ]
    },
    {
        enunciado: "Qual é o motivo apresentado na aula para utilizar const ao declarar elementos importados do HTML e a lista de perguntas?",
        alternativas: [
            {
                texto: "O uso de const (constante) é escolhido porque os valores dessas variáveis não sofrerão alterações ao longo do código.",
                afirmacao: "A aula afirma diretamente no trecho sobre criação de cadastro: "utilizamos uma constante (const), porque este valor não vai mudar mais.""
            },
            {
                texto: "Usa-se const porque isso faz o JavaScript carregar e executar mais rápido no navegador.",
                afirmacao: "A palavra-chave const não tem relação com ganho de velocidade ou performance. Ela serve exclusivamente para definir regras lógicas de escopo e evitar que o valor ou a referência da variável seja alterada acidentalmente durante o código."
            }
        ]
    },
    {
        enunciado: "Como as perguntas são estruturadas dentro do código JavaScript para armazenar tanto o texto principal quanto as opções de resposta?"
        alternativas: [
            {
                texto: "Elas são estruturadas como um array (lista) de objetos. Cada objeto é delimitado por chaves {} e contém duas propriedades: enunciado (uma string com a pergunta) e alternativas (uma lista/array com as opções). Os objetos são separados por vírgula.",
                afirmacao: "O instrutor detalha que, como as perguntas possuem os mesmos atributos, elas devem ser tratadas como objetos (usando {}) dentro de uma lista (usando []), e lembra que "um array é separado por vírgula, então, precisamos colocar uma vírgula entre um objeto e outro".
"
            },
            {
                texto: "Elas são estruturadas criando variáveis soltas para cada parte, como const pergunta1 = "texto"; e const alternativa1 = "texto";.",
                afirmacao: "Embora funcione para uma única pergunta, criar dezenas de variáveis soltas torna o código desorganizado e muito difícil de manter. Sem usar um Array de Objetos, você perde a capacidade de automatizar a exibição das perguntas (usando loops, por exemplo), e seria inviável criar um jogo longo."
            }
        ]
    },
    {
        enunciado: "Como deve ser escrita a string dentro do comando querySelector para selecionar o elemento HTML que possui a classe caixa-principal?",
        alternativas: [
            {
                texto: "A string deve ser escrita com um ponto antes do nome da classe, no formato ".caixa-principal".",
                afirmacao: "O método querySelector lê os elementos usando a mesma regra de seletores do CSS. No CSS, o ponto (.) é o símbolo obrigatório que indica ao navegador que ele deve procurar especificamente por um atributo class."
            },
            {
                texto: "A string deve ser escrita apenas com o nome da classe, sem nenhum símbolo, no formato "caixa-principal".",
                afirmacao: "Se você não usar o ponto, o querySelector vai achar que você está procurando por uma tag HTML literal (como ele faz quando busca "div", "h1" ou "p"). Como não existe uma tag <caixa-principal> no seu HTML, o JavaScript não encontrará o elemento, retornará vazio (null) e o resto do seu código vai parar de funcionar."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "RELATÓRIO DE MISSÃO:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

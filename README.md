# Instruções
### Instruções iniciais
  - Dar yarn install para instalar as dependências.
  - Para ligar o backend, só escrever no terminal: yarn server.
  - No backend, tem 2 itens principais: transações e categorias, utilize-as.

#### Ordem opcional das primeiras instruções:

1 - Definir as rotas principais da aplicação

- Home
- Transactions (listagem de transações) -> transactions
- Create (página de criar a transação) -> transactions/create
- Edit (página de editar a transação, igual a de criar) -> transactions/edit/id

2 - Definir estilos globais e tema da aplicação (cores, espaçamentos caso deseja, etc, pode falar comigo)

3 - Colocar a aplicação em volta do contexto principal (TransactionContext) para ter acesso as funções na aplicação toda.
- Para utilizar o contexto, deve-se utilizar o hook criado no arquivo de contexto: useTransaction.
	- Exemplo: const { getTransactions, transactions, createTransaction } = useTransaction()

4 - Criação dos components principais:

- Componente de sidebar (vai estar presente em todas as telas)
- Componente de Wrapper (o fundo roxo que vai estar presente em todas as telas)
- Além disso, antes de começar a aplicação, recomendo analisar bem os principais itens que se repetem para focar na criação de componentes reutilizáveis, como por exemplo:
	- Os itens de formulário vão ser utilizados em 2 páginas diferentes
	- A tabela (já foi criada a pasta do componente) também vai ser utilizada em 2 páginas diferentes.
	- Componente de Heading (presente em todas as páginas, posso te ajudar com isso).

#### Começando a aplicação

O início vou deixar para você decidir como quer fazer. Ou seja, caso queira começar pela estilização ou funcionalidades. EU recomendo a estilização primeiro, por que acredito que fica mais intuitivo e simples fazer as funcionalidades em um projeto já "feito".

O que você pode fazer é criar uma página, fazer as funcionalidades, depois ir pra outra.

1 - Context API

- As funções presentes no contexto da aplicação devem ter os mesmos nomes que coloquei lá e é nessas funções que vai ocorrer a manipulação de estado e chamadas na api.
	- Por exemplo: na função getTransactions, você deve fazer uma chamada a api e adicionar no estado transactions.
	- A função createTransaction deve fazer uma chamada a api utilizando o método POST e adicionando no estado principal a transação que é retornada pelada api.

2 - Página Home

- Ná página Home, existe 2 components principais: 
	- Os resumos (Entradas, saídas e total):
		- A lógica dos resumos, é utilizando os métodos filter e reduce.
		- Exemplo: para pegar as entradas, você deve filtrar os itens que tem o tipo "deposit", e depois transformar os valores dos itens filtrados em um número só utilizando o método reduce.   
	- Tabela:
		- Fazer um map nas transações e adicionar um TR para cada item na tabela. 
			- Detalhe: na página Home, deve-se omitir as "Ações" (dica: mostrar o item apenas caso tenha uma condição: pode ser uma props) e só deve mostrar no máximo 5 itens com um link embaixo direcionando para ver o resto das transações (utilizar método slice).

3 - Página Transactions

- Criação do componente de Link (o botão de criar transação), deve levar para a página de criar um novo item.
- Logo embaixo, possui 2 componentes de filtro, mas esses 2 eu recomendo que você deixe para o final e consulte comigo quando for fazer porque tenho indicação de conteúdos bons para esse tipo de componente.
- Tabela:
	- Mesmo esquema da Home, mas deve mostrar todas as transações e deve mostrar a parte de "Ações", podendo assim editar e deletar os itens.
	- Para editar e deletar, só pegar as funções do hook useTransaction, e colocar no onClick.
		- Por exemplo: `const { deleteTransaction } = useTransaction()`   
		- E assim deletar o item, e o item de editar deve-se estar em torno de um Link que leva para a página de editar com o id da transação.

4 - Página de Create e Edit

- Nessas duas páginas, a idéia é a mesma que a gente já conversou, vou deixar como desafio você tentar fazer sózinho, mas a idéia é a mesma:
	- Criar o estado do formulário
	- Criar uma função responsável pelo submit
	- Fazer as validações
	- Fazer a ação necessária (createTransaction, updateTransaction) caso tenha passado na validação redirecionando-o para a página de transações e caso não mande um toast pro usuário.
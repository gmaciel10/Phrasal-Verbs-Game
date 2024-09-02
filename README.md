# Phrasal-Verbs-Game
<img src="https://github.com/gmaciel10/Phrasal-Verbs-Game/blob/main/A_vibrant_and_educational_header_image_for_a_phras.png?raw=true" alt="Texto Alternativo">

![game_pv](https://github.com/user-attachments/assets/85092b61-3acd-40b9-ab75-2f471c976148)


```markdown
# Jogo de Phrasal Verbs

Bem-vindo ao projeto do Jogo de Phrasal Verbs! Este jogo educativo ajuda a praticar e aprender phrasal verbs de forma interativa e divertida.

## Funcionalidades

- **Iniciar Jogo**: Começa o jogo e exibe a primeira pergunta.
- **Continuar**: Avança para a próxima pergunta após selecionar todas as respostas corretas.
- **Resetar Jogo**: Reinicia o jogo mantendo a mesma sessão.
- **Reiniciar Aplicação**: Limpa todo o progresso e reinicia o jogo desde o início.

## Importância de Rodar o Projeto em um Servidor Local

Para garantir o funcionamento adequado do projeto, especialmente no carregamento do arquivo JSON e execução do código JavaScript, é crucial rodar o projeto em um servidor local. Abrir diretamente o arquivo HTML no navegador pode causar problemas devido às restrições de segurança.

### Como Rodar o Projeto em um Servidor Local

#### Usando Live Server no VS Code

1. **Instale o Live Server:**
   - Abra o VS Code.
   - Acesse a seção de extensões (ícone de quadrado na barra lateral esquerda).
   - Procure por "Live Server" e instale a extensão desenvolvida por Ritwick Dey.

2. **Inicie o Live Server:**
   - Abra o projeto no VS Code.
   - Clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server" ou use o atalho `Alt+L, Alt+O`.

3. **Acesse o Projeto:**
   - O projeto será aberto automaticamente no seu navegador padrão.

#### Usando Python

Se você tem Python instalado, pode iniciar um servidor local com o seguinte comando:

- **Para Python 3.x:**

  ```bash
  python -m http.server 8000
  ```

- **Para Python 2.x:**

  ```bash
  python -m SimpleHTTPServer 8000
  ```

   Depois, abra seu navegador e vá para `http://localhost:8000`.

#### Usando Node.js com http-server

1. **Instale http-server:**
   - Abra um terminal e execute:

     ```bash
     npm install -g http-server
     ```

2. **Inicie o Servidor:**
   - Navegue até o diretório do projeto e execute:

     ```bash
     http-server
     ```

3. **Acesse o Projeto:**
   - Abra seu navegador e vá para `http://localhost:8080`.

## Estrutura do Projeto

- **`index.html`**: Arquivo HTML principal com a estrutura e elementos da interface do jogo.
- **`styles.css`**: Arquivo CSS que estiliza o jogo.
- **`index.js`**: Arquivo JavaScript com a lógica do jogo e manipulação da interação com o usuário.
- **`base.json`**: Arquivo JSON contendo os dados dos phrasal verbs.

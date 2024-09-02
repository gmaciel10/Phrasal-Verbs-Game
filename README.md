# Phrasal-Verbs-Game
<img src="https://github.com/gmaciel10/Phrasal-Verbs-Game/blob/main/A_vibrant_and_educational_header_image_for_a_phras.png?raw=true" alt="Texto Alternativo">

![game_pv](https://github.com/user-attachments/assets/85092b61-3acd-40b9-ab75-2f471c976148)

---

## Jogo de Phrasal Verbs

Bem-vindo ao **Jogo de Phrasal Verbs**! Este é um jogo educativo projetado para ajudar estudantes e entusiastas da língua inglesa a praticar e aprender phrasal verbs de maneira interativa e envolvente. Desenvolvido com HTML, CSS e JavaScript, o jogo combina uma interface amigável com uma mecânica de jogo estimulante, proporcionando uma experiência de aprendizado eficaz.

### O que é um Phrasal Verb?

Phrasal verbs são combinações de verbos com preposições ou advérbios que criam um novo significado. Por exemplo, "give up" (desistir) ou "look after" (cuidar de). São uma parte essencial do inglês falado e escrito, e entender como usá-los corretamente pode melhorar significativamente sua fluência.

### Recursos Principais

- **Jogabilidade Interativa:** Responda perguntas sobre phrasal verbs e seus significados com base em opções fornecidas.
- **Sistema de Pontuação:** Acompanhe seus acertos e erros enquanto joga.
- **Progresso Salvo:** O jogo salva seu progresso usando `sessionStorage`, permitindo que você continue de onde parou.
- **Botões de Controle:** Inclui botões para iniciar o jogo, continuar a partir da última pergunta, e reiniciar o jogo ou a aplicação conforme necessário.

### Como Jogar

1. **Responder Perguntas:** Selecione os significados corretos para os phrasal verbs apresentados.
2. **Continuar ou Reiniciar:** Use os botões "Continuar" para prosseguir para a próxima pergunta ou "Reiniciar Jogo" para começar novamente. O botão "Reiniciar Aplicação" redefine todo o progresso.

### Configuração do Ambiente

#### Executando com um Servidor Local

Para garantir que o jogo funcione corretamente, especialmente ao lidar com arquivos JavaScript e JSON, é essencial executar o projeto em um servidor local. Aqui estão algumas maneiras de configurar um servidor local:

##### Usando Python (versão 3.x):

```bash
# Navegue até o diretório do projeto
cd caminho/para/seu/projeto

# Execute o servidor local
python -m http.server
```

##### Usando Python (versão 2.x):

```bash
# Navegue até o diretório do projeto
cd caminho/para/seu/projeto

# Execute o servidor local
python -m SimpleHTTPServer
```

##### Usando Node.js com `http-server`:

```bash
# Instale http-server globalmente se ainda não tiver
npm install -g http-server

# Navegue até o diretório do projeto
cd caminho/para/seu/projeto

# Inicie o servidor local
http-server
```

### Observações

- **Importância de um Servidor Local:** Muitos navegadores têm restrições sobre o acesso a arquivos locais, o que pode causar problemas ao tentar carregar arquivos JSON ou scripts JavaScript diretamente. Usar um servidor local evita esses problemas e garante que seu projeto funcione conforme o esperado.
- **Compatibilidade:** O projeto foi testado em navegadores modernos e deve funcionar na maioria dos navegadores atuais.

### Contribuições

Contribuições são bem-vindas! Se você encontrar bugs ou tiver sugestões para melhorias, sinta-se à vontade para abrir um **issue** ou enviar um **pull request**.

### Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

Essa descrição fornece uma visão geral detalhada do projeto, instruções claras para configurar e executar o jogo, e informações adicionais sobre a importância de usar um servidor local.

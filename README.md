# Para rodar o projeto : 
- `git clone https://github.com/lucassgonz/google-tts.git`
- `cd src`
- `npm install `
- Acesse a Google Cloud Platform, crie um projeto, ativa a API Google Text-To-Speech, configure como achar melhor.
- Crie suas credenciais do projeto com as permissões necessárias para fazer as requisições. Salve o arquivo .json e substitua no /src/service_account.json
- Execute no terminal o comando `export GOOGLE_APPLICATION_CREDENTIALS="/src/service_account.json"`
- Execute o comando `node server.js` em um terminal
- Execute o comando `ngrok http 3000` em outro terminal
- Pegue a url disponibilizada pelo ngrok e coloque o /synthesize no final
- Faça o POST para essa URL com um body similar a este : `{
  "text": "Hello, this is a test!"
}`



*Atente-se para trocar as informações onde for necessário*

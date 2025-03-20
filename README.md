# Para rodar o projeto : 
- `git clone https://github.com/lucassgonz/google-tts.git`
- `cd src`
- `npm install `
- Execute no terminal o comando `export GOOGLE_APPLICATION_CREDENTIALS="/caminho/para/o/arquivo/service-account.json"`
- Execute o comando `node server.js` em um terminal
- Execute o comando `ngrok http 3000` em outro terminal
- Pegue a url disponibilizada pelo ngrok e coloque o /synthesize no final
- Faça o POST para essa URL com um body similar a este : `{
  "text": "Hello, this is a test!"
}`



*Atente-se para trocar as informações onde for necessário*

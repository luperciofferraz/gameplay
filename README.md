# gameplay

Projeto em React Native desenvolvido durante o NLW Together da RocketSeat (https://rocketseat.com.br/) realizado em Junho de 2021.

O projeto é um APP para te ajudar a organizar seus jogos com seus amigos, sendo possível:

- Agendar um jogo com seus amigos
- Listar os jogos agendados
- Consultar os amigos de cada jogo
- Enviar o convite do jogo com seus amigos

As principais teconlogias utilizadas:

- Expo para facilitar o desenvolvimento e acessar a bibliotecas nativas do celular
- Outh2 para fazer o Login Social no Discord
- Gravação de informações de Login no Storage do Celular
- Typescript para tipagem de variáveis e objetos

Algumas das principais bibliotecas utilizadas:

- Expo 
- React Native Assync Storage
- React Navigation
- Axios

É necesário realizar uma configuração prévia no Discord para fazer o Login.

1) Criar um login no Discord
2) Criar um projeto utilizando o link https://discord.com/developers/applications
3) Em Settings -> Oauth2 -> Redirect , incluir o link https://auth.expo.io/Nome_do_Projeto, onde Nome_do_Projeto é o nome do seu projeto.
4) Escolher os dados que você irá acessar em Scopes: Identity, Email, Connections e Guilds
5) Informar alguns dados dessa tela no arquivo .env:
    - REDIRECT_URI=https://auth.expo.io/Nome_Do_Projeto
    - SCOPE=identify%20connections%20email%20guilds
    - RESPONSE_TYPE=token
    - CLIENT_ID=SeuClientId (obtido em https://discord.com/developers/applications)
    - CDN_IMAGE=https://cdn.discordapp.com

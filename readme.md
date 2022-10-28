# Desafio de Integração

Essa aplicação foi criada com o intuito de salvar contatos das planilhas do Google Sheets na plataforma do HubSpot

## Instalação

Para instalar os pacotes do projeto, utilize o seguinte comando na pasta raiz:
```bash
npm install OU yarn
```

## Inicialização
Para inicar o projeto, na pasta raiz, utilizar o comando:
```bash
npm run server:start  yarn server:start
```
OU
```bash
yarn server:start
```
OBS: A aplicação estará rodando em: http://localhost:3000


## Funcionamento
Precisamos informas 3 informações para efetuar uma requisição, são elas:

 - Chave api googleapis;
 - ID planilha GoogleSheets;
 - Token plataforma HubSpot;


Para realizar o teste, você pode usar ferramentes como [postman](https://www.postman.com/downloads/) ou [insominia](https://insomnia.rest/download)

OBS: As informações devem ser passadas no Body da requisição, EX:
```bash
{
    "googleApiKey": "*SUA_CHAVE_API_GOOGLE*",
    "sheetId": "ID_PLANILHA_GOOGLE_SHEETS",
    "hubSpotToken": "TOKEN_PLATAFORMA_HUBSPOT"
}
```

## Como conseguir as informações necessárias para efetuar a requisição?

## Chave API Google Api

Guia para a criação da chave api google: [GoogleApiKey](https://support.google.com/googleapi/answer/6158862?hl=en)

## ID planilha Google Sheets

O ID da planilha pode ser encontrado na url da mesma. EX:
```bash
https://docs.google.com/spreadsheets/d/{ID_PLANILHA}/edit#gid=0
```

Para que o contato seja salvo corretamente, a planilha deve ter os seguintes campos:

- Nome completo
- Email
- Telefone
- Nome da empresa
- Website

Caso você não deseje criar as panilhas, segue 3 para serem usadas como exemplo:

- [planilha1](https://docs.google.com/spreadsheets/d/1YgvbwceX-Fbl6q5XtUQ-HWHaw37XxFsIsWkKCZV9JXE/edit#gid=0) 
- [planilha2](https://docs.google.com/spreadsheets/d/18cERsZkVOienhlYrqcunleIddT73SWTzuUH8i_xRNCM/edit#gid=0)
- [planilha3](https://docs.google.com/spreadsheets/d/1iMRJeDjX9LXCtw2Ys4h17wv8jryFCC1HfxHr06jjDqw/edit#gid=0)


OBS: Caso você crie sua própria planilha, deve seguir a sequência dos campos conforme foi dito anteriormente, e também deve deixar a planilha em modo público, para que a aplicação consiga ter acesso a ela.

## Token HubSpot

Guia para a criação do token HubSpot: [HubSpotToken](https://knowledge.hubspot.com/pt/integrations/how-do-i-get-my-hubspot-api-key#:~:text=Na%20sua%20conta%20da%20HubSpot,em%20Gerar%20chave%20de%20API.)

OBS: O seu aplicativo privado deve ter o escopo "crm.objects.contacts.read"
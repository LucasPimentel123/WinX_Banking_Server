# WinX Banking Server

A aplicação WinX banking é um projeto mobile que visa utilizar o open finance para que se tenha um extrato de forma única de acordo com todas as contas bancárias do usuário. O projeto foi desenvolvido durante o Hackaton do BRB na Campus Party e suporta várias evoluções e ampliações de escopo.

## Como Rodar

Para realização desse desafio, virtualizamos a api disponibilizada pela equipe do Campus Party que pode ser verificada no seguinte link: https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/17367659

Para realização dessa virtualização, foi utilizado o mockoon em que o environment para importar na ferramenta pode ser encontrado na pasta ./mockoon/mock.json. O guia de importação desse environment no mac, pode ser verificado na imagem abaixo.


<img width="431" alt="Como importar environment" src="https://user-images.githubusercontent.com/54643342/230660476-047bd0a2-6283-4003-aadc-acdea1df38da.png">

Após isso basta startar o mockoon no seguinte botão:

<img width="181" alt="Captura de Tela 2023-04-07 às 15 45 20" src="https://user-images.githubusercontent.com/54643342/230661289-5f2c343d-ab6b-4587-8529-869b96b2b994.png">

Após o clone do repositório, é necessário a criação de um .env para a correta inicialização de toda a aplicação, exemplos de variavéis pro .env podem ser encontradas a seguir:

É necessario se atentar à variável LOCAL_IP, pelo fato da nossa aplicação estar dockerizada, o container não consegue bater em localhost pelo fato do mockoon não estar na mesma network. Visto isso é necessário a atribuição do ip que está conectado a essa variável.
```
NODE_ENV='development'

# POSTGREE
DB_APP_HOST=db_app
DB_APP_USER=winx-admin
DB_APP_PASS= winxadmin128734680912
DB_APP_NAME=appDb
SALT_ROUNDS=10
LOCAL_IP=192.168.8.168
```
Feito isso, basta subir o compose em que está dockerizado a aplicacao e o database em postgres. Para isso basta executar o comando e estará disponivel a api:

```
docker-compose up
```
## Interface Gráfica

A aplicação WinX Banking é uma aplicação mobile e o frontend da aplicação junto de mais instruções de como rodar o projeto podem ser encontrados no seguinte [repositório](https://github.com/VitorLamego/WinX_Banking).

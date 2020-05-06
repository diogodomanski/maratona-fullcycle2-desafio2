# Maratona Fullcyle 2.0 :: Desafio 2

Resolução do desafio 1 da Maratona Fullcycle 2.0.

## Requisitos
* Yarn (ou NPM)
* NodeJS
* Docker
* Git

## Instalação

Faça o clone desse repositório na sua máquina

```bash
$ git clone https://github.com/diogodomanski/maratona-fullcycle2-desafio2
```

Acesse a pasta do projeto

```bash
$ cd maratona-fullcycle2-desafio2
```

## Rodando localmente

```bash
$ yarn run start
```

> `npm run start` funciona também

## Gerando a imagem Docker (opcional)
Esse passo deve ser executado caso você queira gerar sua própria imagem desse projeto.

```bash
$ docker build --rm -t <nome_da_imagem> .
```

> Exemplo de `<nome_da_imagem>`: diogodomanski/maratona-fullcycle2-desafio2

## Rodando a imagem

```bash
$ docker run -p 3000:3000 <nome_da imagem>
```

> Se quiser a usar a imagem já disponível no dockerhub, use
[diogodomanski/maratona-fullcycle2-desafio1](https://hub.docker.com/repository/docker/diogodomanski/maratona-fullcycle2-desafio1) como `<nome_da_imagem>`

## Subindo a imagem para o Docker Hub
Esse passo só é necessário caso você queira suber a sua imagem própria desse projeto para o Docker Hub.

> É necessário que você tenha criado uma conta no [Docker Hub](https://hub.docker.com)

Efetue o login no dockerhub

```bash
$ docker login -u <seu_usuario_no_dockerhub>
```

Suba a imagem para o Docker Hub
```bash
$ docker push <nome_do_pacote>
```

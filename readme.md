# Task Runners 
## Pré-processando HTML, JavaScript e CSS

O objetivo desse projeto é mostrar de forma objetiva o que são e como trabalhar com Task Runners, que problemas eles resolvem e facilitar com uma pequena aplicação exemplo como dar os passos iniciais.

### Referências

* [Node.js](https://nodejs.org/en/)
* [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
* [Grunt](https://gruntjs.com/getting-started)

### Tópicos

1. Por que utilizar Task Runners?
2. Configurando o ambiente e conhecendo alguns dos Task Runners mais utilizados
3. Testando tasks com Grunt e Gulp

## 1. Porque utilizar Task Runners?

* Automatização de atividades repetitivas
* Ganho de produtividade
* Aplicações com ganho de desempenho
* Possibilita a utilização de pré-processadores para HTML, JavaScript, CSS e etc...
* Otimização do fluxo de trabalho
* Deploy automatizado
* E muito mais...

## 2. Conhecendo alguns dos Task Runners mais utilizados e configurando o ambiente 

### Task Runners mais utilizados

* Gulp
* NPM
* Grunt
* Broccoli

### Configurando o ambiente

Instalação os módulos globais de gulp e grunt

```bash
npm install gulp-cli grunt-cli -g
```

Inicialização do projeto

```bash
npm init -y
```

Instalação do gulp e do grunt local (no projeto)

```bash
npm install gulp grunt --save-dev
```

Instalação de plugins do gulp

```bash
npm install gulp-pug gulp-sass gulp-uglify gulp-concat --save-dev
```

Instalação de plugins do grunt

```bash
npm install grunt-contrib-pug grunt-sass grunt-contrib-uglify --save-dev
```

## 3. Testando tasks com Gulp e Grunt

```bash
cd app
gulp
```

```bash
cd app
grunt
```
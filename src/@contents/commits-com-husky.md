---
title: Commits com husky - Garantindo a qualidade
summary: Aprenda como aumentar a qualidade dos seus commits utilizando o husky, uma ferramente consolidada no mercado e utilizada por grandes empresas.
thumbnail: /images/contents/commits-com-husky/thumbnail.jpg
createdAt: "2024-11-25:16:26:00"
---

## O que é o Husky ?

Em resumo o [Husky](https://typicode.github.io/husky/) é uma ferramenta de automação de tarefas, onde suas principais funcionalidades é fazer uso de seus hooks `pre-commit` e `pre-push` para rodar scripts de acordo com o momento do seu commit ou push; seja antes do commit ser finalizado (pre-commit) ou antes de você subir aquela atualização para o repositório remoto (pre-push), por exemplo: você pode executar o [Eslint](https://eslint.org/) para verificar erros no seu código ou até mesmo rodar testes automatizados usando algum deles. Beleza, mas como podemos usar o Husky no nosso projeto ? Vamos ao código 👌

## Configurando o Husky

Antes de seguir, abra o seu terminal e execute o seguinte comando:

```console
git init
```
Com isso feito agora podemos instalar o Husky no nosso projeto, pois é obrigatório ter o [Git](https://git-scm.com/) inicializado. E pra instalar o Husky é bem simples, rode o seguinte comando no seu terminal:

```console
npx husky-init && npm install
```

## O que o comando fez ?

O comando que executamos ele basicamente fez a instalação do Husky, colocou um script `prepare` no nosso `package.json` e o mais importante, criou uma pasta chamada `.husky` que contém um arquivo chamado
`pre-commit`, se você abrir esse arquivo verá que dentro dele tem um comando de exemplo `npm test`, ai que está o pulo do gato, quando você fizer algum commit esse comando será automaticamente executado sem que você precise fazer mais nada 🤯

E agora vamos configurar o Eslint no nosso projeto e executar ele com o Husky, é bem simples fazer isso:

## Instalando o Eslint

Vamos começar instalando um pacote que criei do Eslint que já traz toda a configuração pronta. Abra seu terminal e execute:

```console
npm install @as-code/eslint-config --dev
```

agora crie um arquivo na raiz do seu projeto chamado
`.eslintrc.json` (caso não exista) e cole dentro dele o seguinte código:

```json
{
  "extends": "@as-code/eslint-config/react"
}
```

## Executando Husky e Eslint

Feito isso, pra finalizar, instale a [extensão Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) no seu VSCode para ver os erros no seu código:

![Eslint no VSCode](/images/contents/commits-com-husky/eslint-extension.jpg)

## Conclusão

Basta subtituir o comando `npm test` do arquivo `pre-commit` por `npm run lint` e está feito! Agora quando você fizer seu próximo commit o Husky vai executar o Eslint, se tiver erros no seu código o Husky não vai deixar seguir com o commit até que você corrija os problemas no seu código.

## Bônus

COrrija os erros automaticamente com a flag `--fix`, basta adicionar ao seus `scripts` no arquivo `package.json`

```json
{
  // ...
  "scripts": "eslint src --ext ts,tsx --fix"
  // ...
}
```

## Referências

- [Husky](https://typicode.github.io/husky/)
- [Eslint](https://eslint.org/)
- [Commits de qualidade com Husky e Eslint](https://www.linkedin.com/posts/avilyre_commits-de-qualidade-com-husky-e-eslint-activity-7122564849926086656-AHs-?utm_source=share&utm_medium=member_desktop)
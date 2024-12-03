---
title: Mais Performance com Importação Dinâmica
summary: A sua interface carrega componentes pesados sem que haja um uso pra eles naquele momento ? então você precisa melhorar isso.
thumbnail: /images/contents/performance-importacao-dinamica/thumbnail.jpg
createdAt: "2024-12-02:18:03:00"
---

## O problema

Problemas de performance em aplicações de médio a grande porte é algo muito comum, principalmente quando a interface é composta por componentes mais pesados que não tem utilidade naquele primeiro momento. vamos concordar que *"se a informação não está sendo exibida em tela, por que ela está sendo carregada ?"*

Por mais simples que seja, isso é muito comum de acontecer, você simplesmente carrega seu componente de formulário, gráfico etc, dentro do componente da interface que será carregada em tela. Quando você faz a importação de um componente e adiciona ele na tela que logo será exibida, automaticamente ele será importado, carregado e exibido; AINDA que você use uma estratégia como:

```jsx
{isMyComponentVisible && <MyComponent />}
```

Nesse caso, ele não será exibido (caso a condição seja `false`), porém ele será importado e carregado. Isso pode trazer muitos problemas a medida que a sua aplicação cresce. Também lembre-se que a máquina que você usa pra desenvolver, muitas vezes é superior a do usuário final.

![exemplo dos elementos pré-carregados](/images/contents/performance-importacao-dinamica/example-01.png)

## Importação Dinâmica

Beleza, mas como posso contornar isso ? Podemos resolver esse problema de várias maneiras e uma delas é o assunto desse post: **dynamic imports**. você faz o carregamento do componente através de uma ação na interface o que melhora e muito a performance. lembre-se o ideal é **usar apenas em componentes que possuem muitas informações e que prejudicam a performance**. Agora vamos ver na prática como isso funciona:

Teremos 2 componentes, `Graphics.tsx` que é nosso componente "imaginário" que seria a representação de componentes mais pesados:

```jsx
const Graphics = () => {
  return (
    <div>
      <Graphic01 />
      <Graphic02 />
    </div>
  );
}
```

E também `DynamicImport.tsx` que esse sim será o componente responsável por fazer toda a "mágica" da importação dinâmica:

```jsx
const DynamicImport = ({
  importIt,
  children,
  renderIn
}: DynamicImportProps) => {
  const [DynamicComponent, setDynamicComponent] =
    useState<ComponentType | null>(null);

  const onClick = () => {
    import(importIt)
      .then((module) => setDynamicComponent(() => module.default))
      .catch((error) =>
        console.error(
          "Erro ao importar o componente:",
          error
        )
      );
  };

  return (
    <Fragment>
      {React.cloneElement(children, { onClick })}
      {DynamicComponent &&
        renderIn.current &&
        ReactDOM.createPortal(
          <Suspense fallback={<div>💬 Carregando...</div>}>
            <DynamicComponent />
          </Suspense>,
          renderIn.current
        )}
    </Fragment>
  );
};
```

Antes de coloca-lo em prática, vamos entender como ele é feito:
- `props` - `importIt` é o componente que será importado dinamicamente, pode ser qualquer componente desde que seja exportado como default. `renderIn` será onde o componente importado vai ser renderizado (como children). Por fim, `children`, você pode passar como propriedade ou usar o próprio DynamicImport como wrapper por volta do botão e ao clicar nesse elemento encapsulado acontecerá o carregamento do componente.
- `onClick` - Faz o carregamento do componente como **Promise**, e ao resolver adiciona ao estado `DynamicComponent`.
- `return` - Vamos dividir o que é retornado em algumas partes pra ter um melhor entendimento: **1** - Renderiza o componente `children` usando o `cloneElement` que será o trigger pra carregar o componente dinâmico. **2** - Verifica se o estado `DynamicComponent` é válido e se o local onde será renderizado existe. **3** - Usamos o `createPortal` para renderizar nosso componente carregado onde quer que seja esse container alvo passando a `ref` desse elemento alvo pra ele saber onde renderizar.

## Na Prática

O que faremos é: importar o componente `Graphics.tsx` através de um `click` no `button`. Pra isso vamos encapsular o `button` com o componente `DynamicImport` e passar as propriedades `importIt` (`Graphics.tsx`) e render (onde vai renderizar), vamos ver no código como fica:


```jsx
const divContainer = useRef<HTMLDivElement>(null)

<DynamicImport
  importIt="./Graphics"
  renderIn={divContainer}
>
  <button>Se clicar vou importar</button>
</DynamicImport>

<div ref={divContainer}>
  Vai ser importado aqui dentro
</div>
```
É isso! usando da forma correta você vai conseguir aumentar e muito a performance da sua aplicação. Só não esqueça de usar com moderação, só quando necessário beleza ?
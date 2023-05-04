# VireoXlibrary

VireoXlibrary è una libreria di componenti Vue3 per la realizzazione di applicazioni web.
Utilizza Tailwind CSS e Flowbite Design System.

## Requisiti

- Tailwind CSS
- Flowbite

Per installare Tailwind CSS e Flowbite fare riferimento alla seguente guida:
https://flowbite.com/docs/getting-started/vue/

## Installazione

Per scaricare e installare la libreria eseguire il comando:

```
npm i @sirius-rd/vireoxlibrary
```

oppure

```
yarn add @sirius-rd/vireoxlibrary
```

Installato e configurato Tailwind CSS, andare nel file `tailwind.config.js` e modificarlo come segue:

```js
module.exports = {
    ...,
    content: [
        ...
        './node_modules/@sirius-rd/vireoxlibrary/src/**/*.vue'
    ]
}
```

## Utilizzo

Tutti i componenti iniziano con il prefisso "Vrx" per evitare conflitti con altri componenti.

# Sito Documentazione

https://sirius-ea.github.io/VireoXlibrary/

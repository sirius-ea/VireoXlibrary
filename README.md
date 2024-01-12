# VireoXlibrary

VireoXlibrary è una libreria di componenti Vue3 per la realizzazione di applicazioni web.
Utilizza Tailwind CSS.

## Requisiti

- Tailwind CSS

Per installare Tailwind CSS fare riferimento alla seguente guida:
https://tailwindcss.com/docs/guides/vite

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
        './node_modules/@sirius-rd/vireoxlibrary/src/**/*.{ts,js,vue}'
    ]
}
```

## Utilizzo

Tutti i componenti iniziano con il prefisso "Vrx" per evitare conflitti con altri componenti.

# Sito Documentazione

https://sirius-ea.github.io/VireoXlibrary/


# English

# VireoXlibrary

VireoXlibrary is a library of Vue3 components for building web applications.
It uses Tailwind CSS.

## Requirements

- Tailwind CSS

To install Tailwind CSS refer to the following guide:
https://tailwindcss.com/docs/guides/vite

## Installation

To download and install the library run the following command:

```
npm i @sirius-rd/vireoxlibrary
```

or

```
yarn add @sirius-rd/vireoxlibrary
```

Once Tailwind CSS is installed and configured, navigate to the `tailwind.config.js` file and edit it as follows:

```js
module.exports = {
     ...,
     content: [
         ...
         './node_modules/@sirius-rd/vireoxlibrary/src/**/*.{ts,js,vue}'
     ]
}
```

## Usage

All components start with the prefix "Vrx" to avoid conflicts with other components.

# Documentation

https://sirius-ea.github.io/VireoXlibrary/

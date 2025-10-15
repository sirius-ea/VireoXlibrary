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

### Importazione CSS

Importare il CSS della libreria nel file principale dell'applicazione:

```js
import '@sirius-rd/vireoxlibrary/dist/vireoxlibrary.css'
```

**Nota importante:** La libreria NON include il layer `base` di Tailwind CSS per evitare conflitti con altre librerie come Nuxt UI. Il CSS della libreria contiene solo:
- Stili specifici dei componenti
- Variabili CSS per la personalizzazione
- Utility classes di Tailwind utilizzate dai componenti

Il progetto deve avere Tailwind CSS già configurato con il proprio layer `base`, oppure utilizzare un'altra libreria che lo fornisce (come Nuxt UI).

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

### CSS Import

Import the library CSS in your application's main file:

```js
import '@sirius-rd/vireoxlibrary/dist/vireoxlibrary.css'
```

**Important Note:** The library does NOT include Tailwind CSS's `base` layer to avoid conflicts with other libraries like Nuxt UI. The library CSS contains only:
- Component-specific styles
- CSS variables for customization
- Tailwind utility classes used by components

Your project must have Tailwind CSS already configured with its own `base` layer, or use another library that provides it (such as Nuxt UI).

# Documentation

https://sirius-ea.github.io/VireoXlibrary/

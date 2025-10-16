# VireoXlibrary

VireoXlibrary è una libreria di componenti Vue3 per la realizzazione di applicazioni web.
Utilizza Tailwind CSS.

## Requisiti

- Tailwind CSS v4.x

La libreria è progettata per funzionare con Tailwind CSS v4. Assicurati di avere Tailwind CSS v4 installato nel tuo progetto.

Per installare Tailwind CSS v4 fare riferimento alla seguente guida:
https://tailwindcss.com/docs/installation

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

### Configurazione PostCSS

Assicurati di configurare PostCSS per usare Tailwind CSS v4:

```js
// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

**Nota importante:** La libreria NON include il layer `preflight` di Tailwind CSS per evitare conflitti con altre librerie come Nuxt UI. Il CSS della libreria contiene solo:
- Stili specifici dei componenti
- Variabili CSS per la personalizzazione
- Utility classes di Tailwind utilizzate dai componenti

Il progetto deve avere Tailwind CSS v4 già configurato con il proprio layer `preflight`, oppure utilizzare un'altra libreria che lo fornisce (come Nuxt UI).

### Compatibilità con Nuxt UI

VireoXlibrary è ora completamente compatibile con Nuxt UI e altre librerie basate su Tailwind CSS. La libreria non include più il layer `base` di Tailwind, evitando così conflitti di stili. È possibile utilizzare entrambe le librerie nello stesso progetto senza problemi.

### Personalizzazione dei Colori

La libreria utilizza variabili CSS per i colori dei temi, che possono essere personalizzate sovrascrivendo le variabili CSS nel tuo progetto:

```css
:root {
  --color-primary-500: #your-color;
  --color-secondary-500: #your-color;
  /* ... altre variabili */
}
```

# Sito Documentazione

https://sirius-ea.github.io/VireoXlibrary/


# English

# VireoXlibrary

VireoXlibrary is a library of Vue3 components for building web applications.
It uses Tailwind CSS.

## Requirements

- Tailwind CSS v4.x

The library is designed to work with Tailwind CSS v4. Make sure you have Tailwind CSS v4 installed in your project.

To install Tailwind CSS v4 refer to the following guide:
https://tailwindcss.com/docs/installation

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

### PostCSS Configuration

Make sure to configure PostCSS to use Tailwind CSS v4:

```js
// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

**Important Note:** The library does NOT include Tailwind CSS's `preflight` layer to avoid conflicts with other libraries like Nuxt UI. The library CSS contains only:
- Component-specific styles
- CSS variables for customization
- Tailwind utility classes used by components

Your project must have Tailwind CSS v4 already configured with its own `preflight` layer, or use another library that provides it (such as Nuxt UI).

### Compatibility with Nuxt UI

VireoXlibrary is now fully compatible with Nuxt UI and other Tailwind CSS-based libraries. The library no longer includes Tailwind's `base` layer, avoiding style conflicts. You can use both libraries in the same project without issues.

### Color Customization

The library uses CSS variables for theme colors, which can be customized by overriding the CSS variables in your project:

```css
:root {
  --color-primary-500: #your-color;
  --color-secondary-500: #your-color;
  /* ... other variables */
}
```

# Documentation

https://sirius-ea.github.io/VireoXlibrary/

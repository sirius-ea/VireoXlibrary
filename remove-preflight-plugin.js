/**
 * PostCSS plugin to remove Tailwind's preflight/base styles
 * This is needed because Tailwind v4 doesn't support corePlugins.preflight: false
 */
export default function removePreflightPlugin() {
  return {
    postcssPlugin: 'remove-preflight',
    Once(root) {
      // Remove rules that match Tailwind's preflight selectors
      root.walkRules((rule) => {
        const selector = rule.selector;
        
        // Remove preflight base styles
        if (
          selector === 'html,:host' ||
          selector === '*,::before,::after' ||
          selector === '::backdrop' ||
          selector === 'body' ||
          selector === 'hr' ||
          selector.startsWith('h1,') ||
          selector.startsWith('h2,') ||
          selector.startsWith('h3,') ||
          selector.startsWith('h4,') ||
          selector.startsWith('h5,') ||
          selector.startsWith('h6') ||
          selector === 'a' ||
          selector.startsWith('abbr') ||
          selector === 'code,kbd,samp,pre' ||
          selector === 'small' ||
          selector.startsWith('sub,sup') ||
          selector === 'table' ||
          selector.startsWith('button,') ||
          selector.startsWith('input,') ||
          selector.startsWith('textarea') ||
          selector.startsWith('select') ||
          selector === 'summary' ||
          selector.includes(':-moz') ||
          selector.includes('::-webkit') ||
          selector.includes('::-moz') ||
          selector.includes('::file-selector-button') ||
          selector.includes('[type=') && (
            selector.includes('button') ||
            selector.includes('checkbox') ||
            selector.includes('radio') ||
            selector.includes('reset') ||
            selector.includes('submit') ||
            selector.includes('number') ||
            selector.includes('search')
          )
        ) {
          rule.remove();
        }
      });
    },
  };
}

removePreflightPlugin.postcss = true;

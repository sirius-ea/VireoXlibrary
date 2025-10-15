/**
 * Vite plugin to remove Tailwind's preflight/base styles from the final CSS
 * This is needed because Tailwind v4 doesn't support corePlugins.preflight: false properly
 */
export default function removePreflightPlugin() {
  return {
    name: 'remove-preflight',
    enforce: 'post',
    generateBundle(options, bundle) {
      // Find and process CSS files
      for (const fileName in bundle) {
        const file = bundle[fileName];
        
        if (fileName.endsWith('.css') && file.type === 'asset') {
          let css = file.source.toString();
          
          // Remove Tailwind preflight rules
          // These are the main preflight selectors that cause conflicts
          const preflightPatterns = [
            /html,:host\{[^}]*\}/g,
            /\*,::before,::after\{[^}]*\}/g,
            /::backdrop\{[^}]*\}/g,
            /html,:host\{[^}]*\}@supports\([^)]*\)\{html,:host\{[^}]*\}\}/g,
          ];
          
          preflightPatterns.forEach(pattern => {
            css = css.replace(pattern, '');
          });
          
          // Update the bundle
          file.source = css;
        }
      }
    },
  };
}

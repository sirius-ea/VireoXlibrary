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
          
          // Remove Tailwind preflight rules more carefully
          // Handle @supports rules that contain preflight selectors
          css = css.replace(/@supports[^{]*\{[^}]*\*,:before,:after[^}]*\}+/g, '');
          
          // Remove standalone preflight rules
          css = css.replace(/html,:host\{[^}]*\}/g, '');
          css = css.replace(/\*,::before,::after\{[^}]*\}/g, '');
          css = css.replace(/::backdrop\{[^}]*\}/g, '');
          
          // Clean up any leftover malformed rules (empty selectors, trailing commas, etc.)
          css = css.replace(/\{\s*\}/g, ''); // Remove empty rules
          css = css.replace(/[,;]\s*\}/g, '}'); // Remove trailing commas/semicolons before closing brace
          css = css.replace(/\s+\}/g, '}'); // Clean up whitespace before closing brace
          
          // Update the bundle
          file.source = css;
        }
      }
    },
  };
}

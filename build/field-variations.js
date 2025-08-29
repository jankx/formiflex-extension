/**
 * Formiflex Field Variations
 *
 * Field variations JavaScript for FormiFlex extension
 */

console.log('Formiflex field variations loaded successfully');

// Field variations functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Formiflex field variations DOM ready');

    // Initialize field variations components
    if (typeof wp !== 'undefined' && wp.blocks) {
        console.log('WordPress blocks API available for field variations');
    }
});

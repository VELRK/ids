const fs = require('fs');

const file = '/Users/ids/Documents/projects/ids-web/src/components/pages/our-project-details/DigitalMarketingDetails.tsx';
let content = fs.readFileSync(file, 'utf8');

// The replacements
const replacements = [
    // Teal -> Orange
    { old: /#00d29f/gi, new: '#EA7925' },
    { old: /rgba\(0,\s*210,\s*159/g, new: 'rgba(234, 121, 37' },
    { old: /#059669/gi, new: '#EA7925' },
    { old: /#0d9488/gi, new: '#EA7925' },

    // Blues -> New Blue (275499)
    { old: /#2563eb/gi, new: '#275499' },
    { old: /rgba\(37,\s*99,\s*235/g, new: 'rgba(39, 84, 153' },
    { old: /rgba\(59,\s*130,\s*246/g, new: 'rgba(39, 84, 153' },

    // Darks -> Navy (163C6A)
    { old: /#0f172a/gi, new: '#163C6A' },
    { old: /rgba\(15,\s*23,\s*42/g, new: 'rgba(22, 60, 106' },
    { old: /#1e3a8a/gi, new: '#163C6A' },

    // Grays -> New Blue (275499) for text
    { old: /#475569/gi, new: '#275499' },
    { old: /#64748b/gi, new: '#275499' },
    { old: /#94a3b8/gi, new: '#275499' },
    
    // CSS variable (theme) - if any
    { old: /var\(--theme\)/g, new: '#EA7925' }
];

replacements.forEach(r => {
    content = content.replace(r.old, r.new);
});

fs.writeFileSync(file, content, 'utf8');
console.log("Colors replaced successfully.");

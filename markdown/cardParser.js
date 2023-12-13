// function parseCards(text) {
//     const lines = text.split('\n');
//     const result = [];
//     let insideQuote = false;

//     const keywords = ['info', 'danger', 'warning'];

//     lines.forEach((line, index) => {
//         if (keywords.some(keyword => line.trim().startsWith(`>> [!${keyword}]`))) {
//             if (!insideQuote) {
//                 result.push('<card>');
//                 insideQuote = true;
//             }
//             result.push('<h4>' + line.slice(2).trim() + '</h4>');
//             firstLineProcessed = true;
//         } else if (line.trim().startsWith('>> ')) {
//             // Include subsequent lines starting with '>>' without <h4> tags
//             if (insideQuote) {
//                 result.push(line.slice(3).trim());
//             }
//             else {
//                 result.push(line);
//             }
//         } else {
//             if (insideQuote) {
//                 result.push('</card>');
//                 insideQuote = false;
//             }
//             result.push(line);
//         }
//     });

//     if (insideQuote) {
//         result.push('</card>');
//     }

//     return result.join('\n');
// }

// module.exports = {
//     parseCards,
// }








function parseCards(text) {
    const lines = text.split('\n');
    const result = [];
    let insideQuote = false;

    const keywords = [
        { name: 'info', icon: 'tabler:info' },
        { name: 'danger', icon: 'tabler:danger' },
        { name: 'warning', icon: 'tabler:warning'},
    ];

    lines.forEach((line, index) => {
        const matchedKeyword = keywords.find(keyword => line.trim().startsWith(`>> [!${keyword.name}]`));

        if (matchedKeyword) {
            if (!insideQuote) {
                result.push('<card>');
                insideQuote = true;
            }

            const keywordLength = matchedKeyword.name.length;
            result.push(`<Icon icon="${matchedKeyword.icon}"><h4>${line.slice(6 + keywordLength).trim()}</h4>`);
        } else if (line.trim().startsWith('>> ')) {
            // Include subsequent lines starting with '>>' without <h4> tags
            if (insideQuote) {
                result.push(`<p>${line.slice(3).trim()}</p>`);
            } else {
                result.push(line);
            }
        } else {
            if (insideQuote) {
                result.push('</card>');
                insideQuote = false;
            }
            result.push(line);
        }
    });

    if (insideQuote) {
        result.push('</card>');
    }

    return result.join('\n');
}

module.exports = {
    parseCards,
}

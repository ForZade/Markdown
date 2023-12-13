function parseHeaders(text) {
    return text.replace(/^#{1,3}\s(.*)$/gm, (match, group1) => {
        const headerLevel = match.trim().split(' ')[0].length;
        return `<h${headerLevel}>${group1}</h${headerLevel}>`;
    });
}

module.exports = {
    parseHeaders,
}
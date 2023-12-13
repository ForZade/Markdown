function parseBoldItalic(text) {
    return text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><i>$1</i></strong>');
}

function parseBold(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function parseItalic(text) {
    return text.replace(/\*([^\*]+)\*/g, '<i>$1</i>');
}

function parseStrikethrough(text) {
    return text.replace(/~~(.*?)~~/g, '<del>$1</del>');
}

function parseUnderline(text) {
    return text.replace(/__(.*?)__/g, '<u>$1</u>');
}

module.exports = {
    parseItalic,
    parseBold,
    parseBoldItalic,
    parseStrikethrough,
    parseUnderline,
}
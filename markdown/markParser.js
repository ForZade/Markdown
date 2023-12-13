function regularMarkParser(text) {
    return text.replace(/`([^\`]+)`/g, '<mark>$1</mark>');
}


module.exports = {
    regularMarkParser,
}
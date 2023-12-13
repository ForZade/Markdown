function hashTagParser(text) {
    return text.replace(/#([^ ]+)/g, '<span class="hashtag">$1</span>');
}

module.exports = {
    hashTagParser,
}
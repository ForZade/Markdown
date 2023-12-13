function parseNumericList(text) {
    const numericalListRegex = /^(\d+\.\s)(.*)$/gm;
    const lines = text.split('\n');
    let inList = false;
    let result = '';

    for (const line of lines) {
        if (numericalListRegex.test(line)) {
            if (!inList) {
                result += '<ol>';
                inList = true;
            }
            result += line.replace(numericalListRegex, '<li>$2</li>');
        } else {
            if (inList) {
                result += '</ol>';
                inList = false;
            }
            result += line;
        }

        result += '\n';
    }

    if (inList) {
        result += '</ol>';
    }

    return result;
}


module.exports = {
    parseNumericList,
}
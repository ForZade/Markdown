function parseQuotes(text) {
  const lines = text.split('\n');
  const result = [];
  let insideQuote = false;

  lines.forEach((line) => {
    if (line.trim().startsWith('> ')) {
      if (!insideQuote) {
        result.push('<div>');
        insideQuote = true;
      }
      result.push(line.slice(1).trim());
    } else {
      if (insideQuote) {
        result.push('</div>');
        insideQuote = false;
      }
      result.push(line);
    }
  });

  if (insideQuote) {
    result.push('</div>');
  }

  return result.join('\n');
}

module.exports = {
    parseQuotes,
}
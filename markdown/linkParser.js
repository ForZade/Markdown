function parseLink(text) {
    return text.replace(/\[([^\*\n]+)\]\(\s*([^)\n]+)\s*\)/g, function(match, p1, p2) {
      // Ensure that p1 and p2 do not contain line breaks
      if (p1.includes('\n') || p2.includes('\n')) {
        return match; // Return unchanged if line break found
      }
      return `<a href="${p2}">${p1}</a>`;
    });
  }
  

module.exports = {
    parseLink,
}
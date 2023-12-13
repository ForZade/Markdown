const { parseItalic, parseBold, parseBoldItalic, parseStrikethrough, parseUnderline } = require('./markdown/basicParser');
const { parseHeaders } = require('./markdown/headerParser');
const { parseQuotes } = require('./markdown/quotesParser');
const { parseCards } = require('./markdown/cardParser');
const { parseLink } = require('./markdown/linkParser');
const { regularMarkParser } = require('./markdown/markParser');
const { hashTagParser } = require('./markdown/tagParser');
const { parseNumericList } = require('./markdown/listParser');

function formatMarkdown(text) {
  let formattedText = parseBoldItalic(text);
  formattedText = parseBold(formattedText);
  formattedText = parseItalic(formattedText);
  formattedText = parseHeaders(formattedText);
  formattedText = parseStrikethrough(formattedText);
  formattedText = parseUnderline(formattedText);

  formattedText = regularMarkParser(formattedText)

  formattedText = parseQuotes(formattedText);
  formattedText = parseCards(formattedText);

  formattedText = parseLink(formattedText);
  formattedText = hashTagParser(formattedText);

  formattedText = parseNumericList(formattedText);
  // formattedText = parseBulletList(formattedText);

  return formattedText;
}

module.exports = formatMarkdown;
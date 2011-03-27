var mdext = new Showdown.converter();

function markdownTest(name) {
  asyncTest(name, function () {
    var firstload = false;
    var html = "";
    var text = "";
    $.get(name + '.text', function (data) {
      text = $.trim(mdext.makeHtml(data));
      if (!firstload) {
        firstload = true;
      } else {
        equals(text, html, name);
        start();
      }
    });
    $.get(name + '.html', function (data) {
      html = $.trim(data);
      if (!firstload) {
        firstload = true;
      } else {
        equals(text, html, name);
        start();
      }
    });
  });
}

module("markdown test suite");

var tests = ["Amps and angle encoding", "Auto links", "Backslash escapes",
  "Blockquotes with code blocks", "Code Blocks", "Code Spans",
  "Hard-wrapped paragraphs with list-like lines", "Horizontal rules", "Images",
  "Inline HTML (Advanced)", "Inline HTML (Simple)", "Inline HTML comments",
  "Links, inline style", "Links, reference style", "Links, shortcut references",
  "Literal quotes in titles", "Markdown Documentation - Basics",
  "Markdown Documentation - Syntax",
  "Nested blockquotes", "Ordered and unordered lists", "Strong and em together",
  "Tabs", "Tidyness"];
 
$.each(tests, function (i, name) {
  markdownTest(name);
});
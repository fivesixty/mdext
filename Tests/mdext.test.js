var mdext = new Showdown.converter();

function markdownTest(name) {
  asyncTest(name, function () {
    var firstload = false;
    var html = "";
    var text = "";
    $.get(name + '.text', function (data) {
      text = $.trim(mdext.makeHtml(data, false));
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

test("markdown test suite", function () {
  
  markdownTest("Amps and angle encoding");
  markdownTest("Auto links");
  markdownTest("Backslash escapes");
  markdownTest("Blockquotes with code blocks");
  markdownTest("Code Blocks");
  markdownTest("Code Spans");
  markdownTest("Hard-wrapped paragraphs with list-like lines");
  markdownTest("Horizontal rules");
  markdownTest("Images");
  markdownTest("Inline HTML (Advanced)");
  markdownTest("Inline HTML (Simple)");
  markdownTest("Inline HTML comments");
  markdownTest("Links, inline style");
  markdownTest("Links, reference style");
  markdownTest("Links, shortcut references");
  markdownTest("Literal quotes in titles");
  markdownTest("Markdown Documentation - Basics");
  markdownTest("Markdown Documentation - Syntax");
  markdownTest("Nested blockquotes");
  markdownTest("Ordered and unordered lists");
  markdownTest("Strong and em together");
  markdownTest("Tabs");
  markdownTest("Tidyness");
  
});
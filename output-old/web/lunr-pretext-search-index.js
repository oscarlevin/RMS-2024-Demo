var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Here is an example that has a solution with steps.  Before the example, let's do a list:   First item.    Second item.    Third item.   And that's all.    What are the three steps to success?    The steps are as follows:   Have a great idea.    ???    Profit.       "
},
{
  "id": "sec-section-name-4",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-4",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "  What are the three steps to success?    The steps are as follows:   Have a great idea.    ???    Profit.      "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

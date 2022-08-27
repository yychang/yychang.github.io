window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    packages: {'[+]': ['boldsymbol']},
    processEscapes: true,
    processEnvironments: true
  },
  loader: {load: ['[tex]/boldsymbol']},
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => { 
  MathJax.typesetPromise()
})

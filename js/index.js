
const pre = document.querySelector('pre')
if (!pre) return
document.body.innerHTML= "<div id='wrapper'>" + marked(pre.textContent, {
  breaks: true,
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  }
}) + "</div>";
document.body.style.display = 'block';

function run() {
  // 给使用 // 开头的 <img /> 添加 https 协议
  // //pic.com/1.png => https://pic.com/1.png
  function imgManager(mdStr) {
    return mdStr.replace(/(?<=<img[\s\S]+?src=")\/\/.+?(?="[\s\S]*>)/g, mt => {
      return 'https:' + mt
    })
  }
  const pre = document.querySelector('pre')
  if (!pre) return
  document.body.innerHTML= "<div id='wrapper'>" + imgManager(marked(pre.textContent, {
    breaks: true,
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    },
  })) + "</div>";
  document.body.style.display = 'block';
}
run()

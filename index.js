let url=require('url');
let fs=require('fs');
let http=require('http');

function renderHTML(path, res) {
  fs.readFile(path, (err, data) => {
    if(err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Not Found');
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  })
}


http.createServer((req, res) => {
  let p = url.parse(req.url, true).pathname + '.html';
  if(p === '/.html') {
    renderHTML('./index.html', res);
  } else if(p === '/index.html') {
    renderHTML('./index.html', res);
  } else if(p === '/about.html') {
    renderHTML('./about.html', res);
  }  else if(p === '/contact-me.html') {
    renderHTML('./contact-me.html', res);
  } else {
    renderHTML('./404.html', res);
  }
}).listen(8080);

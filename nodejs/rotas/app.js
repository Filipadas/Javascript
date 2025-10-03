import http from 'http';

const PORT = 3000;

const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    response.setHeader('Content-Type', 'text/html; charset=UTF-8');

    if (url === '/') {
        response.statusCode = 200;
        response.end('<h1>Página Inicial</h1>');

    } else if (url === '/sobre' && method === 'GET') {
        response.statusCode = 200;
        response.end('<h1>Sobre Nós</h1><p>Esta é uma aplicação de exemplo com Node.js puro.</p>');

    } else if (url === '/contato') {
        response.statusCode = 200;
        response.end('<h1>Fale Conosco</h1>');

    } else if (url === '/fotos') {
        response.statusCode = 200;
        response.end('<h1>Galeria de Fotos</h1>');
        
    } else {
        response.statusCode = 404;
        response.end('<h1>404 - Página Não Encontrada</h1>');
    
    } 
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
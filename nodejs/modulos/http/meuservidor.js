import { createServer } from 'http';

const PORT = 8080;

let usuarios = [
  { id: 1, nome: 'João', email: 'joao@email.com' },
  { id: 2, nome: 'Maria', email: 'maria@email.com' }
];

let produtos = [
  { id: 1, nome: 'Notebook', preco: 2500 },
  { id: 2, nome: 'Mouse', preco: 50 }
];

function sendJson(res, obj, status = 200) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(obj));
}

function parseBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch {
        resolve({});
      }
    });
  });
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const method = req.method;

  // Rota inicial
  if (url.pathname === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Servidor Node Puro</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f7f7f7; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 40px auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px #0001; padding: 32px; }
          h1 { color: #2c3e50; }
          ul { list-style: none; padding: 0; }
          li { background: #eaf6fb; margin: 8px 0; padding: 10px 16px; border-radius: 4px; }
          .endpoints { margin-top: 24px; }
          .endpoints li { font-family: 'Fira Mono', monospace; color: #2980b9; }
          .footer { margin-top: 32px; color: #888; font-size: 0.9em; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Bem-vindo ao Servidor Node.js Puro!</h1>
          <p>Veja os endpoints disponíveis para testar:</p>
          <ul class="endpoints">
            <li>GET <a href="/usuarios">/usuarios</a></li>
            <li>GET <a href="/usuarios/1">/usuarios/:id</a></li>
            <li>POST /usuarios</li>
            <li>PUT /usuarios/:id</li>
            <li>DELETE /usuarios/:id</li>
            <li>GET <a href="/produtos">/produtos</a></li>
            <li>POST /produtos</li>
          </ul>
          <div class="footer">Servidor rodando em <b>http://localhost:${PORT}</b></div>
        </div>
      </body>
      </html>
    `);
    return;
  }

  // GET - Buscar todos os usuários
  if (url.pathname === '/usuarios' && method === 'GET') {
    sendJson(res, usuarios);
    return;
  }

  // GET - Buscar usuário por ID
  if (url.pathname.startsWith('/usuarios/') && method === 'GET') {
    const id = parseInt(url.pathname.split('/')[2]);
    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) {
      sendJson(res, { erro: 'Usuário não encontrado' }, 404);
      return;
    }
    sendJson(res, usuario);
    return;
  }

  // POST - Criar novo usuário
  if (url.pathname === '/usuarios' && method === 'POST') {
    const body = await parseBody(req);
    const { nome, email } = body;
    if (!nome || !email) {
      sendJson(res, { erro: 'Nome e email são obrigatórios' }, 400);
      return;
    }
    const novoUsuario = {
      id: usuarios.length + 1,
      nome,
      email
    };
    usuarios.push(novoUsuario);
    sendJson(res, novoUsuario, 201);
    return;
  }

  // PUT - Atualizar usuário
  if (url.pathname.startsWith('/usuarios/') && method === 'PUT') {
    const id = parseInt(url.pathname.split('/')[2]);
    const usuarioIndex = usuarios.findIndex(u => u.id === id);
    if (usuarioIndex === -1) {
      sendJson(res, { erro: 'Usuário não encontrado' }, 404);
      return;
    }
    const body = await parseBody(req);
    const { nome, email } = body;
    usuarios[usuarioIndex] = {
      ...usuarios[usuarioIndex],
      nome: nome || usuarios[usuarioIndex].nome,
      email: email || usuarios[usuarioIndex].email
    };
    sendJson(res, usuarios[usuarioIndex]);
    return;
  }

  // DELETE - Deletar usuário
  if (url.pathname.startsWith('/usuarios/') && method === 'DELETE') {
    const id = parseInt(url.pathname.split('/')[2]);
    const usuarioIndex = usuarios.findIndex(u => u.id === id);
    if (usuarioIndex === -1) {
      sendJson(res, { erro: 'Usuário não encontrado' }, 404);
      return;
    }
    usuarios.splice(usuarioIndex, 1);
    sendJson(res, { mensagem: 'Usuário deletado com sucesso' });
    return;
  }

  // GET - Buscar todos os produtos
  if (url.pathname === '/produtos' && method === 'GET') {
    sendJson(res, produtos);
    return;
  }

  // POST - Criar novo produto
  if (url.pathname === '/produtos' && method === 'POST') {
    const body = await parseBody(req);
    const { nome, preco } = body;
    if (!nome || !preco) {
      sendJson(res, { erro: 'Nome e preço são obrigatórios' }, 400);
      return;
    }
    const novoProduto = {
      id: produtos.length + 1,
      nome,
      preco: parseFloat(preco)
    };
    produtos.push(novoProduto);
    sendJson(res, novoProduto, 201);
    return;
  }

  // Rota para testar erros
  if (url.pathname === '/teste' && method === 'GET') {
    if (url.searchParams.get('tipo') === 'erro') {
      sendJson(res, { erro: 'Erro simulado' }, 400);
      return;
    }
    sendJson(res, { mensagem: 'Tudo funcionando!' });
    return;
  }

  // Rota não encontrada
  sendJson(res, { erro: 'Rota não encontrada' }, 404);
});

server.listen(PORT, () => {
  console.log(`🚀 Servidor rodando: http://localhost:${PORT}`);
});
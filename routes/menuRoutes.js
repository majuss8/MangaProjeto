const express = require('express');
const router = express.Router();

// Mock Data para simular ações
const livros = [
  { id: 1, titulo: 'Livro 1' },
  { id: 2, titulo: 'Livro 2' },
  { id: 3, titulo: 'Livro 3' },
  { id: 4, titulo: 'Livro 4' },
  { id: 5, titulo: 'Livro 5' },
];

router.get('/livros', (req, res) => {
  res.json(livros);
});

router.get('/livros/:id', (req, res) => {
  const livro = livros.find(l => l.id === req.params.id);
  if (livro) {
    res.json(livro);
  } else {
    res.status(404).json({ error: 'Livro não encontrado' });
  }
});

module.exports = router;

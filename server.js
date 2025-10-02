const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Permite requisições do front-end
app.use(express.json());

// Dados do cardápio em memória (substitua por um banco de dados real)
const menuItems = [
    {
        id: 1,
        name: 'Salada Caesar',
        description: 'Salada fresca com molho Caesar e croutons.',
        price: 25.00,
        category: 'entradas',
        image: 'https://via.placeholder.com/300x200?text=Salada+Caesar'
    },
    {
        id: 2,
        name: 'Bruschetta',
        description: 'Pão torrado com tomate, manjericão e azeite.',
        price: 18.00,
        category: 'entradas',
        image: 'https://via.placeholder.com/300x200?text=Bruschetta'
    },
    {
        id: 3,
        name: 'Filé Mignon',
        description: 'Filé grelhado com molho de vinho tinto e legumes.',
        price: 65.00,
        category: 'principais',
        image: 'https://via.placeholder.com/300x200?text=Filé+Mignon'
    },
    {
        id: 4,
        name: 'Risoto de Funghi',
        description: 'Risoto cremoso com cogumelos silvestres.',
        price: 45.00,
        category: 'principais',
        image: 'https://via.placeholder.com/300x200?text=Risoto+de+Funghi'
    },
    {
        id: 5,
        name: 'Tiramisu',
        description: 'Sobremesa italiana clássica com café e mascarpone.',
        price: 22.00,
        category: 'sobremesas',
        image: 'https://via.placeholder.com/300x200?text=Tiramisu'
    },
    {
        id: 6,
        name: 'Pudim de Leite',
        description: 'Pudim caseiro com calda de caramelo.',
        price: 15.00,
        category: 'sobremesas',
        image: 'https://via.placeholder.com/300x200?text=Pudim+de+Leite'
    }
];

// Rota para servir o cardápio
app.get('/api/menu', (req, res) => {
    res.json(menuItems);
});

// Rota opcional para filtrar por categoria (ex: /api/menu?category=entradas)
app.get('/api/menu', (req, res) => {
    const { category } = req.query;
    if (category) {
        const filtered = menuItems.filter(item => item.category === category);
        res.json(filtered);
    } else {
        res.json(menuItems);
    }
});

// Servir arquivos estáticos do front-end (opcional, para rodar tudo no back-end)
app.use(express.static('../frontend')); // Ajuste o caminho se necessário

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
const produtosAginaSabores = [
    // --- SALGADOS (POR DÚZIA) ---
    {
        id: 10,
        nome: "Chamuças Especiais (Dúzia)",
        categoria: "salgados",
        descricao: "Porção com 12 unidades de chamuças crocantes e bem recheadas.",
        precoBase: 350,
        imagens: [
            "imagens/chamu.jpg",
            "imagens/Chamucasdebatata.jpg"
        ],
        opcoes: {
            recheios: [
                { nome: "Chamusca de Carne", preco: 350 },
                { nome: "Chamusca de Caranguejo", preco: 350 },
                { nome: "Chamusca de Peixe", preco: 350 },
                { nome: "Chamusca de Frango", preco: 350 }
            ]
        }
    },
    {
        id: 11,
        nome: "Ressóis de Camarão (Dúzia)",
        categoria: "salgados",
        descricao: "Porção com 12 unidades de ressóis empanados recheados com camarão selecionado.",
        precoBase: 350,
        imagens: [
            "imagens/rissois.jpeg",
        ]
    },
    {
        id: 12,
        nome: "Spring Roll Vegetais com Frango (Dúzia)",
        categoria: "salgados",
        descricao: "Porção de 12 rolinhos primavera recheados com vegetais e frango bem temperado.",
        precoBase: 350,
        imagens: ["imagens/stringroll.jpg"]
    },
    {
        id: 13,
        nome: "Almofadinhas Frango e Queijo (Dúzia)",
        categoria: "salgados",
        descricao: "Porção com 12 unidades de salgadinhos crocantes por fora e cremosos por dentro.",
        precoBase: 350,
        imagens: ["imagens/almofadinhas.jpg"]
    },
    {
        id: 14,
        nome: "Mini Pizza (Dúzia)",
        categoria: "salgados",
        descricao: "Porção com 12 mini pizzas artesanais com massa leve e bastante queijo.",
        precoBase: 450,
        imagens: ["imagens/minipizza.webp",]
    },
    {
        id: 15,
        nome: "Stik de Camarão (Dúzia)",
        categoria: "salgados",
        descricao: "Porção com 12 espetinhos/sticks gourmet de camarão empanados e temperados.",
        precoBase: 550,
        imagens: ["imagens/stick.jpg"]
    },

    // --- BOLOS DE ANIVERSÁRIO ---
    {
        id: 1,
        nome: "Bolo de Aniversário Decorado",
        categoria: "bolos",
        descricao: "Bolos de aniversário personalizados com acabamento impecável. Selecione a forma/tamanho e o sabor desejado.",
        precoBase: 1350,
        imagens: [
            "imagens/boloaniver.jpeg",
            "imagens/boloaniver1.jpeg",
            "imagens/boloaniver2.jpeg",
            "imagens/boloaniver4.jpeg"
        ],
        opcoes: {
            tamanhos: [
                { nome: "F18 (Forma 18)", preco: 1350 },
                { nome: "F20 (Forma 20)", preco: 1500 },
                { nome: "F22 (Forma 22)", preco: 2500 },
                { nome: "F26 (Forma 26)", preco: 3000 },
                { nome: "F30 (Forma 30)", preco: 3500 },
                { nome: "Bolo Quadrado / Rectangular", preco: 0 } // Para consulta sob orçamento
            ],
            sabores: ["Chocolate", "Red Velvet", "Laranja", "Maracujá", "Caramelo", "Café"]
        }
    },

    // --- SOBREMESAS (POR DÚZIA) ---
    {
        id: 20,
        nome: "Mine Cheesecake de Frutos Vermelhos (Dúzia)",
        categoria: "sobremesas",
        descricao: "Dúzia de mini cheesecakes individuais com geleia artesanal de frutos vermelhos.",
        precoBase: 1850,
        imagens: ["imagens/chessechake.jpg"]
    },
    {
        id: 21,
        nome: "Tiramisu (Dúzia)",
        categoria: "sobremesas",
        descricao: "Sobremesa italiana clássica em doses individuais (12 unidades), com sabor marcante de café e creme leve.",
        precoBase: 2250,
        imagens: ["imagens/tiramisu.webp"]
    },
    {
        id: 22,
        nome: "Doce de Dubai (Dúzia)",
        categoria: "sobremesas",
        descricao: "Porção de 12 taças gourmet do famoso e sofisticado Doce de Dubai.",
        precoBase: 2250,
        imagens: ["imagens/tiramisu.webp"]
    },
    {
        id: 23,
        nome: "Trílice - Sobremesa Turca (Dúzia)",
        categoria: "sobremesas",
        descricao: "Porção de 12 doses do tradicional bolo turco banhado em três leites com calda especial.",
        precoBase: 2250,
        imagens: ["imagens/docededubai.jpg"]
    },
    {
        id: 24,
        nome: "Mini Pudim (Dúzia)",
        categoria: "sobremesas",
        descricao: "Porção com 12 mini pudins de leite condensado super lisinhos e com calda de caramelo.",
        precoBase: 1500,
        imagens: ["imagens/minipudim.jpg"]
    },
    {
        id: 25,
        nome: "Mousse Cremosa (Dúzia)",
        categoria: "sobremesas",
        descricao: "Dúzia de potinhos de mousse aveludada e refrescante.",
        precoBase: 1500,
        imagens: ["imagens/moussechocolate.jpg","imagens/moussemaracuja.jpg"],
        opcoes: {
            recheios: [
                { nome: "Mousse de Chocolate", preco: 1500 },
                { nome: "Mousse de Maracujá", preco: 1500 }
            ]
        }
    },
    {
        id: 26,
        nome: "Colchão de Noiva (Dúzia)",
        categoria: "sobremesas",
        descricao: "Porção com 12 doces tradicionais e fofinhos recheados com glacê/doce leve.",
        precoBase: 1000,
        imagens: ["imagens/colchao.jpg"]
    },
];
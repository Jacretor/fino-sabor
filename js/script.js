/**
 * Fino Sabor - Script do Cardápio Digital, Sacola & Calculadora
 */

const CONFIG = {
    whatsapp: "845548352",
    businessName: "Fino Sabor"
};

// DADOS DO CARDÁPIO MAPEADOS COM SUAS RESPECTIVAS IMAGENS
const products = [
    // SALGADOS (Por Dúzia)
    { id: 1, name: "Chamussa de Carne (Dúzia)", category: "salgados", price: 350, image: "imagens/Chamucasdebatata.jpg" },
    { id: 2, name: "Chamussa de Caranguejo (Dúzia)", category: "salgados", price: 350, image: "imagens/chamussas.jpg" },
    { id: 3, name: "Chamussa de Peixe (Dúzia)", category: "salgados", price: 350, image: "imagens/chamussas1.jpeg" },
    { id: 4, name: "Chamussa de Frango (Dúzia)", category: "salgados", price: 350, image: "imagens/chamussas7.jpeg" },
    { id: 5, name: "Rissóis de Camarão (Dúzia)", category: "salgados", price: 350, image: "imagens/rissois.jpeg" },
    { id: 6, name: "Spring Roll Vegetais c/ Frango (Dúzia)", category: "salgados", price: 350, image: "imagens/stringroll.jpg" },
    { id: 7, name: "Almofadinhas Frango e Queijo (Dúzia)", category: "salgados", price: 350, image: "imagens/almofadinhas.jpg" },
    { id: 8, name: "Mini Pizza (Dúzia)", category: "salgados", price: 450, image: "imagens/minipizza.webp" },
    { id: 9, name: "Stik de Camarão (Dúzia)", category: "salgados", price: 550, image: "imagens/stick.jpg" },

    // BOLOS DE ANIVERSÁRIO
    { id: 10, name: "Bolo de Aniversário - Tamanho F18", category: "bolos", price: 1350, image: "imagens/aniver1.jpeg" },
    { id: 11, name: "Bolo de Aniversário - Tamanho F20", category: "bolos", price: 1500, image: "imagens/aniver2.jpeg" },
    { id: 12, name: "Bolo de Aniversário - Tamanho F22", category: "bolos", price: 2500, image: "imagens/aniver3.jpeg" },
    { id: 13, name: "Bolo de Aniversário - Tamanho F26", category: "bolos", price: 3000, image: "imagens/anver3.jpeg" },
    { id: 14, name: "Bolo de Aniversário - Tamanho F30", category: "bolos", price: 3500, image: "imagens/boloan7.jpg" },

    // SOBREMESAS (Por Dúzia)
    { id: 15, name: "Colchão de Noiva (Dúzia)", category: "sobremesas", price: 1000, image: "imagens/colchao.jpg" },
    { id: 16, name: "Mini Pudim (Dúzia)", category: "sobremesas", price: 1500, image: "imagens/minipudim.jpg" },
    { id: 17, name: "Mousse de Chocolate (Dúzia)", category: "sobremesas", price: 1500, image: "imagens/moussechocolate.jpg" },
    { id: 18, name: "Mousse de Maracujá (Dúzia)", category: "sobremesas", price: 1500, image: "imagens/moussemaracuja.jpg" },
    { id: 19, name: "Mini Cheesecake Frutos Vermelhos (Dúzia)", category: "sobremesas", price: 1850, image: "imagens/chessechake.jpg" },
    { id: 20, name: "Tiramisu (Dúzia)", category: "sobremesas", price: 2250, image: "imagens/tiramisu.webp" },
    { id: 21, name: "Doce de Dubai (Dúzia)", category: "sobremesas", price: 2250, image: "imagens/docededubai.jpg" },
    { id: 22, name: "Trílice - Sobremesa Turca (Dúzia)", category: "sobremesas", price: 2250, image: "imagens/trilice.jpg" }
];

let cart = [];
let lastCalculation = null;

document.addEventListener('DOMContentLoaded', () => {
    renderProducts('todos');
    initTabs();
    initCartEvents();
    initMobileMenu();
});

function renderProducts(filterCategory) {
    const container = document.getElementById('productsContainer');
    if (!container) return;

    const filtered = filterCategory === 'todos' 
        ? products 
        : products.filter(p => p.category === filterCategory);

    container.innerHTML = filtered.map(p => `
        <div class="product-card">
            <div class="product-img-wrapper">
                <img src="${p.image}" alt="${p.name}" class="product-img" onerror="this.src='https://via.placeholder.com/300x180?text=Fino+Sabor'">
            </div>
            <div class="product-info">
                <div>
                    <span class="product-category-tag">${p.category}</span>
                    <h3 class="product-title">${p.name}</h3>
                    <div class="product-price">${p.price.toLocaleString()} MZN</div>
                </div>
                <button onclick="addToOrder(${p.id})" class="btn btn-outline-magenta btn-sm w-full mt-sm">
                    <i class="fa-solid fa-plus"></i> Adicionar
                </button>
            </div>
        </div>
    `).join('');
}

function initTabs() {
    const tabs = document.querySelectorAll('#catalogTabs .tab-btn');
    tabs.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            renderProducts(e.target.getAttribute('data-filter'));
        });
    });
}

function addToOrder(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    openCartDrawer();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function changeQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
    }
}

function updateCartUI() {
    const container = document.getElementById('cartItemsContainer');
    const badge = document.getElementById('cartBadge');
    const totalEl = document.getElementById('cartTotal');

    badge.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cart.length === 0) {
        container.innerHTML = `<p class="text-center text-muted py-lg">A sua sacola está vazia.</p>`;
        totalEl.textContent = "0 MZN";
        return;
    }

    let total = 0;
    container.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${itemTotal.toLocaleString()} MZN</div>
                    <div class="cart-item-qty">
                        <button class="btn-qty" onclick="changeQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="btn-qty" onclick="changeQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button onclick="removeFromCart(${item.id})" class="btn-remove-item" title="Remover">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;
    }).join('');

    totalEl.textContent = `${total.toLocaleString()} MZN`;
}

function openCartDrawer() { document.getElementById('cartDrawer').classList.add('active'); }
function closeCartDrawer() { document.getElementById('cartDrawer').classList.remove('active'); }

function initCartEvents() {
    document.getElementById('openCartBtn').addEventListener('click', openCartDrawer);
    document.getElementById('closeCartBtn').addEventListener('click', closeCartDrawer);
    document.getElementById('cartDrawerOverlay').addEventListener('click', closeCartDrawer);
}

function sendOrderToWhatsApp() {
    if (cart.length === 0) {
        alert("Sua sacola está vazia.");
        return;
    }

    const notes = document.getElementById('cartDeliveryNotes').value.trim();
    if (!notes) {
        alert("Por favor, preencha a Data, Horário e Endereço de Entrega.");
        return;
    }

    let total = 0;
    let message = `Olá, *${CONFIG.businessName}*!\n\nGostaria de solicitar a seguinte encomenda:\n\n`;

    cart.forEach((item, i) => {
        const sub = item.price * item.quantity;
        total += sub;
        message += `${i + 1}. *${item.name}* (Qtd: ${item.quantity}) = ${sub.toLocaleString()} MZN\n`;
    });

    message += `\n💰 *TOTAL ESTIMADO:* ${total.toLocaleString()} MZN\n`;
    message += `📍 *Detalhes da Entrega:*\n${notes}\n\n`;
    message += `Aguardo a confirmação da disponibilidade de agenda!`;

    window.open(`https://wa.me/258${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
}

function calculateEventNeeds(e) {
    e.preventDefault();
    const guests = parseInt(document.getElementById('calcGuests').value);
    const eventType = document.getElementById('calcEventType').value;

    if (!guests || guests < 5) return;

    const salgadosDuzias = Math.ceil((guests * 10) / 12);
    
    let boloSugerido = "Tamanho F18 (1.350 MZN)";
    if (guests > 15 && guests <= 25) boloSugerido = "Tamanho F20 ou F22 (1.500 - 2.500 MZN)";
    else if (guests > 25 && guests <= 40) boloSugerido = "Tamanho F26 (3.000 MZN)";
    else if (guests > 40) boloSugerido = "Tamanho F30 (3.500 MZN) ou Bolos Múltiplos";

    const sobremesasDuzias = Math.ceil(guests / 4);

    document.getElementById('resSalgados').textContent = `${salgadosDuzias} dúzias (~${salgadosDuzias * 12} unidades)`;
    document.getElementById('resBolo').textContent = boloSugerido;
    document.getElementById('resSobremesas').textContent = `${sobremesasDuzias} dúzias`;

    lastCalculation = { guests, eventType, salgadosDuzias, boloSugerido, sobremesasDuzias };
    document.getElementById('calcResult').classList.remove('d-none');
}

function sendCalcToWhatsapp() {
    if (!lastCalculation) return;

    let msg = `Olá, *${CONFIG.businessName}*!\n\nUsei a Calculadora de Eventos do site e gostaria de um orçamento formal:\n\n`;
    msg += `👥 *Convidados:* ${lastCalculation.guests} pessoas\n`;
    msg += `🎉 *Tipo de Evento:* ${lastCalculation.eventType}\n\n`;
    msg += `📌 *Estimativa Gerada:*\n`;
    msg += `• Salgados: ~${lastCalculation.salgadosDuzias} dúzias\n`;
    msg += `• Bolo: ${lastCalculation.boloSugerido}\n`;
    msg += `• Sobremesas: ~${lastCalculation.sobremesasDuzias} dúzias\n\n`;
    msg += `Poderia me confirmar a disponibilidade e orçamento completo?`;

    window.open(`https://wa.me/258${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
}

function initMobileMenu() {
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const overlay = document.getElementById('mobileMenuOverlay');
    toggleBtn.addEventListener('click', () => overlay.classList.toggle('active'));
}
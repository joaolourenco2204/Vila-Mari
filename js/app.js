
lucide.createIcons();


let cart = [];
let currentProduct = null;
let lastPage = 'home';

const mockProducts = [
  { 
    id: 1, 
    name: 'Iscas Artificiais Biodegradáveis em PLA', 
    price: 29.90, 
    category: 'pesca', 
    subcategory: 'iscas', 
    image: 'https://placehold.co/400x300/10B981/ffffff?text=Iscas+PLA', 
    featured: true, 
    description: 'Iscas ecológicas feitas em PLA biodegradável, ideais para pesca sustentável.' 
  },
  { 
    id: 2, 
    name: 'Boias Ecológicas de PLA e Cortiça', 
    price: 19.90, 
    category: 'pesca', 
    subcategory: 'acessorios', 
    image: 'https://placehold.co/400x300/10B981/ffffff?text=Boias+Eco', 
    featured: true, 
    description: 'Boias leves e resistentes feitas de PLA com cortiça natural.' 
  },
  { 
    id: 3, 
    name: 'Suporte de Vara em Bambu e PLA', 
    price: 59.90, 
    category: 'pesca', 
    subcategory: 'equipamentos', 
    image: 'https://placehold.co/400x300/10B981/ffffff?text=Suporte+Vara', 
    featured: false, 
    description: 'Suporte resistente combinando bambu sustentável e PLA reciclado.' 
  },
  { 
    id: 4, 
    name: 'Caixa Organizadora de Pesca em PLA Reciclado', 
    price: 89.90, 
    category: 'pesca', 
    subcategory: 'organizacao', 
    image: 'https://placehold.co/400x300/10B981/ffffff?text=Caixa+PLA', 
    featured: false, 
    description: 'Organizador durável feito com PLA reciclado para guardar acessórios.' 
  },
  { 
    id: 5, 
    name: 'Anzóis com Revestimento Biodegradável', 
    price: 24.90, 
    category: 'pesca', 
    subcategory: 'anzol', 
    image: 'https://placehold.co/400x300/10B981/ffffff?text=Anzois+Eco', 
    featured: true, 
    description: 'Anzóis resistentes com revestimento biodegradável para minimizar impacto ambiental.' 
  },
  { 
    id: 6, 
    name: 'Linha de Pesca Biodegradável de Biopolímero', 
    price: 39.90, 
    category: 'pesca', 
    subcategory: 'linha', 
    image: 'https://placehold.co/400x300/10B981/ffffff?text=Linha+Eco', 
    featured: false, 
    description: 'Linha forte e sustentável feita com biopolímeros 100% biodegradáveis.' 
  },
  { 
    id: 7, 
    name: 'Kit de Montagem de Iscas com Componentes PLA', 
    price: 49.90, 
    category: 'pesca', 
    subcategory: 'kits', 
    image: 'https://placehold.co/400x300/10B981/ffffff?text=Kit+Iscas', 
    featured: true, 
    description: 'Kit completo de montagem de iscas ecológicas com peças feitas em PLA.' 
  },
  { 
    id: 8, 
    name: 'Chumbadas Ecológicas de Argila e Ferro', 
    price: 14.90, 
    category: 'pesca', 
    subcategory: 'acessorios', 
    image: 'https://placehold.co/400x300/10B981/ffffff?text=Chumbadas+Eco', 
    featured: false, 
    description: 'Substitui o chumbo tradicional por materiais não tóxicos e sustentáveis.' 
  },
  { 
    id: 9, 
    name: 'Alicate com Cabo de PLA Reforçado', 
    price: 34.90, 
    category: 'pesca', 
    subcategory: 'ferramentas', 
    image: 'https://placehold.co/400x300/10B981/ffffff?text=Alicate+PLA', 
    featured: false, 
    description: 'Ferramenta leve e sustentável com cabo em PLA reforçado com fibras naturais.' 
  },
  { 
    id: 10, 
    name: 'Porta-Iscas Térmico de Bioplástico', 
    price: 59.00, 
    category: 'pesca', 
    subcategory: 'iscas', 
    image: 'https://placehold.co/400x300/10B981/ffffff?text=Porta+Iscas', 
    featured: true, 
    description: 'Mantém suas iscas na temperatura ideal com material isolante ecológico.' 
  },
  { 
    id: 11, 
    name: 'Suporte Dobrável de Bambu para Equipamentos', 
    price: 79.90, 
    category: 'pesca', 
    subcategory: 'equipamentos', 
    image: 'https://placehold.co/400x300/10B981/ffffff?text=Suporte+Bambu', 
    featured: false, 
    description: 'Estrutura dobrável e leve feita de bambu certificado.' 
  },
  { 
    id: 12, 
    name: 'Óculos Polarizados com Armação de PLA', 
    price: 119.90, 
    category: 'pesca', 
    subcategory: 'vestuario', 
    image: 'https://placehold.co/400x300/10B981/ffffff?text=Oculos+Eco', 
    featured: true, 
    description: 'Armação feita de PLA reciclado com lentes polarizadas para pesca esportiva.' 
  },
  { 
    id: 13, 
    name: 'Camiseta UV com Fibras Recicladas', 
    price: 89.90, 
    category: 'pesca', 
    subcategory: 'vestuario', 
    image: 'https://placehold.co/400x300/10B981/ffffff?text=Camiseta+UV', 
    featured: false, 
    description: 'Proteção solar e conforto térmico com tecido feito de PET reciclado.' 
  },
  { 
    id: 14, 
    name: 'Mochila de Pesca em Lona Reciclada', 
    price: 149.90, 
    category: 'pesca', 
    subcategory: 'acessorios', 
    image: 'https://placehold.co/400x300/10B981/ffffff?text=Mochila+Eco', 
    featured: true, 
    description: 'Mochila resistente e ecológica feita com lona reciclada de alta durabilidade.' 
  },
  { 
    id: 15, 
    name: 'Copo Térmico Compostável de PLA', 
    price: 29.90, 
    category: 'pesca', 
    subcategory: 'acessorios', 
    image: 'https://placehold.co/400x300/10B981/ffffff?text=Copo+PLA', 
    featured: false, 
    description: 'Copo térmico feito com PLA compostável e fibras vegetais.' 
  },
];


// Dados de mock para FAQ
const mockFaq = [
    { question: 'Quais são os métodos de pagamento aceitos?', answer: 'Aceitamos cartões de crédito (Visa, Mastercard, Elo), boleto bancário e Pix. Todas as transações são seguras.' },
    { question: 'Qual é o prazo de entrega?', answer: 'O prazo de entrega varia de 5 a 15 dias úteis, dependendo da sua localização e do tipo de frete escolhido.' },
    { question: 'Como faço para trocar ou devolver um produto?', answer: 'Você pode solicitar a troca ou devolução em até 7 dias após o recebimento. Entre em contato conosco na página de Contato para iniciar o processo.' },
    { question: 'Os produtos têm garantia?', answer: 'Sim, todos os nossos produtos possuem garantia mínima de 90 dias contra defeitos de fabricação.' }
];

// Mapeamento de Categorias e Subcategorias
const categoriesMap = {
    pesca: [
        'iscas',
        'acessorios',
        'ferramentas',
        'vestuario',
        'equipamentos',
        'organizacao',
        'linha',
        'anzol',
        'kits'
    ],

    // Caso queira permitir filtrar diretamente pelas subcategorias principais:
    iscas: ['biodegradaveis', 'termicas'],
    acessorios: ['boias', 'mochilas', 'copos'],
    ferramentas: ['alicates'],
    vestuario: ['camisetas', 'oculos'],
    equipamentos: ['suportes', 'estruturas'],
    organizacao: ['caixas'],
    linha: ['biopolimeros'],
    anzol: ['biodegradaveis'],
    kits: ['montagem'],
};


// Função para formatar o preço
const formatPrice = (price) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

// --- Sistema de Dark Mode ---
const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    lucide.createIcons(); // Atualiza ícones
};

const initTheme = () => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.classList.add('dark');
    }
    lucide.createIcons();
};

// Event listener para o botão de tema
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    initTheme();
});

// --- Funções de Renderização ---

// Renderiza um card de produto (agora com clique para página individual)
const renderProductCard = (product) => {
    return `
        <div class="product-card bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer" onclick="showProductDetail(${product.id})">
            <img src="${product.image}" alt="Imagem do produto ${product.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white truncate">${product.name}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">${product.description}</p>
                <p class="text-xl font-bold text-primary mb-3">${formatPrice(product.price)}</p>
                <button class="w-full inline-flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-orange-600 transition duration-150">
                    <i data-lucide="shopping-bag" class="w-4 h-4 mr-2"></i>
                    Ver Detalhes
                </button>
            </div>
        </div>
    `;
};

// Renderiza a lista de produtos (página de produtos)
const renderProductList = (products) => {
    const productListContainer = document.getElementById('product-list');
    productListContainer.innerHTML = products.map(renderProductCard).join('');
    lucide.createIcons(); // Re-renderiza ícones após injeção de HTML
};

// Renderiza os produtos em destaque (página inicial)
const renderFeaturedProducts = () => {
    const featuredProducts = mockProducts.filter(p => p.featured);
    const featuredContainer = document.getElementById('featured-products');
    featuredContainer.innerHTML = featuredProducts.map(renderProductCard).join('');
    lucide.createIcons();
};

// Renderiza a lista de FAQ
const renderFaq = () => {
    const faqListContainer = document.getElementById('faq-list');
    faqListContainer.innerHTML = mockFaq.map((item, index) => `
        <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
            <button class="flex justify-between items-center w-full p-4 text-left font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-150" onclick="toggleFaq(${index})">
                <span>${item.question}</span>
                <i id="faq-icon-${index}" data-lucide="chevron-down" class="w-5 h-5 transition-transform duration-300"></i>
            </button>
            <div id="faq-answer-${index}" class="p-4 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 hidden">
                ${item.answer}
            </div>
        </div>
    `).join('');
    lucide.createIcons();
};

// --- Funções de Navegação e Interação ---

// Função para alternar a visibilidade das páginas
const showPage = (pageId) => {
    document.querySelectorAll('.page-content').forEach(page => {
        page.style.display = 'none';
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.style.display = 'block';
        targetPage.classList.add('active');
    }
    window.scrollTo(0, 0); // Rola para o topo ao trocar de página

    // Ações específicas ao trocar de página
    if (pageId === 'products') {
        filterProducts(); // Garante que a lista de produtos seja renderizada
    } else if (pageId === 'cart') {
        updateCartView(); // Atualiza a visualização do carrinho
    }
};

// Função para alternar o menu mobile
const toggleMobileMenu = () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
};

// Função para alternar modais (Login/Cadastro)
const toggleModal = (modalId, show) => {
    const modal = document.getElementById(modalId);
    if (show) {
        modal.classList.remove('hidden');
        setTimeout(() => modal.style.opacity = '1', 10);
        // Garante que o formulário de login seja o padrão ao abrir
        switchAuthForm('login');
    } else {
        modal.style.opacity = '0';
        setTimeout(() => modal.classList.add('hidden'), 300);
    }
};

// Alterna entre formulários de Login e Cadastro
const switchAuthForm = (type) => {
    const loginContainer = document.getElementById('login-form-container');
    const registerContainer = document.getElementById('register-form-container');
    
    if (type === 'login') {
        loginContainer.classList.remove('hidden');
        registerContainer.classList.add('hidden');
        document.getElementById('modal-title').innerText = 'Login';
    } else {
        loginContainer.classList.add('hidden');
        registerContainer.classList.remove('hidden');
        document.getElementById('modal-title').innerText = 'Cadastro';
    }
};

// Função para alternar a resposta do FAQ
const toggleFaq = (index) => {
    const answer = document.getElementById(`faq-answer-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);

    answer.classList.toggle('hidden');
    if (answer.classList.contains('hidden')) {
        icon.style.transform = 'rotate(0deg)';
    } else {
        icon.style.transform = 'rotate(180deg)';
    }
};

// --- Função de Busca ---
const performSearch = () => {
    const query = (document.getElementById('search-input') || document.getElementById('mobile-search-input'))?.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    
    if (!query || !query.trim()) {
        // Se a busca estiver vazia, volta para a página inicial ou produtos
        if (document.getElementById('products').classList.contains('active')) {
            filterProducts(); // restaura filtros
        } else {
            showPage('home');
        }
        return;
    }

    const results = mockProducts.filter(product => 
        product.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(query) ||
        product.description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(query)
    );

    // Remove resultados antigos se existirem
    const oldResults = document.getElementById('search-results');
    if (oldResults) oldResults.remove();

    // Cria container de resultados
    const resultsSection = document.createElement('section');
    resultsSection.id = 'search-results';
    resultsSection.className = 'page-content active';
    resultsSection.innerHTML = `
        <div class="mb-6 flex items-center justify-between">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
                Resultados para "<span class="text-primary">${(document.getElementById('search-input') || document.getElementById('mobile-search-input')).value}</span>"
                <span class="text-lg font-normal text-gray-600 dark:text-gray-400">(${results.length} encontrados)</span>
            </h1>
            <button onclick="clearSearch()" class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 underline">
                Limpar busca
            </button>
        </div>
        ${results.length === 0 
            ? '<p class="text-center text-gray-500 dark:text-gray-400 py-12 text-lg">Nenhum produto encontrado. Tente outra palavra-chave.</p>'
            : `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                 ${results.map(renderProductCard).join('')}
               </div>`
        }
    `;

    // Esconde todas as páginas e mostra os resultados
    document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
    document.querySelector('main').insertBefore(resultsSection, document.querySelector('main').firstChild);
    lucide.createIcons();
};

// Limpa a busca e volta ao normal
const clearSearch = () => {
    const input = document.getElementById('search-input') || document.getElementById('mobile-search-input');
    if (input) input.value = '';
    const results = document.getElementById('search-results');
    if (results) results.remove();
    showPage('home');
};

// --- Página Individual de Produto ---
const showProductDetail = (productId) => {
    currentProduct = mockProducts.find(p => p.id === productId);
    if (!currentProduct) return;

    lastPage = document.querySelector('.page-content.active')?.id || 'home';

    const detailSection = document.getElementById('product-detail');
    detailSection.innerHTML = `
        <button onclick="showPage(lastPage)" class="m-6 text-primary hover:underline flex items-center text-lg font-medium">
            <i data-lucide="arrow-left" class="w-5 h-5 mr-2"></i>
            Voltar
        </button>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 pb-12">
            <!-- Imagem Principal -->
            <div class="space-y-4">
                <img src="${currentProduct.image}" alt="${currentProduct.name}" 
                     class="w-full rounded-xl shadow-lg cursor-zoom-in" onclick="openImageModal('${currentProduct.image}')">
                <div class="grid grid-cols-4 gap-2">
                    ${[1,2,3,4].map(i => `
                        <img src="${currentProduct.image}" alt="Miniatura ${i}" 
                             class="rounded-lg cursor-pointer opacity-70 hover:opacity-100 transition"
                             onclick="document.querySelector('#product-detail img:first-of-type').src = '${currentProduct.image}'">
                    `).join('')}
                </div>
            </div>

            <!-- Informações do Produto -->
            <div class="space-y-6">
                <div>
                    <h1 class="text-4xl font-bold text-gray-900 dark:text-white">${currentProduct.name}</h1>
                    <p class="text-3xl font-bold text-primary mt-4">${formatPrice(currentProduct.price)}</p>
                </div>

                <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    ${currentProduct.description}
                </p>

                <div class="flex items-center space-x-4">
                    <div class="flex items-center">
                        ${'★'.repeat(4)}☆ <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">4.8 (127 avaliações)</span>
                    </div>
                </div>

                <div class="flex items-center space-x-4 py-6 border-t border-b border-gray-200 dark:border-gray-700">
                    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Quantidade:</span>
                    <div class="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                        <button onclick="updateQuantity(-1)" class="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 w-12 text-center">-</button>
                        <span id="qty-display" class="px-6 font-semibold text-gray-900 dark:text-white">1</span>
                        <button onclick="updateQuantity(1)" class="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 w-12 text-center">+</button>
                    </div>
                </div>

                <div class="flex space-x-4">
                    <button onclick="addToCart(${currentProduct.id}, document.getElementById('qty-display').innerText)" 
                            class="flex-1 py-4 bg-primary hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition flex items-center justify-center">
                        <i data-lucide="shopping-bag" class="w-6 h-6 mr-3"></i>
                        Adicionar ao Carrinho
                    </button>
                    <button class="p-4 border-2 border-primary rounded-xl hover:bg-primary/10 dark:hover:bg-primary/20 transition">
                        <i data-lucide="heart" class="w-6 h-6 text-primary"></i>
                    </button>
                </div>

                <div class="pt-8">
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Produtos Relacionados</h3>
                    <div class="grid grid-cols-2 gap-4">
                        ${mockProducts.filter(p => p.category === currentProduct.category && p.id !== productId).slice(0,2).map(p => `
                            <div onclick="showProductDetail(${p.id}); event.stopPropagation();" class="cursor-pointer group p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                                <img src="${p.image}" class="w-full rounded-lg group-hover:shadow-lg transition h-20 object-cover">
                                <p class="mt-2 font-medium text-sm text-gray-900 dark:text-white truncate">${p.name}</p>
                                <p class="text-primary font-bold text-sm">${formatPrice(p.price)}</p>
                            </div>
                        `).join('') || '<p class="col-span-2 text-gray-500 dark:text-gray-400">Nenhum produto relacionado.</p>'}
                    </div>
                </div>
            </div>
        </div>
    `;

    showPage('product-detail');
    lucide.createIcons();
    window.scrollTo(0, 0);
};

// Funções auxiliares para página de produto
const updateQuantity = (change) => {
    const qty = document.getElementById('qty-display');
    if (!qty) return;
    let val = parseInt(qty.innerText) + change;
    if (val < 1) val = 1;
    qty.innerText = val;
};

const openImageModal = (src) => {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-90 z-[60] flex items-center justify-center p-4';
    modal.innerHTML = `
        <img src="${src}" class="max-w-full max-h-full rounded-lg">
        <button onclick="this.parentElement.remove()" class="absolute top-4 right-4 text-white text-3xl">&times;</button>
    `;
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    document.body.appendChild(modal);
};

// --- Funções de E-commerce (Carrinho e Filtros) ---

// Manipula a seleção de categoria/subcategoria
const filterProducts = () => {
    const categorySelect = document.getElementById('category-select');
    const subcategorySelect = document.getElementById('subcategory-select');
    const selectedCategory = categorySelect.value;
    const selectedSubcategory = subcategorySelect.value;
    
    // 1. Atualiza Subcategorias
    subcategorySelect.innerHTML = '<option value="all">Todas</option>';
    if (selectedCategory !== 'all') {
        subcategorySelect.disabled = false;
        categoriesMap[selectedCategory].forEach(sub => {
            const option = document.createElement('option');
            option.value = sub;
            option.textContent = sub.charAt(0).toUpperCase() + sub.slice(1);
            subcategorySelect.appendChild(option);
        });
    } else {
        subcategorySelect.disabled = true;
    }

    // 2. Filtra Produtos
    let filteredProducts = mockProducts;

    if (selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
    }
    if (selectedSubcategory !== 'all' && selectedSubcategory) {
        filteredProducts = filteredProducts.filter(p => p.subcategory === selectedSubcategory);
    }

    renderProductList(filteredProducts);
};

// Adiciona um produto ao carrinho (com quantidade opcional)
const addToCart = (productId, quantity = 1) => {
    const product = mockProducts.find(p => p.id === productId);
    if (product) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity += parseInt(quantity);
        } else {
            cart.push({ ...product, quantity: parseInt(quantity) });
        }
        updateCartCount();
        showCustomMessage(`"${product.name}" adicionado ao carrinho!`, 'success');
    }
};

// Remove um item do carrinho
const removeFromCart = (productId) => {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartView();
    showCustomMessage('Item removido do carrinho.', 'warning');
};

// Atualiza a contagem de itens no ícone do carrinho
const updateCartCount = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').innerText = totalItems;
};

// Renderiza a lista de itens no carrinho
const updateCartView = () => {
    const container = document.getElementById('cart-items-container');
    const summary = document.getElementById('cart-summary');
    const emptyMessage = document.getElementById('empty-cart-message');
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = '';
        emptyMessage.classList.remove('hidden');
        summary.classList.add('hidden');
        return;
    }

    emptyMessage.classList.add('hidden');
    summary.classList.remove('hidden');

    const cartHtml = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
            <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                <div class="flex items-center space-x-4">
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
                    <div>
                        <h4 class="font-semibold text-gray-900 dark:text-white">${item.name}</h4>
                        <p class="text-sm text-gray-500 dark:text-gray-400">${formatPrice(item.price)} x ${item.quantity}</p>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <span class="text-lg font-bold text-gray-800 dark:text-gray-200">${formatPrice(itemTotal)}</span>
                    <button onclick="removeFromCart(${item.id})" class="p-2 text-red-500 hover:text-red-700 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition duration-150">
                        <i data-lucide="trash-2" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = cartHtml;
    document.getElementById('cart-total').innerText = formatPrice(total);
    lucide.createIcons();
};

// Finalizar Compra
const checkout = () => {
    if (cart.length === 0) {
        showCustomMessage('Seu carrinho está vazio!', 'error');
        return;
    }
    
    showCustomMessage(`Compra finalizada com sucesso! Total: ${document.getElementById('cart-total').innerText}. Obrigado!`, 'success');
    cart = []; // Limpa o carrinho
    updateCartCount();
    updateCartView();
    showPage('home');
};

// --- Funções de Formulário e Mensagens ---

// Manipulador de Login e Cadastro
const handleAuth = (event, type) => {
    event.preventDefault();
    const email = document.getElementById(`${type}-email`).value;
    const password = document.getElementById(`${type}-password`).value;

    // Simulação de lógica de autenticação
    if (email && password) {
        const action = type === 'login' ? 'Login' : 'Cadastro';
        showCustomMessage(`${action} realizado com sucesso para ${email}!`, 'success');
        toggleModal('login-modal', false);
    } else {
        showCustomMessage('Por favor, preencha todos os campos.', 'error');
    }
};

// Manipulador do Formulário de Contato
const handleContactForm = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    // Simulação de envio
    showCustomMessage(`Obrigado, ${name}! Sua mensagem foi enviada.`, 'success');
    event.target.reset(); // Limpa o formulário
};

// Manipulador de Newsletter
const handleNewsletter = (event) => {
    event.preventDefault();
    // Simulação de cadastro
    showCustomMessage('Email cadastrado na Newsletter com sucesso!', 'success');
    event.target.reset(); // Limpa o campo
};

// Exibe mensagens temporárias na tela (substitui alert())
const showCustomMessage = (message, type = 'info') => {
    const messageArea = document.getElementById('message-area');
    const colorMap = {
        'success': 'bg-green-500',
        'error': 'bg-red-500',
        'warning': 'bg-yellow-500',
        'info': 'bg-blue-500',
    };

    const iconMap = {
        'success': 'check-circle',
        'error': 'x-octagon',
        'warning': 'alert-triangle',
        'info': 'info',
    };

    const messageElement = document.createElement('div');
    messageElement.className = `${colorMap[type]} text-white p-3 rounded-lg shadow-xl mb-2 flex items-center space-x-2 transition-opacity duration-300 transform translate-y-0 opacity-100 max-w-sm`;
    messageElement.innerHTML = `
        <i data-lucide="${iconMap[type]}" class="w-5 h-5 flex-shrink-0"></i>
        <span>${message}</span>
    `;

    messageArea.appendChild(messageElement);
    lucide.createIcons();

    // Auto-destrói a mensagem após 5 segundos
    setTimeout(() => {
        messageElement.style.opacity = '0';
        messageElement.style.transform = 'translateY(10px)';
        setTimeout(() => messageElement.remove(), 300);
    }, 5000);
};

// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedProducts();
    renderFaq();
    // Inicia na página inicial
    showPage('home');
});
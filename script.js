// Aqui inicia o script para deixar com interatividade o menu hambúrguer da página principal 

const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.querySelector('.menu-items');

menuIcon.addEventListener('click', (event) => {
    menuItems.classList.toggle('show');
    event.stopPropagation(); // Impede que o evento de clique se propague para o documento
});

// Adiciona um evento de clique ao documento para fechar o menu
document.addEventListener('click', (event) => {
    if (menuItems.classList.contains('show')) {
        menuItems.classList.remove('show');
    }
});

// Impede que o evento de clique dentro do menu se propague para o documento
menuItems.addEventListener('click', (event) => {
    event.stopPropagation();
});


// Aqui termina o script para deixar com interatividade o menu hambúrguer da página principal


// Aqui inicia o script para deixar com interatividade na pagina Alimentos Saudáveis

// ordena os alimentos do menos preço para o maior

document.getElementById('sortOption').addEventListener('change', function () {
    const selectedOption = this.value;
    const products = document.querySelectorAll('.product-images figure'); // Selecionando cada produto dentro de .product-images

    const sortedProducts = Array.from(products).sort((a, b) => {
        if (selectedOption === 'productName') {
            const nameA = a.querySelector('h4').textContent; // Selecionando o nome do produto pelo elemento h4
            const nameB = b.querySelector('h4').textContent;
            return nameA.localeCompare(nameB);
        } else if (selectedOption === 'price') {
            const priceA = parseFloat(a.querySelector('p[style*="color: rgb(236,103,14)"]').textContent.replace('R$', '').trim()); // Selecionando o preço pelo estilo específico
            const priceB = parseFloat(b.querySelector('p[style*="color: rgb(236,103,14)"]').textContent.replace('R$', '').trim());
            return priceA - priceB;
        }
    });

    const container = document.querySelector('.product-images'); // Selecionando o container dos produtos
    sortedProducts.forEach(product => container.appendChild(product));
});


// Compo de busca 2ª Cabeçalho

  

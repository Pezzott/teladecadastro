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
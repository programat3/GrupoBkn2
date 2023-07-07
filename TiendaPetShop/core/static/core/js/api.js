//API ropa
$(document).ready(function () {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            const cardsContainer = document.getElementById('cards-ropa');

            products.forEach(product => {
                const card = document.createElement('div');
                card.classList.add('card-api');
                card.setAttribute('id', 'cardRopa');

                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.title;
                card.appendChild(img);

                const title = document.createElement('h4');
                title.textContent = product.title;
                card.appendChild(title);

                const price = document.createElement('p');
                price.textContent = `$${product.price.toFixed(2)}`;
                card.appendChild(price);

                const description = document.createElement('p2');
                description.textContent = product.description;
                card.appendChild(description);

                const button = document.createElement('a');
                button.classList.add('btn');
                button.textContent = 'Comprar';
                button.href = '#';
                card.appendChild(button);
                cardsContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos de la API', error);
        });
});
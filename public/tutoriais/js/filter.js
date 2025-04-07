document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const filterSelect = document.getElementById('filter-select');
    const cards = document.querySelectorAll('#tutoriais-cards .card');

    function filterCards() {
        const searchText = searchInput.value.toLowerCase();
        const selectedCategory = filterSelect.value;

        cards.forEach(card => {
            const title = card.dataset.titulo.toLowerCase();
            const category = card.dataset.categoria;

            const titleMatch = title.includes(searchText);
            const categoryMatch = selectedCategory === 'todos' || category === selectedCategory;

            if (titleMatch && categoryMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', filterCards);
    filterSelect.addEventListener('change', filterCards);
});
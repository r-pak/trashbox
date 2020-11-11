(() => {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOMContentLoaded');

        let animation = bodymovin.loadAnimation({
            container: document.getElementById('bm'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: './src/data.json',
        });
    });
})();

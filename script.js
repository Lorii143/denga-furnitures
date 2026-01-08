document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('button');
    if (btn) {
        btn.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const keys = document.querySelectorAll('.keys button');

    keys.forEach(key => {
        key.addEventListener('click', function () {
            const keyValue = this.textContent;
            
            if (keyValue === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else if (keyValue === 'C') {
                display.value = '';
            } else {
                display.value += keyValue;
            }
        });
    });
});

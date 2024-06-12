function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        }

        const controls = document.querySelector('#controls');
        const input = controls.querySelector('input');
        const createButton = controls.querySelector('[data-create]');
        const destroyButton = controls.querySelector('[data-destroy]');
        const boxesContainer = document.querySelector('#boxes');

        function createBoxes(amount) {
            destroyBoxes();
            const fragment = document.createDocumentFragment();
            let boxSize = 30;

            for (let i = 0; i < amount; i++) {
                const box = document.createElement('div');
                box.classList.add('box');
                box.style.width = `${boxSize}px`;
                box.style.height = `${boxSize}px`;
                box.style.backgroundColor = getRandomHexColor();
                fragment.appendChild(box);
                boxSize += 10;
            }

            boxesContainer.appendChild(fragment);
        }

        function destroyBoxes() {
            boxesContainer.innerHTML = '';
        }

        createButton.addEventListener('click', () => {
            const amount = parseInt(input.value.trim(), 10);

            if (amount >= 1 && amount <= 100) {
                createBoxes(amount);
            } else {
                alert('Please enter a number between 1 and 100');
            }

            input.value = '';
        });

        destroyButton.addEventListener('click', destroyBoxes);
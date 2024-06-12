document.getElementById('name-input').addEventListener('input', function () {
            const input = this.value.trim();
            document.getElementById('name-output').textContent = input || 'Anonymous';
        });
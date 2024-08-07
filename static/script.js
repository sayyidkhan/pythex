document.addEventListener('DOMContentLoaded', () => {
    const regexInput = document.getElementById('regex');
    const testStringInput = document.getElementById('test-string');
    const matchButton = document.getElementById('match');
    const matchResult = document.getElementById('match-result');
    const matchCaptures = document.getElementById('match-captures');
    const options = ['ignorecase', 'multiline', 'dotall', 'verbose'];

    matchButton.addEventListener('click', async () => {
        const regex = regexInput.value;
        const testString = testStringInput.value;
        const selectedOptions = options.filter(option =>
            document.getElementById(option).classList.contains('selected')
        );

        try {
            const response = await fetch('/match', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ regex, testString, options: selectedOptions }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            matchResult.textContent = data.matches.join('\n');
            matchCaptures.textContent = JSON.stringify(data.groups, null, 2);
        } catch (error) {
            console.error('Error:', error);
            matchResult.textContent = 'An error occurred while matching.';
            matchCaptures.textContent = '';
        }
    });

    options.forEach(option => {
        const button = document.getElementById(option);
        button.addEventListener('click', () => {
            button.classList.toggle('selected');
        });
    });
});
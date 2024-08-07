document.addEventListener('DOMContentLoaded', () => {
    const regexInput = document.getElementById('regex');
    const testStringInput = document.getElementById('test-string');
    const matchResult = document.getElementById('match-result');
    const matchCaptures = document.getElementById('match-captures');
    const options = ['ignorecase', 'multiline', 'dotall', 'verbose'];

    let debounceTimer;

    const debounce = (func, delay) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(func, delay);
    };

    const updateMatches = async () => {
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
            displayMatches(data.matches, testString);
            matchCaptures.textContent = JSON.stringify(data.groups, null, 2);
        } catch (error) {
            console.error('Error:', error);
            matchResult.textContent = 'An error occurred while matching.';
            matchCaptures.textContent = '';
        }
    };

    const displayMatches = (matches, testString) => {
        let highlightedString = testString;
        matches.forEach(match => {
            highlightedString = highlightedString.replace(match, `<span class="highlight">${match}</span>`);
        });
        matchResult.innerHTML = highlightedString;
    };

    regexInput.addEventListener('input', () => debounce(updateMatches, 1000));
    testStringInput.addEventListener('input', () => debounce(updateMatches, 1000));

    options.forEach(option => {
        const button = document.getElementById(option);
        button.addEventListener('click', () => {
            button.classList.toggle('selected');
            updateMatches();
        });
    });

    // Initial match on page load
    updateMatches();
});
document.getElementById('password-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const userInput = document.getElementById('input-password').value;
    const modifiedSentenceNoSpaces = userInput.replace(/\s/g, "");

    const numToRemove = Math.floor(Math.random() * 3) + 1;
    const positionsToRemove = new Array(numToRemove).fill().map(() => Math.floor(Math.random() * modifiedSentenceNoSpaces.length));
    const modifiedSentenceRemove = modifiedSentenceNoSpaces.split('').filter((char, idx) => !positionsToRemove.includes(idx)).join('');
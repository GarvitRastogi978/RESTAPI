document.getElementById('apiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const inputText = document.getElementById('inputText').value;

    fetch('https://your-api-url.com/bfhl', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            input: inputText
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error('Error:', error));
});

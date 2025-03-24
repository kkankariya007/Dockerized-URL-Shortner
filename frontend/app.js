const form = document.getElementById('url-form');
const urlInput = document.getElementById('url-input');
const resultSection = document.getElementById('result');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = urlInput.value;

    if (!url) {
        alert('Please enter a URL to shorten.');
        return;
    }
    console.log(url);
    try {
        const response = await fetch('http://localhost:8000/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        });

        const data = await response.json();
        // console.log("Hello: "+data.shortUrl);
        if (response.ok) {
            resultSection.innerHTML = `Shortened URL: <a href="http://localhost:8000/url/${data.shortUrl}" target="_blank">http://localhost:8000/url/${data.shortUrl}</a>`;
        } else {
            resultSection.innerHTML = `Error: ${data.message}`;
        }
    } catch (error) {
        resultSection.innerHTML = `Error: ${error.message}`;
    }
});
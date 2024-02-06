function search() {
    var searchTerm = document.getElementById('search-input').value;
    var resultsContainer = document.getElementById('search-results');
    
    // Clear previous search results
    resultsContainer.innerHTML = '';

    // Perform the actual search logic (replace with your own logic)
    // For simplicity, we'll just display a sample result
    var result = {
        title: 'Example Result',
        url: 'https://example.com',
        summary: 'This is a sample result for the search term: ' + searchTerm
    };

    // Display the search result
    displayResult(result);
}

function displayResult(result) {
    var resultsContainer = document.getElementById('search-results');

    var resultElement = document.createElement('div');
    resultElement.innerHTML = `
        <h3><a href="${result.url}" target="_blank">${result.title}</a></h3>
        <p>${result.summary}</p>
    `;

    resultsContainer.appendChild(resultElement);
}

function showRandomQuote() {
    fetch('https://dummyjson.com/quotes/random')
        .then(Response => {
            return Response.json()
        })
        .then(qu => {                // qu is data about qutes from api
            const display = document.getElementById('quoteDisplay')
            display.textContent = `"${qu.quote}"`
        })

}

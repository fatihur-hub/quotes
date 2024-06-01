$(document).ready(function () {
    var category = 'happiness';
    var quotesApiKey = '3vMz3+IGx2gU2GdzSbFRtQ==d1cBAPOhkyg1rdGH';

    // Fungsi untuk mendapatkan kutipan
    function fetchQuote() {
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
            headers: { 'X-Api-Key': quotesApiKey },
            contentType: 'application/json',
            success: function(result) {
                var quote = result[0].quote;
                var author = result[0].author;

                $('#quote-block').text(quote);
                $('#quote-author').text('- ' + author);
            },
            error: function(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
                $('#quote-block').html('<p>Error fetching quotes. Please try again later.</p>');
                $('#quote-author').text('');
            }
        });
    }

    // Memuat kutipan ketika halaman dibuka
    fetchQuote();
});

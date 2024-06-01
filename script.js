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

    // Fungsi untuk mengunduh card sebagai gambar
    function downloadQuoteAsImage() {
        html2canvas(document.querySelector("#quote-card")).then(canvas => {
            var link = document.createElement('a');
            link.download = 'quote.png';
            link.href = canvas.toDataURL("image/png");
            link.click();
        });
    }

    // Fungsi untuk berbagi kutipan ke WhatsApp
    function shareQuoteOnWhatsApp() {
        var quote = $('#quote-block').text();
        var author = $('#quote-author').text().slice(2); // Menghapus tanda '-' dari awal penulis

        var message = encodeURIComponent('"' + quote + '" - ' + author);
        var whatsappUrl = 'https://api.whatsapp.com/send?text=' + message;
        window.open(whatsappUrl, '_blank');
    }

    // Memuat kutipan ketika halaman dibuka
    fetchQuote();

    // Menambahkan event listener untuk tombol download
    $('#download-btn').on('click', downloadQuoteAsImage);

    // Menambahkan event listener untuk tombol berbagi ke WhatsApp
    $('#share-btn').on('click', shareQuoteOnWhatsApp);
});

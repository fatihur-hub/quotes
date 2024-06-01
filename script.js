$(document).ready(function () {
    var category = 'happiness';
    var apiKey = '3vMz3+IGx2gU2GdzSbFRtQ==d1cBAPOhkyg1rdGH';

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': apiKey },
        contentType: 'application/json',
        success: function(result) {
            // Menampilkan hasil kutipan di dalam elemen dengan ID 'quotes-container'
            var quote = result[0].quote;
            var author = result[0].author;

            var quoteLines = quote.split('. ');

            var quoteBlock = $('#quote-block');
            var translationBlock = $('#quote-translation');
            quoteBlock.empty();
            translationBlock.empty();

            $.each(quoteLines, function(index, line) {
                if (index === quoteLines.length - 1) {
                    quoteBlock.append('<p class=" inline-block px-2">' + line + '</p>');
                } else {
                    quoteBlock.append('<p>' + line + '</p>');
                }
            });

            // Tambahkan terjemahan manual di sini
            
            $('#quote-author').text('-'+ author+'-');
        },
        error: function(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
            // Tangani kesalahan yang mungkin terjadi saat membuat permintaan AJAX
            $('#quote-block').html('<p>Error fetching quotes. Please try again later.</p>');
            $('#quote-author').text('');
            $('#quote-translation').html('');
        }
    });
});

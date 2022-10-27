
$(document).ready(function () {
    const form  = document.getElementById('search_form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        var keyword = form.elements['search_keyword'].value

        console.log(keyword)

        $.ajax({
            type: "POST",
            url: "../search",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(keyword),
            success: function () {
                console.log("submitted")
                window.location.href= `../search_page`
            },
            error: function(jq,status,message) {
                alert('A jQuery error has occurred. Status: ' + status + ' - Message: ' + message);
            }
        });

    });
})
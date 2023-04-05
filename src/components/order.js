$(function () {
    var addNumber = 1;
    $("#addArticle").on('click', function (e) {
        e.preventDefault();
        var p = document.getElementById('product_0');
        var product = p.cloneNode(true);
        // $product.data( "indexProduct", addNumber);
        product.id = "product_"+addNumber;
        product.setAttribute("data-index-product", addNumber);

        $('#formOrder').append(' <div class="form-group"  id="article_' + addNumber + '">\n' +
            '<a href="#" class="minus" id="minus' + addNumber + '" ><span class="icon-minus" style="color: red"></span></a> \n'+ product.outerHTML +
            ' Qte :\n' + '<input class="input qte" data-index-qte="' + addNumber + '" type="number" id="qte_' + addNumber + '"\n' + ' min="1" max="100" style="width: 20%"/>\n' +
            ' Prix: <span class="price" data-index-qte="' + addNumber + '" id="price_' + addNumber + '" style="width: 20%">0</span> MAD\n' +
            ' </div>');
        $(".minus").off('click');
        $(".minus").on('click', function (e) {
            e.preventDefault();
            console.log($(this));
            var index = $(this).attr('id').replace('minus', '');
            $('#article_' + index).remove();
            getTotalPrice();
        });
        $(".product").off('keyup change');
        $(".product").on('keyup change', function (e) {
            console.log($(this).data('index-product'));
            getPrice($(this).data('index-product'));
            getTotalPrice();
        });
        $(".qte").off('keyup change');
        $(".qte").on('keyup change', function (e) {
            console.log($(this).data('index-qte'));
            getPrice($(this).data('index-qte'));
            getTotalPrice();
        });
    });
    $(".product").on('keyup change', function (e) {
        getPrice($(this).data('index-product'));
        getTotalPrice();
    });
    $(".qte").on('keyup change', function (e) {
        getPrice($(this).data('index-qte'));
        getTotalPrice();
    });
    $(".sendOrder").on('click', function (e) {
        var body = 'Bonjour je souhaite passer une commande sur le site ROYAL.\n' + 'Détail de la commande :\n\n' + 'Nom :' + $('#nom').val() + '\n' + 'Prénom :' + $('#prenom').val() + '\n' + 'Email :' + $('#email').val() + '\n\n';
        var products = '';
        var prixTotal = 0;
        $('.product').each(function () {
            var index = $(this).data('index-product');
            var product = $(this).children("option:selected").val();
            var qte = $('#qte_' + index).val();
            var price = $('#price_' + index).html();
            products += 'Article ' + (index + 1) + ' :\n' + 'Nom du produit : ' + product + '\n' + 'Quantité: ' + qte + '\n' + 'Prix: ' + price + ' MAD\n\n';
            prixTotal = prixTotal + parseInt(price);
        });
        prixTotal = 'Prix total : ' + prixTotal + ' MAD';
        body = body + products + prixTotal + '\n\nMERCI.';
        var a = document.createElement('a');
        a.target = "_blank";
        var whatsuppNum = $('#whatsuppNum').text().replace('+','');
        a.href = 'https://wa.me/'+whatsuppNum+'?text=' + encodeURIComponent(body);
        a.click();
    });
    function getPrice(index) {
        var productPrice = $('#product_' + index).find(":selected").data('article-price');
        var qte = $('#qte_' + index).val();
        $('#price_' + index).html(parseInt(productPrice) * parseInt(qte));
    }

    function getTotalPrice() {
        var totalPrice = 0;
        $('.price').each(function () {
            totalPrice += parseInt($(this).html());
        });
        $('.totalPrice').html(totalPrice + ' MAD');
    }

    // $('#displayLivraison').on('click',function (e) {
    //     e.preventDefault();
    //     var x = document.getElementById("livraison");
    //     if (x.style.display === "none") {
		// 	$(this).html('<span class="icon-arrow-right"></span> Cacher les modalités de la livraison et du réglement');
    //         x.style.display = "block";
    //     } else {
		// 	$(this).html('<span class="icon-arrow-right"></span> Voir les modalités de la livraison et du réglement');
    //         x.style.display = "none";
    //     }
    // });
});
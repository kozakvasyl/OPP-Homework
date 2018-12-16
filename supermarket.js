console.log('Task 1. Supermarket...');

class Supermarket {
    constructor(name, place, weight, price, image) {
        this.name = name;
        this.place = place;
        this.price = price;
        this.weight = weight;
        this.image = image;
    }
};

Supermarket.prototype.bill = function(price, weight) {
    var bill = this.price*this.weight;
    return bill;
};

var products = [
    new Supermarket('Apple', 'fruits', 17, 5, 'http://icons.iconarchive.com/icons/bingxueling/fruit-vegetables/256/apple-red-icon.png'),
    new Supermarket('Potato', 'vegetables', 9, 7, 'https://www.freepngimg.com/thumb/potato/5-2-potato-png-clipart-thumb.png'),
    new Supermarket('Cake', 'sweets', 2, 25, 'https://assimdoce.com.br/wp-content/uploads/2016/03/bolo.png'),
    new Supermarket('Сandy', 'sweets', 33, 19, 'https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/10/19171518/Candy-Vector-Free-Transparent.png'),
    new Supermarket('Сhery', 'sweets', 30, 5, 'https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Fruit-PNG/Cherries_PNG_Clipart_Picture-1848659855.png?m=1434276910'),
    new Supermarket('Roll', 'sweets', 21, 6, 'https://www.cobsbread.com/drive/uploads/2018/01/cobs-product-white-bun-650x458.png'),
    new Supermarket('Сandy', 'sweets', 15, 8, ''),
    new Supermarket('Сandy', 'sweets', 15, 8, ''),
    new Supermarket('Сandy', 'sweets', 15, 8, ''),
    new Supermarket('Сandy', 'sweets', 15, 8, ''),
];


function render() {
    var market = document.querySelector('.market');

    for (var i = 0; i < products.length; i++) {
        var prod = document.createElement('div');
        prod.setAttribute('class', 'market-' + products[i].name);

        var boxProducts = market.appendChild(prod);
        boxProducts.classList.add('itemStyle');
        boxProducts.insertAdjacentText('afterbegin', products[i].name + ': weight = ' + products[i].weight + ' kg' + ', price = ' + products[i].price+'grn/1kg');

        var img = document.createElement('img');
        img.setAttribute('src', products[i].image);
        boxProducts.appendChild(img);

        var boxBill = document.createElement('div');
        boxBill.classList.add('billStyle');
        boxBill.insertAdjacentText('afterbegin', 'All items bill: ' + products[i].bill() + 'grn');
        boxProducts.appendChild(boxBill);

    };
};
render();


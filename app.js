var total=0;
var menu=[
    {
        "name":"capuccino",
        "price":"P120.00",
        "image":"capuccino.jfif"
    },
    {
        "name":"FRAPPUCINO",
        "price":"P160.00",
        "image":"frap.jfif"
    }
]

function start(){
    for(var i=0; i<=menu.length-1; i++){
        addMenu(menu[i].name, menu[i].price, menu[i].image)
    }
}
start();

function addItem(name, price) {

total=total+parseFloat(price.replace('P', ''));
document.querySelector('#cart-total').innerHTML = 'P'+total;
var h = `
<div class="side-items row">
        <div class="col-6">
            <div class="cart-title">`+name+`</div>
            <div class="cart-price">`+price+`</div>
        </div>
            <div class="cart-num col-6"><button class="btn btn-secondary cart-plus">+</button>
            <div class="cart-num-content">1</div><button class="btn btn-secondary cart-minus">-</button>
            </div>
        </div>`;

var e = document.createElement('div');
e.innerHTML = h;

    document.querySelector('#cart-items').appendChild(e);
}

function addMenu(name, price, image){
    var h = `
    <div class="card">
    <img src="image/`+image+`">
        <h4>`+name+`</h4>
        <h5>`+price+`</h5>
</div>`;

var e = document.createElement('div');
e.innerHTML = h;

    document.querySelector('#cards').appendChild(e);
}
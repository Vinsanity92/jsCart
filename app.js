var grandTotal;
var tax;
var h;
var total=0; 
var menu=[
    {
        "name":"CAPPUCCINO",
        "price":"P120.00",
        "image":"capuccino.jfif"
    },
    {
        "name":"FRAPPUCINO",
        "price":"P160.00",
        "image":"frap.jfif"
    },
    {
        "name":"LATTE",
        "price":"P100.00",
        "image":"latte.jfif"
    },
    {
        "name":"MOCHA",
        "price":"P100.00",
        "image":"mocca.jpg"
    },
    {
        "name":"COFFEE CAKE",
        "price":"50.00",
        "image":"coffee cake.png"
    },
    {
        "name":"FRESH MANGO JUICE",
        "price":"P150.00",
        "image":"mango-juice.jpg"
    },
    {
        "name":"FRESH APPLE JUICE",
        "price":"P160.00",
        "image":"apple juice.jpg"
    },
]

function start(){
    for(var i=0; i<=menu.length-1; i++){
        addMenu(menu[i].name, menu[i].price, menu[i].image)
    }
}
start();

function addItem(name, price,) {

total=total+parseFloat(price.replace('P', ''));
document.querySelector('#cart-total').innerHTML = 'P'+total;
document.querySelector('#tax-value').innerHTML ='P'+total*0.12;
document.querySelector('#grand-total').innerHTML ='P'+total*0.12.toFixed(2);

var h = `
<div class="side-items row"
            <div class="col-2">`+name+`</div>
            <div id="sub-total col-2">`+price+`</div>
        </div>
            <div class="cart-num col-6"><button class="btn btn-secondary cart-plus">+</button>
            <div class="cart-num-content">1</div><button class="btn btn-secondary cart-minus">-</button>
            </div>
        </div>`;

var e = document.createElement('div');
e.innerHTML = h;

    document.querySelector('#cart-items').appendChild(e)

    
}

function addMenu(name, price, image){
    var h = `
    <div class="card" onclick="addItem('`+name+`','`+price+`')">
    <img src="image/`+image+`"
        <h4>`+name+`</h4>
        <h5>`+price+`</h5>

</div>`;
        

var e = document.createElement('div');
e.innerHTML = h;

    document.querySelector('#cards').appendChild(e);
}

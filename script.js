// Daftar produk dengan gambar
const products = [
    {id: 1, name: 'WONHAE TOPPOKI SNACK',price:2000,img: 'img/wts.jpg'},
    {id: 2, name: 'SIIP',price:2000,img: 'img/sp.jpg'},
    {id: 3, name: 'HELLO PANDA',price:10000,img: 'img/hp.jpg'},
    {id: 4, name: 'PILLOW',price:12000,img: 'img/plw.jpg'},
    {id: 5, name: 'LEMONILO BROWNIES',price:13000,img: 'img/lb.jpg'},



];

// Keranjang belanja
let cart = [];

// Fungsi untuk menampilkan daftar produk
function displayProducts() {
    const productscontainer = document.getElementByid('products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
          <img src="${product.img}" alt="${product.name}>
          <h3>${product.name}</h3>
          <p>Rp ${product.price}</p>
          <button onlick="addToCart(${product.id})">Tambah ke Keranjang</button>
          -;
          productsContainer.appendChild(peoductDiv);
       });
    }

    // fungs untuk menambah produk ke keranjang belanja
    function addToCart(productId){
         const product = products.find(p => p.id === productId);
         const cartItem = cart.fin(item => item.id === productId);

         if (cartItem) { 
             cartItem.quantity += 1;
         } else {
            cart.push({ ...product, quantity: 1});
    }

    updateCart();
}

// fungsi untuk menampilkan isi keranjang belanja
function updateCart() {
const cartItemsContainer = document.getElementbyId('cart-items');
cartItemscontainer.innerHTML = '';

let totalPrice =0;
cart.forEac(item => {
     const listItem = document.createElement('li');
     listItem.textContent = `${Item.name} x ${item.quantity} - Rp ${item.price * item.quantity}`;
     cartItemsContainer.appendChild(listItem);

     totalPrice += item.price * item.quantity;
    });

    document.getElementById('total-price').textContent = totalPrice;
}

//fungsi untuk melakukan checkout
function checkout() {
     if (cart.length === 0) {
     alert('Keranjang Anda kosong.');
     return;
    }

    cost total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cost payment = prompt('Total belanja Anda Rp ${Total}. Masukkan jumlah pembayaran:`);

    if (payment >= total) {
        alert(`Pembayaran berhasil! Kembalian Anda: Rp ${payment - total}`);
        cart = [];
        updateCart();
            } else {
        alert('Uang Anda tidak mencukupi.');
            }
        }

        // Event listener untuk tombol chekout
        document.getElementById('checkout-btn').addEventListener('click , checkout');

        // Tampilkan produk saat halaman dimuat
        displayProducts();


    


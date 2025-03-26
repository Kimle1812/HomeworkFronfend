let products = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 35990000,
        image: 'https://laptopaz.vn/media/product/2484_laptopaz_dell_xps_9520_2.jpg',
        description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'
    },
    {
        id: 2,
        name: 'iPhone 15 Pro Max',
        price: 29990000,
        image: 'https://lh3.googleusercontent.com/w4fEZWQ_oMeAhcimSSdv62UCddwGAiBxFvCX1prTaqn2S20wwdfpfHMIvV2DYTuVxVBM2BOy1yGT9IhPtNmv1M7KO5r9z0USNhPWAnc_xP3a4enNrzWdIxmmnf_pjkUUgzqHO5ELAEXwFDqPv-L5NJw',
        description: 'Điện thoại Flagship của Apple với camera 48MP và chip A17 Pro.'
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 28990000,
        image: 'https://cdn.xtmobile.vn/vnt_upload/news/05_2024/15/ly-do-nen-mua-galaxy-s24-ultra-cu-xtmobile.jpg',
        description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.'
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 7990000,
        image: 'https://antuan.vn/public/uploads/anh-san-pham/sony/tai-nghe-sony-wh-1000xm5/tai-nghe-sony-wh-1000mx5-white-4.jpg',
        description: 'Tai nghe chống ồn chất lượng cao với thời gian pin 30 giờ.'
    },
    {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11990000,
        image: 'https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/tile/Apple-Watch-S9-hero-230912.jpg.og.jpg?202503102216',
        description: 'Đồng hồ thông minh cao cấp với màn hình Always-on và hỗ trợ thể thao.'
    },
    {
        id: 6,
        name: 'Loa JBL Charge 5',
        price: 3600000,
        image: 'https://hoanghamobile.com/Uploads/2021/03/09/image-removebg-preview-6.png',
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.'
    }
];
function renderProducts(filteredProducts) {
    let productList = document.getElementById('product-list');
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
        productList.innerHTML += `
        <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p>${product.price.toLocaleString()} VND</p>
                <button class="btn btn-primary">Buy</button>
            </div>
        </div>
    `;
    });
}
function searchProducts() {
    let searchText = document.getElementById('search').value.toLowerCase();
    let filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText)
    );
    renderProducts(filteredProducts);
}
document.getElementById('search-btn').addEventListener('click', searchProducts);
renderProducts(products);
import React, { useState, useEffect } from 'react'

export const Shopper = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([{ id: "", title: "", price: "", description: "", category: "", image: "", rating: { rate: "", count: "" } }])
    const [cartCount, setCartCount] = useState(0)
    const [cartItems, setCartItems] = useState([])
    function LoadCategories() {
        fetch('https://fakestoreapi.com/products/categories').then((response) => response.json()).then((response) => { response.unshift("all"); setCategories(response) }).catch((error) => console.log(error));
    }

    function LoadProducts(url) {
        fetch(url).then(response => response.json()).then(response => setProducts(response)).catch((error) => console.log(error));
    }


    function handleCategoryChange(e) {
        var url = e.target.value === 'all' ? 'https://fakestoreapi.com/products' : `https://fakestoreapi.com/products/category/${e.target.value}`
        LoadProducts(url)
    }

    function handleAddToCartClick(e) {
        fetch(`https://fakestoreapi.com/products/${e.target.value}`).then(data => data.json()).then(response => { cartItems.push(response); setCartCount(cartItems.length); });

    }


    useEffect(() => {
        LoadCategories();
        LoadProducts('https://fakestoreapi.com/products')
    }, []);


    console.log(cartItems);
    return (
        <div className='container-fluid'>
            <header className='d-flex justify-content-between p-3 bg-dark text-white m-0'>
                <div>
                    <span className='h4'>Shopper.</span>
                </div>
                <div>
                    <span className="me-3">Home</span>
                    <span className="me-3">Electronics</span>
                    <span className="me-3">Jewelery</span>
                    <span className="me-3">Men's Fashion</span>
                    <span className="me-3">Women's Fashion</span>

                </div>
                <div>
                    <button className='btn position-relative btn-light'>
                        <span className='bi bi-cart4'></span> Your Cart
                        <span className='badge rounded-circle bg-danger position-absolute top-0 end-0 p-1.5'>{cartCount}</span>
                    </button>
                </div>
            </header>
            <section className='mt-3 d-flex'>
                <nav className='col-2'>
                    <div>
                        <label className='form-label fw-bold'>Select Category</label>
                        <div>
                            <select className='form-select' onChange={handleCategoryChange}>
                                {
                                    categories.map((item) => <option key={item} value={item}>{item.toUpperCase()}</option>)
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className='col-8'>
                    <div className=' d-flex flex-wrap overflow-auto' style={{ height: "650px" }}>
                        {
                            products.map(product =>
                                <div className="card p-2 m-2" style={{ width: "200px" }}>
                                    <img src={product.image} alt="" className='card-img-top' height="140px" />
                                    <div className="card-header overflow-auto ">
                                        {product.title}
                                    </div>
                                    <div className="card-body">
                                        <dl>
                                            <dt>Price</dt>
                                            <dd>{(product.price).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</dd>
                                        </dl>
                                    </div>
                                    <div className="card-footer">
                                        <button className='btn btn-secondary w-100' value={product.id} onClick={handleAddToCartClick}><span className='bi bi-cart3'></span> Add to Cart</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </main>
                <aside className="col-2">
                    <table className='table table-hover caption-top'>
                        <caption>Your Cart Summary</caption>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map(item =>
                                    <tr> <td>{item.title}</td> <td>
                                        <img src={item.image} width="50" height="50" /> </td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </aside>
            </section>
        </div>
    )
}

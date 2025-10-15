import { useState } from "react";
import styles from "./Shop.module.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

//Return the top pic
function Top() {
    return(
        <>
             <div>
                <img src="pica.png" className={styles.topPic} />
             </div>
        </>
    );
}

function Shop() {
    const [cart, setCart] = useState([]);
    //Additems to cart
    function AddToCart(item) {
            if (cart.some(cartItem => cartItem.id === item.id)) {
            // Item already in cart → remove it
            setCart(cart.filter(cartItem => cartItem.id !== item.id));
            } else {
            // Item not in cart → add it
            setCart([...cart, item]);
            }
    }

    //Remove the items from cart on the cart summary
    function RemoveItem(itemId) {
        setCart(cart.filter(cartItem => cartItem.id !== itemId));
    }
    //Create an array of the items in the shop.
    const goods = [
        {id: 1, name: 'Ndovu flour', price: 165, Image: '/pic/ndovu.jpeg'},
        {id: 2, name: 'Exe flour', price: 135, Image: '/pic/exe.jpeg'},
        {id: 3, name: 'Rina oil', price: 210, Image: '/pic/rina.jpeg'},
        {id: 4, name: 'Meningai Saop', price: 170, Image: '/pic/soap.jpeg'},
        {id: 5, name: 'Salt', price: 80, Image: '/pic/salt.jpeg'},
        {id: 6, name: 'Sugar', price: 250, Image: '/pic/sugar.jpeg'},
        {id: 7, name: 'phone', price: 14500, Image: '/pic/phone.webp'},
        {id: 8, name: 'Laptop', price: 32000, Image: '/pic/laptop.webp'},
        {id: 9, name: 'Iron', price: 1270, Image: '/pic/iron.jpeg'},
        {id: 10, name: 'Kettle', price: 800, Image: '/pic/kettle.jpeg'},
        {id: 11, name: 'Charger', price: 450, Image: '/pic/charger.jpeg'},
        {id: 12, name: 'Heater', price: 1100, Image: '/pic/heater.jpeg'},
        {id: 13, name: 'Iron Sheet', price: 950, Image: '/pic/sheet.jpeg'},
        {id: 14, name: 'Iron nails', price: 170, Image: '/pic/nails.jpeg'},
        {id: 15, name: 'Harmmer', price: 270, Image: '/pic/harmmer.png'},
        {id: 16, name: 'Cemment', price: 870, Image: '/pic/cement.jpeg'},
        {id: 17, name: 'Pipe', price: 165, Image: '/pic/pipe.jpeg'},
        {id: 18, name: 'Metal rod', price: 230, Image: '/pic/rod.webp'},
        {id: 19, name: 'Safari shoe', price: 1240, Image: '/pic/shoea.webp'},
        {id: 20, name: 'Mark shoe', price: 2000, Image: '/pic/shoeb.webp'},
        {id: 21, name: 'Barter shoe', price: 1780, Image: '/pic/shoec.webp'},
        {id: 22, name: 'Laert shoe', price: 2200, Image: '/pic/shoed.webp'},
        {id: 23, name: 'Shert shoe', price: 1450, Image: '/pic/shoee.webp'},
        {id: 24, name: 'Dedt shoe', price: 3400, Image: '/pic/shoef.webp'},
    ]

    return(
        <>
           <Top/>
           <p> Total items in cart: {cart.length} </p>
           <div>
              <ul className={styles.MyList}>
                    {goods.map((item) => {
                        const isInCart = cart.some((cartItem) => cartItem.id === item.id); // ✅ define this here

                        return (
                        <li key={item.id} className={styles.ListItemOne}>
                            <div>
                            <img src={item.Image} className={styles.myPic} />
                            <p>{item.name}</p>
                            <p>Ksh.{item.price.toLocaleString()}</p>

                            <button
                                onClick={() => AddToCart(item)}
                                className={styles.shopButton}
                            >
                                {isInCart ? "🗑 Added to cart" : "🛒 Add to Cart"}
                            </button>
                            </div>
                        </li>
                        );
          })}
        </ul>
           </div>

           {/*Display the cart summary*/ }
           { cart.length > 0 && (
            <div>
                <h3> Your cart items </h3>
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            {item.name} - Ksh.{item.price.toLocaleString()}
                            <button onClick={() => RemoveItem(item.id)}
                                className={styles.removeButton}> Remove </button>
                        </li>
                    ))}
                </ul>
                <p>
                    <strong>
                        Total: Ksh.
                        {cart.reduce((sum, item) => sum + item.price, 0).toLocaleString()}
                    </strong>
                    <Link to = '/Login'>
                         <button> Login to continue </button>
                    </Link>
                </p>
            </div>
           )}
           <Footer/>
        </>
    );
}

export default Shop;
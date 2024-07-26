import '../Styles/ItemCart.css'
import poha from '../Images/poha.jpg'
export default function ItemsCart() {
    return (
        <>
            <div className='itemCart_container'>
                <img src={poha} alt="" />
                <div className='itemContaint'>
                    <h4>Poha recipe</h4>
                    <div className='details'>
                        <h3>Price: &#8377;100</h3>
                        <hr />
                        <div className='item_rating'>
                            <h6>Rating:</h6>
                            <div className="rating_star">
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                            </div>
                        </div>
                        <h3>Maharaj Restuarant</h3>
                        <div className='itemCart_buttons'>
                            <button>Cart</button>
                            <button>Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import '../Styles/product_search.css'
import samosa from '../Images/samosaFood.png';
export default function Product_Search() {
  return (
    <div className='search_product_main_container'>
        <div className='search_product'>
            <div className='image_div'>
                 <img src={samosa} alt="" />
            </div>
            <div></div>
            <div className='details_div'>
                <h2>This this is samosa dish foasa.</h2>
                <p>samosa descreiption Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                <h3>Restaurant: Maharaj Restaurant</h3>
                <div>
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
                    <div>Price: 30</div>
                </div>
            </div>
        </div>
    </div>
  )
}

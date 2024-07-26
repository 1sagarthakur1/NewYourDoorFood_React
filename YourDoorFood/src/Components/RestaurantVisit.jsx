import '../Styles/Restaurant/restaurantVisit.css'
import restuarantIMG from '../Images/restuarant.png'
export default function RestaurantVisit() {
  return (
    <>
      <div className='restuarantVist_mainContainer'>
        <div>
          <img src={restuarantIMG} alt="" />
        </div>
        <div className='detailsRestuarantVisit'>
          <h3>Maharaj Resuarant</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sint?</p>
          <div className='ratingRestaurant'>
            <h4>Reating:</h4>
            <div>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
          </div>
          <div className='button_Favorites'>
            <div className='Favorites'>
              <h6>Add to favorites :</h6>
              <div>&#10084;</div>
            </div>
            <button>Visit</button>
          </div>
        </div>
      </div>
    </>
  )
}

import RestaurantVisit from "../../Components/RestaurantVisit";
import '../../Styles/HomeCss/section2.css'

export default function Section2() {

  return (
    <>
      <div className="restuarant_mainContainer">
        <div className='restuarant_background'><div><div></div></div></div>
        <div className="restuarant">
          <h1>Restuarant</h1>
          <div className="slide">
            <div className="slide_liner">
              <RestaurantVisit />
              <RestaurantVisit />
              <RestaurantVisit />
              <RestaurantVisit />
              <RestaurantVisit />
              <RestaurantVisit />
              <RestaurantVisit />
              <RestaurantVisit />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

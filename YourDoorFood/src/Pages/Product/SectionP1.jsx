import '../../Styles/Product/sectionp1.css'
import samosa from '../../Images/samosaFood.png'
export default function SectionP1() {
  return (
    <>
      <div className="sectionp1_container">
        <div className='sectionp1_desgin'><div><div></div></div></div>
        <div className='sectionp1_containt'>
          <div className='sectionp1_leftSide'>
             <h1>This is Product page section1</h1>
             <h3>Street Food, Mithai, Beverages</h3>
             <p><i>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatum fugit possimus facilis vero atque consequuntur quis labore consectetur eveniet!</i></p>
             <div className='sectionp1_restaurant'>
                <h2>Maharaj Restaurant</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dicta.</p>
             </div>
             <div className='sectionp1_button'>
              <button> Add to cart</button>
              <button> Buy</button>
             </div>
          </div>
          <div className='sectionp1_rightSide'>
            <img src={samosa} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

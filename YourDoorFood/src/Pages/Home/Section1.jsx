import '../../Styles/HomeCss/section1.css'
import burgarimg from '../../Images/burgarFood.png';

export default function Section1() {
  return (
    <>
      <div className="section1_mainContainer">
        <div className='div1disgin'><div><div></div></div></div>
        <div className='section1_containtContainer'>
          <div className='heading_containt'>
            <h1>Your Door Food</h1>
            <h2>Delightful dishes, delivered to your door.</h2>
            <p>Discover a world of flavors with our food delivery app. Order your favorites hassle-free and enjoy doorstep delivery in no time. Your cravings, our commitment to convenience.</p>
          </div>
          <div className='heading_Image'>
            <img src={burgarimg} />
          </div>
        </div>
      </div>
    </>
  )
}

import '../../Styles/HomeCss/section3.css'
import samosaimg from '../../Images/samosaFood.png'
import jalebiimg from '../../Images/JalebiFood.webp'
export default function Section3() {
    return (
        <>
            <div className="section3_mainContainer">
                <div className="section3_bgDisgin">
                    <div><div><div><div></div></div></div></div>
                </div>
                <div className='section3_containt'>
                    <div className='div1'>
                        <div>
                            <img src={samosaimg} alt="" />
                        </div>
                        <div className='containt'></div>
                    </div>
                    <div className='div2'>
                        <div className='containt'></div>
                        <div>
                            <img src={jalebiimg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

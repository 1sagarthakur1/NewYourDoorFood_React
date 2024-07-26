import '../../Styles/Product/sectionp3.css'
import orderSucc from "../../Images/order_succGIF.gif"
export default function SectionP3() {
    return (
        <>
            <div className="sectionp3_container">
                <div className='sectionp3_desgin'><div></div><div><div></div></div></div>
                <div className='sectionp3_containt'>
                  <img className='orderSucc_img' src={orderSucc} alt="" />
                </div>
            </div>
        </>
    )
}

import '../../Styles/Product/sectionp2.css'
import PaymentCard from '../../Components/PaymentCard'
import UPIinput from '../../Components/UPIinput'
import cod from "../../Images/cod.jpg"

export default function SectionP2() {
    return (
        <>
            <div className="sectionp2_container">
                <div className='sectionp2_desgin'><div></div><div><div></div></div></div>
                <div className='sectionp2_containt'>
                    <p><h5>Your Address : </h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, accusamus quo! Magnam.</p>
                    <h1>Choose your payment option</h1>
                    <div className='paymentDetails_container'>
                        <div>
                            <input id='byCard' type="radio" />
                            <label htmlFor="byCard">BY CARD</label>
                            <PaymentCard />
                        </div>
                        <div>
                            <input id='byUPI' type="radio" />
                            <label htmlFor="byUPI">BY UPI</label>
                            <UPIinput />
                        </div>
                        <div>
                            <input id='byCOD' type="radio" />
                            <label htmlFor="byCOD">BY COD</label>
                            <div style={{marginTop:"5px"}}>
                                <img className='codImg' src={cod} alt="" />
                            </div>
                        </div>
                        <div className='pymentButton_container'>
                            <button className='payButt'>Back</button>
                            <button className='payButt'>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

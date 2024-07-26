import ItemsCart from '../../Components/ItemsCart'
import '../../Styles/HomeCss/section4.css'
export default function Section4() {
    return (
        <>
            <div className="section4_mainContainer">
                <div className="section4DisignDiv">
                    <div><div></div></div>
                </div>
                <div className='section4_containt'>
                    <h1>Top Selling Items</h1>
                    <hr></hr>
                    <div>
                        <ItemsCart />
                        <ItemsCart />
                        <ItemsCart />
                        <ItemsCart />
                        <ItemsCart />
                        <ItemsCart />
                        <ItemsCart />
                        <ItemsCart />
                        <ItemsCart />
                        <ItemsCart />
                        <ItemsCart />
                        <ItemsCart />
                    </div>
                </div>
            </div>
        </>
    )
}

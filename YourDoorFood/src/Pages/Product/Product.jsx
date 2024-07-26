import SectionP1 from "./SectionP1";
import SectionP2 from "./SectionP2";
import Navbar from "../../Components/Navbar";
// import SectionP3 from "./SectionP3";

export default function Product() {
    return (
        <>
            <div className="product_mainContainer">
                <Navbar/>
                <SectionP1/>
                <SectionP2/>
                {/* <SectionP3/> */}
            </div>
        </>
    )
}

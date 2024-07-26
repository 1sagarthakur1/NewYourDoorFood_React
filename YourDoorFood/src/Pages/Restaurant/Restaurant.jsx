import SectionR1 from "./SectionR1";
import '../../Styles/Restaurant/sectionr1.css'
import SectionR2 from "./SectionR2";
import FooterAfter from "../../Components/FooterAfter"
import Navbar from "../../Components/Navbar";

export default function Restaurant() {
  return (
    <div className="restaurant">
      <Navbar/>
      <SectionR1/>
      <SectionR2/>
      <FooterAfter/>
    </div>
  )
}

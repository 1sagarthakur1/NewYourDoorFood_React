import '../../Styles/HomeCss/home.css'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Navbar from '../../Components/Navbar'
import FooterAfter from '../../Components/FooterAfter'

export default function Home() {
  return (
    <div className='home_main_container'>
      <Navbar/>
      <Section1 />
      <Section3 />
      <Section4 />
      <Section2 />
      <FooterAfter/>
    </div>
  )
}

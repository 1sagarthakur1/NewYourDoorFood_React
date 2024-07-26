import Product_Search from '../../Components/Product_Search';
import '../../Styles/Search/search.css';
export default function Search() {
  return (
    <>
     <div className="search_page">
       <input className='searchbar' type="text" placeholder='Search hear'/>
        <Product_Search/>
        <Product_Search/>
        <Product_Search/>
        <Product_Search/>
     </div>
    </>
  )
}

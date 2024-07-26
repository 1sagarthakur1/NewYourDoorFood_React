import ItemsCart from "../../Components/ItemsCart";
import "../../Styles/Restaurant/sectionr2.css"

export default function SectionR2() {
    const numbers = Array.from({ length: 12 }, (_, index) => index + 1);

    return (
        <>
            <div className="restaurant_section2mainContainer">
                <div className="restaurant_section2">
                    <h2>Items available in the restaurant </h2>
                    <div className="restaurant_items">
                        {numbers.map(() => (
                            <ItemsCart key={numbers} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

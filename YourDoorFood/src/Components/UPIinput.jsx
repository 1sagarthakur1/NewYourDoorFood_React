import "../Styles/upiInput.css"
export default function UPIinput() {
    return (
        <div className="input-container">
            <input type="text" id="input" required="" placeholder="Enter UPI id"/>
            <input type="text" id="input" required="" placeholder="Enter UPI pin"/>
        </div>

    )
}

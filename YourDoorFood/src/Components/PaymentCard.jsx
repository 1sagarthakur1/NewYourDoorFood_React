import '../Styles/paymentCard.css'
export default function PaymentCard() {
    return (
        <>
            <div className="visa-card">
                <div className="logoContainer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="23"
                        height="23"
                        viewBox="0 0 48 48"
                        className="svgLogo"
                    >
                        <path
                            fill="#ff9800"
                            d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                        ></path>
                        <path
                            fill="#d50000"
                            d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                        ></path>
                        <path
                            fill="#ff3d00"
                            d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                        ></path>
                    </svg>
                </div>
                <div className="number-container">
                    <label className="input-label" htmlFor="cardNumber">CARD NUMBER</label>
                    <input
                        className="inputstyle"
                        id="cardNumber"
                        placeholder="XXXX XXXX XXXX XXXX"
                        name="cardNumber"
                        type="number"
                        maxLength={12}
                    />
                </div>

                <div className="name-date-cvv-container">
                    <div className="name-wrapper">
                        <label className="input-label" htmlFor="holderName">CARD HOLDER</label>
                        <input
                            className="inputstyle"
                            id="holderName"
                            placeholder="NAME"
                            type="text"
                            maxLength={20}
                        />
                    </div>

                    <div className="expiry-wrapper">
                        <label className="input-label" htmlFor="expiry">VALID THRU</label>
                        <input className="inputstyle" id="expiry" placeholder="MM/YY" type="text" />
                    </div>
                    <div className="cvv-wrapper">
                        <label className="input-label"  htmlFor="cvv">CVV</label>
                        <input
                            className="inputstyle"
                            placeholder="***"
                            maxLength="3"
                            id="cvv"
                            type="password"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

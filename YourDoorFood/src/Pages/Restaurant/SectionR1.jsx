import "../../Styles/Restaurant/sectionr1.css"

export default function SectionR1() {
    return (
        <>
            <div className="sectionr1_maincontainer">
                <div className='sectionr1_desgin'><div><div></div></div></div>
                <div className="sectionr1_containt">
                    <div className="sectionr1_details">
                        <h2 className="restaurant_name">There is Restaurant Name</h2>
                        <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo suscipit optio, veniam, quisquam ducimus ex excepturi ad eligendi ipsum reiciendis sed molestias, recusandae quibusdam assumenda provident nemo perferendis. Iure, deleniti.</p>
                        <hr />
                        <div className="bottom_leftContainer">
                            <div className="Rating_container">
                                <div className="timing_container">
                                    <h4>Timing</h4>
                                    <div>
                                        <p>Open Time: 9:30</p>
                                        <p>Close Time: 9:30</p>
                                        <h4 className="current_satuation">Open</h4>
                                    </div>
                                </div>
                                <div className="reating">
                                    <div className="rating_star">
                                        <h4>Reating</h4>
                                        <span>&#9733;</span>
                                        <span>&#9733;</span>
                                        <span>&#9733;</span>
                                        <span>&#9733;</span>
                                        <span>&#9733;</span>
                                    </div>
                                    <div>
                                        <div className="UserComment">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQiUvtYCuHnxrQ9iJVqomIDZ-QUVdSUwyKgQ&s" alt="" />
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore facilis porro!</p>
                                        </div>
                                        <div className="UserComment">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQiUvtYCuHnxrQ9iJVqomIDZ-QUVdSUwyKgQ&s" alt="" />
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore facilis porro!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="contact_container">
                                <div>
                                    <h4>Manager Name</h4>
                                    <p>RajChandra chkka</p>
                                </div>
                                <div>
                                    <h4>Helpline number</h4>
                                    <p>1800 34432 3242</p>
                                </div>
                            </div>
                        </div>
                        <div className="address_container">
                            <h5>Restaurant Address</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ea eaque hic omnis eveniet voluptate sed sunt asperiores est cupiditate?</p>
                        </div>
                    </div>
                    <div className="left_imageContainer">
                        <div>
                            <img className="restaurant_image" src="https://www.bdtask.com/blog/assets/plugins/ckfinder/core/connector/php/uploads/images/theme%20for%20restaurant.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

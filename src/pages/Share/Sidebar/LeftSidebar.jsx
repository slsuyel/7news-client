/* eslint-disable react/prop-types */

import '../../../styles/App.css'
import { Link } from 'react-router-dom';
const LeftSidebar = ({ sortedArticles }) => {

    const currentDate = new Date().toLocaleString("bn-BD", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    });


    return (
        <div>
            <div className='none'>
                <h3 className="border-bottom mb-1 pb-1"> 7 নিউজ.com</h3>
                <p> <i className="fa-regular fa-clock"></i> {currentDate}</p>
                <div className="d-flex fs-3 justify-content-between social">
                    <div><i style={{ color: "#3b5998" }} className="fa-brands fa-facebook"></i></div>
                    <div><i style={{ color: "#00acee" }} className="fa-brands fa-twitter"></i></div>
                    <div><i style={{ color: "#0072b1" }} className="fa-brands fa-linkedin"></i></div>
                    <div><i style={{ color: "#25D366" }} className="fa-brands fa-whatsapp"></i></div>
                </div>
                {/* add */}
                <div>
                    <img src="https://www.rtvonline.com/assets/news_photos/2023/05/21/image-224266-1684686457.jpg" alt="" className="img-fluid img-thumbnail " />
                </div>
            </div>

            <div className='lh-1'>
                <p className='fw-semibold mb-0 ms-2 mt-3 mx-auto text-danger'>সর্বশেষ সংবাদ</p>
                {sortedArticles.slice(0, 5).map((news) => (
                    <div className='bg-white p-2 mb-2' key={news._id}>
                        <Link to={`/news/${news._id}`} className="text-dark text-decoration-none" >
                            <img
                                src={news.image}
                                alt=""
                                className="img-fluid w-100 h80"

                            />
                            <p className="mb-0 mt-2 n-title text-center">{news.title}</p>
                        </Link>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default LeftSidebar;
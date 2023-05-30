/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/favIcon.png'
const BreakingNews = ({ allnews }) => {
    const marqueeRef = useRef(null);

    const handleMouseOver = () => {
        marqueeRef.current.stop();
    };

    const handleMouseOut = () => {
        marqueeRef.current.start();
    };

    return (
        <div className="mx-2">
            <div className="align-items-center bg-white border border- d-flex justify-content-between">
                <div className="bg-danger d-flex px-2 py-1 text-white">
                    <span className="d-flex align-items-center news-ticket"> ব্রেকিং নিউজ</span>
                </div>
                <marquee
                    className="news-scroll"
                    behavior="scroll"
                    direction="left"
                    ref={marqueeRef}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    {allnews?.map((news) => (
                        <Link key={news._id} to={`/news/${news._id}`} className='text-decoration-none text-dark ticker-link'>

                            {news.title}
                            <img src={icon} alt="" width={'15px'} />
                        </Link>
                    ))}
                </marquee>
            </div>
        </div>
    );
};

export default BreakingNews;

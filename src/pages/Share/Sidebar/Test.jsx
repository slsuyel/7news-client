/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Test = ({ nationalNews, sortedArticles }) => {
    const [sidebarNews, setSidebarNews] = useState([]);

    useEffect(() => {
        setSidebarNews(nationalNews);
    }, [nationalNews]);

    const handleLatestButtonClick = () => {
        setSidebarNews(sortedArticles);
    }

    const handleNationalNewsButtonClick = () => {
        setSidebarNews(nationalNews);
    }

    return (
        <div>
            <button className='btn-normal' onClick={handleLatestButtonClick}>Latest</button>
            <button className=" btn-Last-popular" onClick={handleNationalNewsButtonClick}>National</button>

            <ul className="list-unstyled">
                {sidebarNews?.slice(0, 10).map((newsItem) => (
                    <Link to={`/news/${newsItem._id}`} key={newsItem._id} className="text-decoration-none">
                        <li className="bg-white border-2 border-bottom my-2 px-1 text-dark">{newsItem.title}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Test;

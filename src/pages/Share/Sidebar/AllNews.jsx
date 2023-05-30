/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AllNews = ({ allnews }) => {
  //  console.log(allnews);
    return (
        <>
            <h3 className="btn-Last-popular fs-5 w-100">সকল সংবাদ</h3>
            <div style={{ height: '500px' }} className="overflow-scroll bg-white">

                {
                    allnews?.map(news => (
                        <div key={news._id} className="my-2 border-bottom px-2">
                            <Link to={`/news/${news._id}`} className="text-decoration-none text-muted " style={{ fontSize: '15px' }}>
                                {news.title}
                            </Link>
                        </div>

                    ))
                }

            </div></>
    );
};

export default AllNews;
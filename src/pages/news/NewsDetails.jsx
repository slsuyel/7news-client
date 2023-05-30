import { Link, useLoaderData } from "react-router-dom";
import LeftSidebar from "../Share/Sidebar/LeftSidebar";
import { Container } from "react-bootstrap"
import { useEffect, useState } from "react";
import Test from "../Share/Sidebar/Test";
import useTitle from "../../Hooks/useTitle";

const NewsDetails = () => {
    const [allnews, setAllnews] = useState([])
    const data = useLoaderData()
    const { content, image, author, title, } = data
    // console.log(data);
    data.date = new Date('2023-05-22');
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Dhaka',
    };

    const formattedDate = new Intl.DateTimeFormat('bn-BD', options).format(data.date);

    useTitle(title)
    useEffect(() => {
        fetch('https://news-server-omega.vercel.app/allnews')
            .then(res => res.json())
            .then(data => {
                setAllnews(data)
                // console.log(data);
            })
    }, [])
    const sortedArticles = allnews.sort((a, b) => new Date(b.date) - new Date(a.date));
    const nationalNews = allnews.filter(news => news.category === "National");


    return (
        <Container className="border-top pt-3" style={{ backgroundColor: '#EEEEEE' }}>
            <div className="row mx-auto">
                <div className="col-md-2 ps-0 order-1 order-md-0">
                    <LeftSidebar sortedArticles={sortedArticles} />
                </div>
                <div className="col-md-8 order-0 order-md-1">
                    <div>
                        <h2 className="bg-white p-1 rounded-1">{title}</h2>
                        <p className="mb-1 ms-2">প্রতিবেদকঃ {author}</p>
                        <p className="mb-1 ms-2">প্রকাশ : {formattedDate}</p>
                        <img src={image} alt="" width={'600px'} className="w-100 img-fluid" />

                        <div className="border-top m-2 mb-1 pt-2" dangerouslySetInnerHTML={{ __html: content }}>

                        </div>
                    </div>
                    <div>
                        <h3 className="btn-Last-popular fs-5 w-100 ps-2"> আরও দেখুন</h3>

                        {
                            nationalNews?.slice(0, 8).map(news => (
                                <div key={news._id} className="my-2 border-bottom px-2">
                                    <Link to={`/news/${news._id}`} className="text-decoration-none text-muted " style={{ fontSize: '15px' }}>
                                        {news.title}
                                    </Link>
                                </div>

                            ))
                        }

                    </div>
                </div>
                <div className="col-md-2 order-2 order-md-2">


                    <Test nationalNews={nationalNews} sortedArticles={sortedArticles} />

                </div>
            </div>
        </Container>
    );
};

export default NewsDetails;
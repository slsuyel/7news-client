import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import '../../styles/App.css'
import { Link } from "react-router-dom";

const Special = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch("https://news-server-omega.vercel.app/allnews")
            .then((res) => res.json())
            .then((data) => {
                setNews(data)
            })
    }, []);

    const specialNews = news.filter(n => n.category === "special_news")

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="w-100 py-4 my-4" style={{ backgroundColor: '#555555' }}>
            <Container className="text-white">
                <h4 className="mb-2 ">বিশেষ প্রতিবেদন</h4>
                <Slider {...settings}>
                    {specialNews.map(n => (
                        <div key={n._id} className="text-center">
                            <Link className="rounded-4 text-white text-decoration-none text-center" to={`/news/${n._id}`}>
                                <img src={n.image} alt="" className="specialnews-img img-thumbnail mx-auto" />
                                <span className="sp-news"> {n.title}</span>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    );
}

export default Special;

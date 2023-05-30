import { useEffect, useState } from "react";
import add from '../../assets/add.svg'
import { Link } from "react-router-dom";
import '../../styles/App.css'
import { Container } from "react-bootstrap";
import AllNews from "../Share/Sidebar/AllNews";
import useTitle from "../../Hooks/useTitle";
import BreakingNews from "../Share/BreakingNews";
const Home = () => {
    const [allnews, setAllnews] = useState([])
    useEffect(() => {
        fetch('https://news-server-omega.vercel.app/allnews')
            .then(res => res.json())
            .then(data => {
                setAllnews(data)
                // console.log(data);
            })
    }, [])
    const sortedArticles = allnews.sort((a, b) => new Date(b.date) - new Date(a.date));

    useTitle("7news.com || Home")
    return (
        <Container style={{ backgroundColor: '#EEEEEE' }}>
            <BreakingNews allnews={allnews}/>
            <div className="row m-auto mb-4">
                <div className="col-md-8 bg-white p-2">
                    <div className="row">
                        <div className="col-md-8">
                            <Link to={`/news/${sortedArticles[0]?._id}`} className="image-link">
                                <img src={sortedArticles[0]?.image} alt="" className="md-img" height={'300px'} width={'500px'} />
                                <h3 className="image-title fs-3">{sortedArticles[0]?.title}</h3>
                            </Link>
                        </div>

                        <div className="col-md-4">
                            <Link to={`news/${sortedArticles[1]?._id}`} className="image-link bg-white" style={{ position: 'relative' }}>
                                <img src={sortedArticles[1]?.image} alt="" className="img-fluid" />
                                <div className="custom-text" style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', backgroundColor: '#00000080', padding: '10px', margin: '0', color: '#fff', textAlign: 'center' }}>
                                    {sortedArticles[1]?.title}
                                </div>
                            </Link>




                            <Link to={`news/${sortedArticles[2]?._id}`} className="bg-white d-flex gap-2 justify-content-between pt-2 px-1 text-dark text-decoration-none">
                                <img src={sortedArticles[2]?.image} alt="" className="sidebar-img img-fluid" />
                                <p className="bg-white">{sortedArticles[2]?.title.slice(0, 30)}</p>
                            </Link>

                            <div>
                                <p className="bg-secondary fs-6 mb-0 mb-2 mx-1 ps-2 py-0 text-white"> দেখুনঃ</p>
                                <div className="border d-flex px-1">
                                    <p className="mb-0"> {sortedArticles[3]?.title.slice(0, 30)}. . .</p>
                                    <Link to={`news/${sortedArticles[3]?._id}`} className="bg-white pt-2 text-dark text-decoration-none"> বিস্তারিত
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-2 ">
                    <img src={add} alt="" className="img-fluid" />
                </div>
            </div>

            <div className="row m-auto">
                <div className="col-md-6 news-left-section h-100">
                    {allnews?.slice(0, 10).map((news) => (
                        <div key={news._id} className="m-2">
                            <Link to={`/news/${news._id}`} className="bg-white d-flex gap-2 pt-2 px-1 text-dark text-decoration-none w-100">
                                <img src={news.image} alt="" className="img-fluid" style={{ width: "133px", height: "80px", objectFit: "cover" }} />
                                <p className="mb-0 n-title">{news.title}</p>
                            </Link>
                        </div>
                    ))}

                </div>
                {/* International news */}
                <div className="col-md-3">
                    {allnews
                        .filter((news) => news.category === 'international')
                        .slice(0, 4)
                        .map((news) => (
                            <Link to={`/news/${news._id}`} key={news._id} className="bg-white d-flex pt-2 px-1 text-dark text-decoration-none mb-2">
                                <img src={news.image} alt="" className="sidebar-img me-2 img-fluid" />
                                <p className="bg-white p-0">{news.title}</p>
                            </Link>
                        ))}
                </div>



                <div className="col-md-3">
                    <div>
                        <AllNews allnews={allnews} />
                    </div>
                </div>
            </div>
        </Container>

    );
};

export default Home;
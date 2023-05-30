import { Container } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import AllNews from "../Share/Sidebar/AllNews";
import '../../styles/App.css'
import comming from '../../assets/comming.svg'
import add from '../../assets/add.svg'
import useTitle from "../../Hooks/useTitle";
const Categories = () => {
    useTitle('Categories')
    const allnews = useLoaderData()
    console.log(allnews);
    return (
        <Container className="row mx-auto" style={{ backgroundColor: '#EEEEEE' }}>
            <div className="col-md-2">
                <AllNews allnews={allnews} />
            </div>
            <div className="col-md-8 ">
                <div className="category-grid">
                    {
                        allnews.slice(0, 8).map((news) => (
                            <div key={news._id} className="bg-white card p-1 rounded-0">
                                <Link to={`/news/${news._id}`} className="mx-auto text-black text-decoration-none">
                                    <img src={news.image} alt="" style={{ width: '230px', height: '125px' }} className="img-fluid" />
                                    <p className="m-1"> {news.title}</p>
                                </Link>
                            </div>

                        ))
                    }
                </div>

            </div>
            <div className="col-md-2 none">

                <img src={comming} alt="" className="img-fluid img-thumbnail" />
                <img src={add} alt="" className="img-fluid img-thumbnail" />

            </div>

        </Container>
    );
};

export default Categories;
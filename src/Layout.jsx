import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LogoPT from "./assets/logo/logoCinema.png";
import LogoHom from "./assets/logo/home.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Dashboard from "./Pages/Dashboard";
import DetailMovie from "./Pages/Detail";
import Swal from "sweetalert2";
import Cart from "./Pages/Cart";
import Footer from "./component/Footer";

const Layout = () => {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState('trending/all/day?language=en-US');
    
    const handleCategory = (e) => {
        setCategory(`${e}?language=en-US&page=1`);
    };
    
    const handleCategoryTranding = (e) => {
        setCategory(`trending/${e}/day?language=en-US`);
    };

    const keyAPI = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODg1YzQ5YTA0MmQ5Mzc2YWU0M2UwMTE2YzZkYTU4ZiIsIm5iZiI6MTcxOTY1MjUwNy4xOTkwMTIsInN1YiI6IjY0MjdiYjI5YzA0NDI5MDFmMDAyMDQwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9H_XNMR13KyTCjLhFGlAYDj0g-lRHPrR917UdFYq_pg';
    const base_url = 'https://api.themoviedb.org/3/';

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                Swal.fire({
                    title: 'Loading...',
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                })

                const res = await axios.get(`${base_url}${category}`, {
                    headers: {
                        'Authorization': keyAPI
                    }
                });
                setMovie(res.data.results);
                setLoading(false);
                Swal.close();
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchMovies();
    }, [category]);

    if (loading) return null;
    if (error) return <div>Error: {error.message}</div>;
    
    return (
        <Router>
            <div className="layout">
                <div className="containers">
                    <img src={LogoHom} alt="Cinema Bad Jack's" className="logoHome" />
                    <img src={LogoPT} alt="Cinema Bad Jack's" className="logoPT" />
                </div>
                <nav className="navbars">
                    <ul className="navhead">
                        <li className="navlist">
                            <a className="dropdowns trending">Trending</a>
                            <div className="dropdownList">
                                <ul className="navheadsub">
                                    <li className="navItems">
                                        <Link to="/" onClick={() => handleCategoryTranding('all')}>All</Link>
                                    </li>
                                    <li className="navItems">
                                        <Link to="/" onClick={() => handleCategoryTranding('movie')}>Movie</Link>
                                    </li>
                                    <li className="navItems">
                                        <Link to="/" onClick={() => handleCategoryTranding('tv')}>TV</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="navlist">
                            <a className="dropdowns tvSeries">TV Series</a>
                            <div className="dropdownList">
                                <ul className="navheadsub">
                                    <li className="navItems">
                                        <Link to="/" onClick={() => handleCategory('tv/popular')}>Popular</Link>
                                    </li>
                                    <li className="navItems">
                                        <Link to="/" onClick={() => handleCategory('tv/top_rated')}>Top Rated</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="navlist">
                            <a className="dropdowns movieSeries">Movie</a>
                            <div className="dropdownList">
                                <ul className="navheadsub">
                                    <li className="navItems">
                                        <Link to="/" onClick={() => handleCategory('movie/now_playing')}>Now Showing</Link>
                                    </li>
                                    <li className="navItems">
                                        <Link to="/" onClick={() => handleCategory('movie/popular')}>Popular</Link>
                                    </li>
                                    <li className="navItems">
                                        <Link to="/" onClick={() => handleCategory('movie/top_rated')}>Top Rated</Link>
                                    </li>
                                    <li className="navItems">
                                        <Link to="/" onClick={() => handleCategory('movie/upcoming')}>Upcoming</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Dashboard movie={movie} />} />
                    <Route path="/detail/:id" element={<DetailMovie movie={movie} />} />
                    <Route path="/cart/:id" element={<Cart movie={movie} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default Layout;

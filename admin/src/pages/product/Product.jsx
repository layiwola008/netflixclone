import './product.css';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { Publish } from '@material-ui/icons';
import { useState } from 'react';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { useContext } from 'react';
import { updateMovie } from '../../context/movieContext/apiCalls';

export default function Product() {
    const location = useLocation();
    const movie = location.state.movie;
    const { dispatch } = useContext(MovieContext);
    const navigate = useNavigate();

    const [newMovie, setNewMovie] = useState({
      title: movie.title,
      desc: movie.desc,
      year: movie.year,
      genre: movie.genre,
      limit: movie.limit,
      trailer: movie.trailer,
      video: movie.video,
      isSeries: movie.isSeries,
      img: movie.img,
      imgTitle: movie.imgTitle,
      imgSm: movie.imgSm,

    })


    const handleChange = (e) => {
      const value = e.target.value;
      setNewMovie({ ...newMovie, [e.target.name]: value });
    };

    // WORK NEEDS TO BE DONE ON UPDATE FUNCTIONALITY
    // TO MAKE IT WORK
    const handleUpdate = (e) => {
      e.preventDefault();
      updateMovie(newMovie, dispatch);
      navigate("/movies");
    };

    console.log("NEW MOVIE", newMovie)

  return (
    <div className='product'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newproduct">
        <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
            <div className="productInfoTop">
                <img src={movie.img} alt="" className="productInfoImg" />
                <span className="productName">{movie.title}</span>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">Id:</span>
                    <span className="productInfoValue">{movie._id}</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">Genre:</span>
                    <span className="productInfoValue">{movie.genre}</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">Year:</span>
                    <span className="productInfoValue">{movie.year}</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">Limit:</span>
                    <span className="productInfoValue">{movie.limit}</span>
                </div>
            </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
            <div className="productFormLeft">
                <label>Movie Title</label>
                <input type="text" name="title" value={newMovie.title} onChange={handleChange} />
                <label>Description</label>
                <input type="text" name="desc" value={newMovie.desc} onChange={handleChange} />
                <label>Yeark</label>
               <input type="text" name="year" value={newMovie.year} onChange={handleChange} />
                <label>Genre</label>
               <input type="text" name="genre" value={newMovie.genre} onChange={handleChange} />
                <label>Limit</label>
               <input type="text" name="limit" value={newMovie.limit} onChange={handleChange} />
                
                <label>Trailer</label>
               <input type="text" name="trailer" value={newMovie.trailer} onChange={handleChange} />
                <label>Video</label>
               <input type="text" name="video" value={newMovie.video} onChange={handleChange} />
                
            </div>
            <div className="productFormRight">
                <div className="productUpload">
                    <img src={movie.img} alt="" className="productUploadImg" />
                    <label for="file">
                        <Publish />
                    </label>
                    <input type="file" id="file" style={{display: "none"}} />
                </div>
                <button className="productButton" onClick={handleUpdate}>Update</button>
            </div>
        </form>
      </div>
    </div>
  )
}

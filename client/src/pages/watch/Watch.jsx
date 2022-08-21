import './watch.css';
import { ArrowBackOutlined } from "@material-ui/icons";
import ReactPlayer from 'react-player';
import { Link, useLocation } from 'react-router-dom';

export default function Watch() {
    const location = useLocation();
    const movie = location.state.movie;

  return (
    <div className='watch'>
      <Link to="/" className='link'>
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
      </Link>
        <ReactPlayer className="video" width="100%" url={movie.video} height="100%" playing={true} loop={true} controls={true} muted />
    </div>
  )
}

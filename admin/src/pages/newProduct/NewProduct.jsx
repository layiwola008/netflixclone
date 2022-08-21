import { useContext, useState } from "react";
import "./newProduct.css";
import { storage } from "../../firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { useNavigate } from "react-router-dom";

export default function NewProduct() {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  // const [trailer, setTrailer] = useState(null);
  // const [video, setVideo] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(0);

  const navigate = useNavigate();

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const uploads = [
    { file: img, label: "img" },
    { file: imgTitle, label: "imgTitle" },
    { file: imgSm, label: "imgSm" },
  ];

  const handleUpload = (e) => {
    e.preventDefault();
    const promises = [];
    // eslint-disable-next-line array-callback-return
    uploads.map((upload) => {
      const sotrageRef = ref(storage, `/items/${upload.file.name + uuidv4()}`);
      uploadBytes(sotrageRef, upload.file).then(() => {
        console.log("Images uploaded");
      });

      const uploadTask = uploadBytesResumable(sotrageRef, upload.file);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (error) => console.log(error),
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            //setURLs(prevState => [...prevState, downloadURLs])
            setMovie((prev) => {
              return { ...prev, [upload.label]: url };
            });
            setUploaded((prev) => prev + 1);
            console.log("File available at", url);
          });
        }
      );

      Promise.all(promises)
        .then(() => console.log("All images uploaded"))
        .then((err) => console.log(err));
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
    navigate("/movies");
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title image</label>
          <input
            type="file"
            id="imgTitle"
            name="imgTitle"
            onChange={(e) => setImgTitle(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Thumbnail image</label>
          <input
            type="file"
            id="imgSm"
            name="imgSm"
            onChange={(e) => setImgSm(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="50 Shades of Gray"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input
            type="text"
            placeholder="Duration"
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input
            type="text"
            placeholder="Limit"
            name="limit"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Is Series</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
      
        <div className="addProductItem">
          <label>Trailer</label>
          <input
            type="text"
            placeholder="Trailer YouTube or Vimeo Link..."
            name="trailer"
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <label>Video</label>
          <input
            type="text"
            placeholder="Main Video YouTube or Vimeo Link..."
            name="video"
            onChange={handleChange}
          />
        </div> 

        {uploaded === 3 ? (
          <button className="addProductButton" onClick={handleSubmit}>
            Create
          </button>
        ) : (
          <button className="addProductButton" onClick={handleUpload}>
            Upload
          </button>
        )}

        <div className="progressUpload">
          {progress >= 1 && <h3>Images upload {progress} % completed...</h3>}
        </div>
      </form>
    </div>
  );
}

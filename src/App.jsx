import "./App.css";
import images from "./assets/images/imagedata";

function App() {
  const { id, src, alt } = images.image1;
  return (
    <>
      <div className="flex justify-center bg-red-700 text-white">
        <img src={src} alt={alt} />
        <p>{alt}</p>
      </div>
    </>
  );
}

export default App;

import { GalleryData } from "./GalleryData";
import { useEffect, useState } from "react";
function App() {

  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.titile))]);
  }, [])

  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.titile === itemData);
    setData(filterData);
  }

  return (
    <div className="App">
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li><button onClick={() => setData(GalleryData)}>All</button></li>
            {
              collection.map((item, index) =>
                <li key={index}>
                  <button onClick={() => { gallery_filter(item) }}>
                    {item}
                  </button>
                </li>
              )
            }
          </ul>
        </div>
        <div className="galleryContainer">
          {
            data.map((it, index) =>
              <div key={index} className="galleryItem">
                <img src={it.image} alt='avatar' />
                <p>{it.price}</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;

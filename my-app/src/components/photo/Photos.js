import React, { useEffect, useState } from "react";
import axios from "axios";

const getRandomPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// https://picsum.photos/v2/list
// https://picsum.photos/v2/list?page=2&limit=100

const Photos = () => {
  // useEffect(callback, [dependencies])
  // useEffect(function callback() {
  //   // side-effects;
  // }, []);

  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNetPage] = useState(1);

  const handleLoadMorePhotos = async () => {
    // console.log("getRandomPhotos ~ nextPage:", nextPage);
    const images = await getRandomPhotos(nextPage);
    const newPhotos = [...randomPhotos, ...images];
    console.log(images);
    setRandomPhotos(newPhotos);
    setNetPage(nextPage + 1);
  };

  // console.log("outside");
  useEffect(() => {
    // document.title = "Wellcome to useEffect";
    // console.log("inside");
    handleLoadMorePhotos();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5 max-w-[1300px] mx-auto">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => {
            return (
              <div
                key={`${item.id}-${index}`}
                className="h-[250px] bg-white p-2 rounded-lg shadow-md"
              >
                <img
                  src={`${item.download_url}?grayscale&blur=2`}
                  alt={item.author}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            );
          })}
      </div>
      <div className="text-center py-5">
        <button
          onClick={handleLoadMorePhotos}
          className="inline-block text-white bg-purple-700 font-bold py-4 px-8 text-lg hover:bg-purple-500 transition"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Photos;

import React from "react";

const Gallery = () => {
  const mediaItems = [
    {
      type: "image",
      src: "https://cdn.pixabay.com/photo/2013/07/18/10/56/earth-163972_1280.jpg",
      alt: "Earth from Space",
    },
    {
      type: "image",
      src: "https://cdn.pixabay.com/photo/2017/02/12/15/16/moon-2067832_1280.jpg",
      alt: "Moon Surface",
    },
    {
      type: "image",
      src: "https://cdn.pixabay.com/photo/2012/11/28/11/10/space-67526_1280.jpg",
      alt: "Galaxy",
    },
    {
      type: "video",
      src: "https://cdn.pixabay.com/vimeo/438272623/space-42756.mp4?width=640&hash=2b0f5d1fefcebd6215d1e394dfda8b95d8a38c52",
      alt: "Space Animation",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-10 text-purple-400">
        Space Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-60 object-cover"
              />
            ) : (
              <video
                controls
                className="w-full h-60 object-cover"
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <p className="p-4 text-center text-gray-300">{item.alt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

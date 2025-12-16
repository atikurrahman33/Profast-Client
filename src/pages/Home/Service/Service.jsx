import { useEffect, useState } from "react";


const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/service.json") // put service.json in public folder
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="bg-[#03373D] mt-16">

      {/* Header */}
      <div className="text-white text-center py-16 px-4 sm:px-6">
        <h1 className="font-extrabold text-4xl mb-3">Our Services</h1>
        <p className="font-medium max-w-3xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition hover:bg-[#CAEB66]"
            >
              {/* Fixed Image */}
              <img
                src="/src/assets/service.png"
                alt="Service"
                className="w-20 h-20 mx-auto mb-4"
              />
             

              {/* Title */}
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Service;

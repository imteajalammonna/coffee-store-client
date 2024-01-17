

const Details = () => {
    const data = {
        name: 'Special Blend Coffee',
        description: 'A delightful blend of Arabica and Robusta beans.',
        price: '12.99',
        imageUrl: 'https://i.ibb.co/8YRZwsk/13-1.png',
      };
    
    return (
        <div className="flex justify-center items-center h-[93vh]">
            <div className=" p-10 flex px-36 bg-[#F4F3F0] shadow-lg rounded-md">
                <img
                    src={data?.imageUrl}
                    alt={data?.name}
                    className="w-full h-full md:mr-20 "
                />
              <div className="w-full font-medium">
              <h2 className="text-2xl text-[#331A15] text-shadow mb-6 font-bold">{data?.name}</h2>
                <p className="text-[#331A15] mb-2 font-sans"><span className="font-bold font-sans text-lg">Name:</span> {data?.description}</p>
                <p className="text-[#331A15] mb-2 font-sans"><span className="font-bold font-sans text-lg">Chef:</span> {data?.description}</p>
                <p className="text-[#331A15] mb-2 font-sans"><span className="font-bold font-sans text-lg">Supplier:</span> {data?.description}</p>
                <p className="text-[#331A15] mb-2 font-sans"><span className="font-bold font-sans text-lg">Taste:</span> {data?.description}</p>
                <p className="text-[#331A15] mb-2 font-sans">{data?.description}</p>
                <p className="text-lg font-bold text-[#331A15] text-shadow font-sans">Price: {data?.price} TK</p>
              </div>
            </div>
        </div>
    );
};

export default Details;

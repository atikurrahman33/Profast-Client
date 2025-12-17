

const Merchant = () => {
    return (
        <div className="mb-8">
            <div data-aos="zoom-in" className=" hero bg-[url('assets/be-a-merchant-bg.png')] bg-[#33929D] p-16 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className="h-60"
                        src="/src/assets/Screenshot 2025-12-16 224154.png"
                    />
                    <div>
                        <h1 className="text-4xl font-extrabold">Merchant and Customer Satisfaction is Our First Priority</h1>
                        <p className="py-6 text-sm">We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                        </p>
                        <div className="flex gap-4">
                             <button className="bg-[#CAEB66] py-2 px-2 rounded-lg  font-bold text-xl border-2 border-[#CAEB66]">Become a Merchant</button>
                             <button className=" py-2 px-2 rounded-lg text-[#CAEB66]  font-bold text-xl border-2 border-[#CAEB66]">Earn with Profast Courier</button>
                              
                        </div>
                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Merchant;
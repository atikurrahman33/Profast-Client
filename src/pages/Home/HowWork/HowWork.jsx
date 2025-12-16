

const HowWork = () => {
    return (
        <div className="mt-8 mb-16 sm:px-6 px-2 max-w-6xl mx-auto">
           <div className="pl-2 lg:pl-0">
             <p className="font-extrabold text-2xl ">How it works</p>
           </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6  ">
                <div className="card bg-base-100  shadow-sm">
                    <div className="card-body">
                        <img className="h-12 w-12" src="/src/assets/bookingIcon.png" alt="" />
                        <h2 className="card-title">Booking Pick & Drop</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                    </div>
                </div>
                <div className="card bg-base-100  shadow-sm">
                    <div className="card-body">
                         <img className="h-12 w-12" src="/src/assets/bookingIcon.png" alt="" />
                        <h2 className="card-title">Cash On Delivery</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                    </div>
                </div>
                <div className="card bg-base-100  shadow-sm">
                    <div className="card-body">
                         <img className="h-12 w-12" src="/src/assets/bookingIcon.png" alt="" />
                        <h2 className="card-title">Delivery Hub</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                    </div>
                </div>
                <div className="card bg-base-100  shadow-sm">
                    <div className="card-body">
                         <img className="h-12 w-12" src="/src/assets/bookingIcon.png" alt="" />
                        <h2 className="card-title">Booking SME & Corporate</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default HowWork;
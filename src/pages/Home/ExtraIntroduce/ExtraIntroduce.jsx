const ExtraIntroduce = () => {
    return (
        <div className="my-12 px-4 sm:px-6 lg:px-8">
           
            <div className="card bg-base-100 shadow-sm max-w-7xl mx-auto p-4 sm:p-6 lg:flex lg:flex-row lg:h-[260px] mb-6 sm:mb-8">
                <figure className="flex items-center justify-center lg:justify-start lg:w-auto mb-4 lg:mb-0">
                    <img
                        src="/src/assets/live-tracking.png"
                        alt="Live Tracking"
                        className="w-40 h-40 sm:w-48 sm:h-48 lg:w-50 lg:h-50"
                    />
                </figure>

                
                <div className="block lg:hidden w-full border-t-2 border-dashed border-gray-300 my-4"></div>
                <div className="hidden lg:block h-4/5 border-l-2 border-dashed border-gray-300 self-center mx-4 lg:mx-8"></div>

                <div className="flex flex-col justify-center lg:pl-6 self-stretch text-center lg:text-left">
                    <h2 className="font-extrabold text-xl sm:text-2xl lg:text-3xl mb-2 lg:mb-3">Live Parcel Tracking</h2>
                    <p className="font-medium text-base sm:text-lg leading-relaxed">Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>

            
            <div className="card bg-base-100 shadow-sm max-w-7xl mx-auto p-4 sm:p-6 lg:flex lg:flex-row lg:h-[260px] mb-6 sm:mb-8">
                <figure className="flex items-center justify-center lg:justify-start lg:w-auto mb-4 lg:mb-0">
                    <img
                        src="/src/assets/safe-delivery.png"
                        alt="Live Tracking"
                        className="w-40 h-40 sm:w-48 sm:h-48 lg:w-50 lg:h-50"
                    />
                </figure>

                <div className="block lg:hidden w-full border-t-2 border-dashed border-gray-300 my-4"></div>
                <div className="hidden lg:block h-4/5 border-l-2 border-dashed border-gray-300 self-center mx-4 lg:mx-8"></div>

                <div className="flex flex-col justify-center lg:pl-6 self-stretch text-center lg:text-left">
                    <h2 className="font-extrabold text-xl sm:text-2xl lg:text-3xl mb-2 lg:mb-3">100% Safe Delivery</h2>
                    <p className="font-medium text-base sm:text-lg leading-relaxed">We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                </div>
            </div>

            
            <div className="card bg-base-100 shadow-sm max-w-7xl mx-auto p-4 sm:p-6 lg:flex lg:flex-row lg:h-[260px]">
                <figure className="flex items-center justify-center lg:justify-start lg:w-auto mb-4 lg:mb-0">
                    <img
                        src="/src/assets/live-tracking.png"
                        alt="Live Tracking"
                        className="w-40 h-40 sm:w-48 sm:h-48 lg:w-50 lg:h-50"
                    />
                </figure>

                <div className="block lg:hidden w-full border-t-2 border-dashed border-gray-300 my-4"></div>
                <div className="hidden lg:block h-4/5 border-l-2 border-dashed border-gray-300 self-center mx-4 lg:mx-8"></div>

                <div className="flex flex-col justify-center lg:pl-6 self-stretch text-center lg:text-left">
                    <h2 className="font-extrabold text-xl sm:text-2xl lg:text-3xl mb-2 lg:mb-3">24/7 Call Center Support</h2>
                    <p className="font-medium text-base sm:text-lg leading-relaxed">Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraIntroduce;
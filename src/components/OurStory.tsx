
const OurStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gowith-dark-blue mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2008, GowithSupport began with a simple mission: to provide businesses with enterprise-level IT solutions that were both accessible and affordable.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              What started as a small team of passionate technologists has grown into a comprehensive IT services provider trusted by businesses across multiple industries. Throughout our growth, we've maintained our commitment to personalized service and technical excellence.
            </p>
            <p className="text-lg text-gray-600">
              Today, GowithSupport serves clients of all sizes, from growing startups to established enterprises, helping them leverage technology to achieve their business goals.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="GowithSupport team meeting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gowith-light-blue p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-white font-bold text-xl">
                "Technology empowers businesses when it's aligned with their vision."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;

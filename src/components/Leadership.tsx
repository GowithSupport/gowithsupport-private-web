
const Leadership = () => {
  const leaders = [
    {
      name: "Michael Reynolds",
      position: "Chief Executive Officer",
      bio: "With over 20 years in technology leadership, Michael drives GowithSupport's strategic vision and growth initiatives.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Sarah Chen",
      position: "Chief Technology Officer",
      bio: "Sarah leads our technical strategy, bringing extensive experience in enterprise architecture and cybersecurity.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
    },
    {
      name: "David Wilson",
      position: "Client Success Director",
      bio: "David ensures our clients receive exceptional service and that our solutions deliver measurable business value.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      name: "Jennifer Martinez",
      position: "Security Practice Lead",
      bio: "Jennifer oversees our cybersecurity services, bringing specialized expertise in risk management and compliance.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gowith-dark-blue mb-4">
            Our Leadership Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals who guide our company's strategy and operations. Our leadership team brings decades of combined experience in technology, business, and client service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gowith-dark-blue">{leader.name}</h3>
                <p className="text-gowith-medium-blue font-medium mb-3">{leader.position}</p>
                <p className="text-gray-600">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;

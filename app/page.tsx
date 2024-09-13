import dynamic from 'next/dynamic';

const GeometricBackground = dynamic(() => import('./components/GeometricBackground'), {
  ssr: false,
  loading: () => <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: '#1D1E2C' }}></div>
});

export default function Home() {
  return (
    <div className="min-h-screen text-[#FFFFFF] relative overflow-hidden">
      <GeometricBackground />
      
      {/* Hero Section */}
      <section className="py-24 text-center relative z-10">
        <h1 className="text-6xl font-bold mb-4 text-[#FFFFFF] font-helvetica">YESHITILABS</h1>
        <p className="text-3xl mb-8 text-[#00F0FF]">Your Guide in the World of Web3</p>
        <button className="bg-[#8A84E2] text-[#FFFFFF] font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition duration-300 text-lg">
          Contact Us
        </button>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#8A84E2] bg-opacity-10 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#00F0FF]">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Blockchain Strategy', 
              'Smart Contract Development', 
              'DApp Architecture', 
              'Web3 Integration',
              'Zero Knowledge Cryptography'
            ].map((service) => (
              <div key={service} className="bg-[#1D1E2C] bg-opacity-50 p-6 rounded-lg backdrop-blur-lg hover:bg-opacity-70 transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-[#00F0FF] text-center">{service}</h3>
                <p className="text-[#FFFFFF] text-center">Innovative solutions tailored to your business needs in the decentralized landscape.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Approach</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              'Transparent working plan',
              'Clear milestones and deliverables',
              'Internal cross-review',
              'Follow-up guidance',
              'Full confidentiality',
              'Cutting-edge solutions'
            ].map((item) => (
              <div key={item} className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4"></div>
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
          <p className="text-lg max-w-3xl mx-auto text-center">
            YeshitiLabs is a leading web3 consulting firm, helping businesses navigate the decentralized future. Our team of experts brings years of experience in blockchain technology, smart contract development, and decentralized applications.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Business?</h2>
        <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition duration-300 text-lg">
          Contact Us
        </button>
      </section>
    </div>
  );
}

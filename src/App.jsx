import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Leaflet icon setup (from original code)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function Hire1PercentHomePage() {
  // --- FORM LOGIC (UNCHANGED) ---
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://hire1percent-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      console.log(res)

      if (res.ok) {
        setFormData({ name: '', email: '', message: '' });
        setStatus({ type: 'success', message: 'Message sent successfully!' });
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Server error. Please try again later.' });
    }

    setTimeout(() => setStatus({ type: '', message: '' }), 5000);
  };
  // --- END OF UNCHANGED LOGIC ---

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="fixed bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>

      {/* Navigation Bar */}
      <header className="fixed top-0 w-full z-50 shadow-sm bg-white/80 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-700 tracking-tight">Hire1Percent</h1>
           <div className="space-x-4">
    <a href="#home" className="text-blue-800 hover:text-blue-600">Home</a>
    <a href="#whatwedo" className="text-blue-800 hover:text-blue-600">About Us</a>
    <a href="#contact" className="text-blue-800 hover:text-blue-600">Contact</a>
    <a href="#office" className="text-blue-800 hover:text-blue-600">Our Office</a>
  </div>
        </nav>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section  id="home" className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Top <span className="text-blue-600">1% Talent</span> for the Best Companies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mb-8">
            We connect elite candidates with leading companies using smart, transparent, and efficient hiring processes.
          </p>
          <button className="px-8 py-4 bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-800 transform hover:scale-105 transition-all duration-300">
            Get Started
          </button>
        </section>

        {/* Content Sections Wrapper */}
        <div className="space-y-20 py-20">
          {/* What We Do Section */}
          <section id="whatwedo" className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-3xl font-bold mb-4 text-blue-800">What We Do</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We source, vet, and connect top-tier professionals with leading companies using proprietary dashboards, automated pipelines, and rigorous selection criteria.
                </p>
              </div>
              <div className="hidden md:block text-center">
                 <span className="text-6xl" role="img" aria-label="magnifying glass">🔍</span>
              </div>
            </div>
          </section>

          {/* How We Do It Section */}
          <section className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="hidden md:block text-center order-last md:order-first">
                 <span className="text-6xl" role="img" aria-label="gears">⚙️</span>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-3xl font-bold mb-4 text-blue-800">How We Do It</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our process includes automated assessments, real-time dashboards for admins and clients, and a transparent communication workflow to ensure quality.
                </p>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section id="about" className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-3xl font-bold mb-4 text-blue-800">About Us</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Hire1Percent is built by industry professionals who understand what elite hiring really looks like. We focus on the top 1% of candidates for roles that matter.
                  </p>
                </div>
                <div className="hidden md:block text-center">
                    <span className="text-6xl" role="img" aria-label="rocket">🚀</span>
                </div>
            </div>
          </section>
        </div>

        {/* Contact Form */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100">
            <h3 className="text-3xl font-bold mb-8 text-blue-800 text-center">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text" name="name" value={formData.name} required placeholder="Your Name"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                onChange={handleChange}
              />
              <input
                type="email" name="email" value={formData.email} required placeholder="Your Email"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                onChange={handleChange}
              />
              <textarea
                name="message" value={formData.message} required placeholder="Your Message"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition h-32 resize-none"
                onChange={handleChange}
              />
              {status.message && (
                <div className={`text-center font-medium rounded-lg p-3 ${status.type === 'success' ? 'text-green-800 bg-green-100' : 'text-red-800 bg-red-100'}`}>
                  {status.message}
                </div>
              )}
              <button type="submit" className="w-full bg-blue-600 text-white py-4 text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Map Section */}
       <section  id="office" className="max-w-6xl mx-auto px-6 py-20">
  <h3 className="text-2xl font-bold text-blue-800 text-center mb-6">Our Office</h3>
   <div className="rounded-xl overflow-hidden shadow-md h-96">
     <iframe
      title="Hire1Percent Office Location"
      src="https://maps.google.com/maps?q=17.423718986253906, 78.44035306735397&z=17&output=embed"
      width="100%"
      height="100%"
      allowFullScreen
      loading="lazy"
      className="border-0"
    ></iframe>
  </div>
</section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center mt-10">
        <p className="text-gray-400">© {new Date().getFullYear()} Hire1Percent. All rights reserved.</p>
      </footer>
    </div>
  );
}
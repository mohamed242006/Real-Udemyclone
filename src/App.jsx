import React from 'react';

function App() {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-cyan-50 text-center py-3 text-sm font-medium">
        New-learner offer | Courses from E£299.99. Click button to see savings.{' '}
        <button className="ml-4 bg-purple-600 text-white px-4 py-1 rounded text-sm font-bold">
          Click to redeem
        </button>
        <span className="ml-2">Ends in 5h 58m 7s.</span>
      </div>

      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-4xl font-bold text-purple-700">udemy</h1>
          </div>

          <div className="flex-1 max-w-2xl mx-8">
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full border border-gray-300 rounded-full py-3 px-6 text-sm"
            />
          </div>

          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-purple-700">Plans & Pricing</a>
            <a href="#" className="hover:text-purple-700">Udemy Business</a>
            <a href="#" className="hover:text-purple-700">Teach on Udemy</a>
            <a href="#" className="text-2xl">🛒</a>
            <button className="border border-black px-4 py-2">Log in</button>
            <button className="bg-black text-white px-4 py-2">Sign up</button>
            <div className="ml-4 text-2xl">🌐</div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="max-w-lg bg-white p-10 shadow-lg">
            <h2 className="text-4xl font-bold mb-4">Subscribe to the best of Udemy</h2>
            <p className="text-gray-700 mb-6">
              With Personal Plan, you get access to 26,000+ of our top-rated courses in tech, business, and more.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded font-medium text-lg">
              Try it now
            </button>
          </div>
          <img src="/banner-woman.jpg" alt="Woman" className="w-96" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Learn essential career and life skills</h2>
          <p className="text-gray-600 mb-10">
            Udemy helps you build in-demand skills fast and advance your career in a changing job market.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded shadow">
              <img src="/generative-ai.jpg" alt="Generative AI" className="w-full rounded-t" />
              <div className="p-6 text-center">
                <p className="text-3xl font-bold">17M+</p>
                <p className="text-lg">Generative AI</p>
              </div>
            </div>

            <div className="bg-white rounded shadow">
              <img src="/it-cert.jpg" alt="IT Certifications" className="w-full rounded-t" />
              <div className="p-6 text-center">
                <p className="text-3xl font-bold">14M+</p>
                <p className="text-lg">IT Certifications</p>
              </div>
            </div>

            <div className="bg-white rounded shadow">
              <img src="/data-science.jpg" alt="Data Science" className="w-full rounded-t" />
              <div className="p-6 text-center">
                <p className="text-3xl font-bold">8.1M+</p>
                <p className="text-lg">Data Science</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Era Section - Perfect Card Style like real Udemy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#0F001A] rounded-3xl overflow-hidden">
            <div className="p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">Reimagine your career in the AI era</h2>
              <p className="text-lg mb-8 opacity-90">
                Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.
              </p>
              <div className="space-y-4 mb-10 text-lg">
                <div className="flex items-center gap-3">⭐ Learn AI and more</div>
                <div className="flex items-center gap-3">🏆 Prep for a certification</div>
                <div className="flex items-center gap-3">📝 Practice with AI coaching</div>
                <div className="flex items-center gap-3">💼 Advance your career</div>
              </div>
              <button className="bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-100 transition">
                Learn more
              </button>
              <p className="mt-4 text-sm opacity-80">Starting at E£204.00/month</p>
            </div>
            <div className="relative">
              <img src="/ai-era-man.jpg" alt="AI era" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Skills to transform your career and life</h2>
          <p className="text-gray-600 mb-10">
            From critical skills to technical topics, Udemy supports your professional development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: "ai-engineer.jpg", title: "The AI Engineer Course 2025: Complete AI Engineer Bootcamp", author: "365 Careers", price: "E£349.99" },
              { img: "ai-agents.jpg", title: "Intro to AI Agents and Agentic AI", author: "365 Careers", price: "E£349.99" },
              { img: "salesforce-ai.jpg", title: "The Complete Guide To AI Powered Salesforce Development", author: "Matt Gerry", price: "E£349.99" },
              { img: "chatgpt-business.jpg", title: "Artificial Intelligence for Business + ChatGPT Prize [2025]", author: "Hadelin de Ponteves, Kirill Eremenko...", price: "E£719.99" },
            ].map((course, i) => (
              <div key={i} className="border rounded hover:shadow-lg transition">
                <img src={`/${course.img}`} alt="" className="w-full" />
                <div className="p-4">
                  <h3 className="font-semibold text-sm line-clamp-2">{course.title}</h3>
                  <p className="text-xs text-gray-600 mt-1">{course.author}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-green-600 font-bold">{course.price}</span>
                    <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">Bestseller</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Trust */}
      <footer className="bg-gray-100 py-16 text-center">
        <p className="text-lg mb-10">
          Trusted by over 17,000 companies and millions of learners around the world
        </p>
        <div className="flex flex-wrap justify-center gap-12 opacity-70">
          {["vw.png", "samsung.png", "cisco.png", "vimeo.png", "pwc.png", "hp.png", "citi.png", "ericsson.png"].map((logo) => (
            <img key={logo} src={`/${logo}`} alt="" className="h-10" />
          ))}
        </div>
      </footer>
    </>
  );
}

export default App;
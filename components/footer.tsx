export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold">
            Christar<span className="text-blue-500">Lumina</span>
          </h2>
          <p className="mt-5 text-gray-400 max-w-sm">
            Turning ideas into reality through innovative digital solutions.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-5">Explore</h3>
          <div className="space-y-3 text-gray-400">
            <p>About</p>
            <p>Services</p>
            <p>Portfolio</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-5">Services</h3>
          <div className="space-y-3 text-gray-400">
            <p>Web Development</p>
            <p>Mobile Applications</p>
            <p>UI/UX Design</p>
            <p>Automation</p>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Christar Lumina. All Rights Reserved.
      </div>
    </footer>
  );
}

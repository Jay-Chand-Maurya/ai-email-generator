function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">AI<span className="text-purple-400">Email</span></span>
            <span className="text-gray-500 text-sm">|</span>
            <span className="text-gray-400 text-sm">AI-Powered Email Generator</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {currentYear} AI Email Generator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
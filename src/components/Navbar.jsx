function Navbar() {
  return (
    <header class="sticky top-0 z-50 bg-white shadow-sm">
  <nav class="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
    
  
    <a href="#" class="flex items-center gap-2 font-bold text-lg text-gray-800">
      <img src="logo.png" alt="Logo" class="w-6 h-6" /> SarthakCodes
    </a>

 
    <ul class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
      <li><a href="#home" class="hover:text-green-700 transition">Home</a></li>
      <li><a href="#about" class="hover:text-green-700 transition">About</a></li>
      <li><a href="#skills" class="hover:text-green-700 transition">Skills</a></li>
      <li><a href="#projects" class="hover:text-green-700 transition">Projects</a></li>
      <li><a href="#certifications" class="hover:text-green-700 transition">Certifications</a></li>
    </ul>

    <div class="hidden md:block">
      <a href="#contact" 
         class="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium transition">
        Contact Me
      </a>
    </div>

    <button class="md:hidden text-gray-700 focus:outline-none">
      ☰
    </button>
  </nav>
</header>

  );
}
export default Navbar;

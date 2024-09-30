function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 bg-white-800 text-black ">
  
    <div className="flex-1 pl-20">
      <img src = "images\brand_logo.png "></img>
    </div>
  
    <div className="flex-1 text-center">
      <nav>
        <ul className="flex justify-center space-x-8 font-bold">
          <li><a href="#" class="hover:text-gray-400">MENU</a></li>
          <li><a href="#" class="hover:text-gray-400">LOCATION</a></li>
          <li><a href="#" class="hover:text-gray-400">ABOUT</a></li>
          <li><a href="#" class="hover:text-gray-400">CONTACT</a></li>
        </ul>
      </nav>
    </div>
  
    <div className="flex-1 text-right text-white pr-20">
      <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
        LOGIN IN
      </button>
    </div>
  </header>
  
  );
}

export default Navbar;
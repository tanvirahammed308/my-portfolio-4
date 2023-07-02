import { Link } from "react-router-dom";

const Navbar = () => {
  const handleDownload = () => {
    const downloadUrl = 'https://drive.google.com/file/d/1AHnKgEHwX7FKIzXaSjo72KD3DJnti4sm/view?usp=sharing'; // Replace with your file URL
  
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Resume of tanvir.pdf'; // Replace with your desired file name
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    const navOptions=
    <>
    <li><Link to='/' className="font-bold">Home</Link></li>
    <li><Link to='/about' className="font-bold">About</Link></li>
    <li><Link to='/portfolio' className="font-bold">Portfolio</Link></li>
     
      <li><Link to='/contact' className="font-bold">Contact</Link></li>
    </>
    return (
        <>
          <div className="navbar bg-green-600">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
       {navOptions}
      </ul>
    </div>
    <a className="font-bold normal-case text-xl md:ml-5 absolute ml-20">Tanvir <span className="block relative right-5">Ahammed</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn btn-outline btn-primary" onClick={handleDownload}>Resume</button>
  </div>
</div>  
        </>
    );
};

export default Navbar;
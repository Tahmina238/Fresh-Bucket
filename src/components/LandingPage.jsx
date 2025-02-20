// import { CgProfile } from "react-icons/cg";

// const LandingPage = () => {
//   return (
//     <div className="w-full bg-black h-20  text-white">
//       <div className="  md:w-[90%] m-6  flex  align-center justify-between p-6 ">
//         <img className="pl-40 " src="src/assets/images/heading.png" alt="" />

//         <div className="flex flex-col lg:flex-row align-center justify-between gap-10">
//           <list>Home</list>
//           <list>Product</list>
//           <list>Portfolio</list>
//           <list>Pages</list>
//           <list>Contact</list>
//         </div>
//         <div className=" mr-60 flex gap-6">
//           <div className="">
//             <input
//               className="w-70 rounded bg-white"
//               type="text"
//               placeholder="search"
//             />
//           </div>
//           <div>
//             <p className="">
//               <CgProfile />
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
import { CgProfile } from "react-icons/cg";

const LandingPage = () => {
  return (
    <div className="w-full bg-black h-20 text-white">
      <div className="max-w-[90%] mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <img
          className="pl-4 w-32 md:w-40"
          src="src/assets/images/heading.png"
          alt="Logo"
        />

        {/* Navigation (Hidden on small screens, shown on large screens) */}
        <nav className="hidden lg:flex items-center gap-10">
          <a href="#home" className="cursor-pointer hover:text-gray-300">
            Home
          </a>
          <a href="#product" className="cursor-pointer hover:text-gray-300">
            Product
          </a>
          <a href="#portfolio" className="cursor-pointer hover:text-gray-300">
            Portfolio
          </a>
          <a href="#pages" className="cursor-pointer hover:text-gray-300">
            Pages
          </a>
          <a href="#contact" className="cursor-pointer hover:text-gray-300">
            Contact
          </a>
        </nav>

        {/* Search & Profile Section */}
        <div className="flex items-center gap-4">
          <input
            className="w-32 md:w-48 rounded bg-white text-black px-2 py-1"
            type="text"
            placeholder="Search"
          />
          <CgProfile className="text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

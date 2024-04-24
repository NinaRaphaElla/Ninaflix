import React from "react";

const Footer = () => {
  return (
    <>
      <div className="space-y-5 mt-96 mb-8">
        <div className="text-white text-sm flex justify-between px-96">
          <p className="hover:text-primary cursor-pointer">Android App</p>
          <p className="hover:text-primary cursor-pointer">Terms of service</p>
          <p className="hover:text-primary cursor-pointer">Contact</p>
          <p className="hover:text-primary cursor-pointer">Site map</p>
          <p className="hover:text-primary cursor-pointer">FAQ</p>
        </div>

        <div className="text-gray-500 text-xs text-center px-56">
          <p>
            NinaFlix is a Free Movies streaming site with zero ads. We let you
            watch movies online without having to register or paying, with over
            10000 movies and TV-Series. You can also Download full movies from
            MoviesCloud and watch it later if you want.
          </p>
        </div>
        <p className="text-center text-sm text-gray-500">&#169; NinaFlix</p>
      </div>
    </>
  );
};
export default Footer;

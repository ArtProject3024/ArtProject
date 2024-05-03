import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" border bg-blue-200 text-black py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          {/* Company Name */}
          <h2 className="text-lg font-bold text-black">
            Emerging Production Technologies A2: Pitch
          </h2>
        </div>
        {/* Company Address */}
        <div>
          <p className="text-sm">123 Street Name, City, Country</p>
          {/* Company Phone Number */}
          <p className="text-sm">Phone: +123 456 7890</p>
          {/* Company Email */}
          <p className="text-sm">Email: info@example.com</p>
        </div>

        <div className="flex">
          {/* Social Media Links */}
          <a href="#" className="mr-4">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="mr-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="mr-4">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

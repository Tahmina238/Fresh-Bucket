// eslint-disable-next-line no-unused-vars
const Footer = ({ image, title, subtitle, details, price, rating }) => {
  return (
    <div className="lg:w-full mt-4 bg-black text-white border-t">
      <div className="max-w-screen-xl mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Footer Left */}
          <div className="flex flex-col items-start w-full md:w-1/4">
            <img
              className="mb-10 w-1/2"
              src={"src/assets/images/concious/footer/vege.png"}
              alt="Footer Vegetable"
            />
            <div>
              <p className="text-lg mb-4">
                The titles are organized to emphasize <br />
                different aspects of the organic offerings.
                <br />
                Looking at its layout:
              </p>
              <p className="text-2xl mb-4">
                Follow us:
                <i className="text-white ml-2 fab fa-facebook"></i>
                <i className="text-white ml-2 fab fa-twitter"></i>
                <i className="text-white ml-2 fab fa-instagram"></i>
              </p>
              <p className="text-lg">
                2025© All rights reserved design by techserve4u
              </p>
            </div>
          </div>

          {/* Footer Middle */}
          <div className="flex flex-col md:w-1/4 text-lg md:text-2xl">
            <p className="text-3xl mb-6">Categories</p>
            <a
              href="/about-us"
              className="mb-4 hover:text-green-500 cursor-pointer"
            >
              About Us
            </a>
            <a
              href="/shop"
              className="mb-4 hover:text-green-500 cursor-pointer"
            >
              Shop
            </a>
            <a
              href="/resources"
              className="mb-4 hover:text-green-500 cursor-pointer"
            >
              Resources
            </a>
          </div>

          {/* Footer Right */}
          <div className="flex flex-col md:w-1/4 text-lg md:text-2xl">
            <p className="text-3xl mb-6">My Account</p>
            <p className="mb-4">Support</p>
            <p className="mb-4">Your Quotes</p>
            <p className="mb-4">Track Your Order</p>
          </div>

          {/* Footer Extra */}
          <div className="flex flex-col md:w-1/4 text-lg md:text-2xl">
            <p className="text-3xl mb-6">Contact</p>
            <p className="mb-4">Email</p>
            <p className="mb-4">Phone</p>
            <p className="mb-4">Address</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

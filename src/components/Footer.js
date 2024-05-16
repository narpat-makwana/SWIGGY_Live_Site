const Footer = () => {
    return (
      <>
        <div className="bg-slate-800 text-center font-bold text-white">
          <h2>About Us</h2>
          <p>
            Your go-to menu for ordering delicious food from your favorite
            restaurants, delivered right to your doorstep.
          </p>
        </div>
        <div className="bg-slate-800 pt-2 text-center flex gap-x-4 justify-center  text-white">
          <h2>Contact Us</h2>
          <p>Email: punefoods.com</p>
          <p>Phone: +91 8304567890</p>
          <p>Address: 77 Main Street, New Delhi, India 110047</p>
        </div>
  
        <div className="bg-slate-800 pt-4 text-center text-white">
          <p>&copy; 2024 Pune Foods MH12. All rights reserved.</p>
        </div>
      </>
    )
  }

  export default Footer;
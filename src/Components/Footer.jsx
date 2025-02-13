import React from 'react'
import logo_dark from '../assets/logo_dark.svg';
 

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-400 py-20">
        <div className="container mx-auto px-6 lg:px-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <img src={logo_dark} alt="logo"/>
            <p className='text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
            <div className="text-lg font-semibold mb-4" >
                <h1 className="text-2xl font-bold text-white mb-4" >Company</h1>
                <ul className="flex flex-col space-y-2" >
                <li><a href="#Header" className="hover:text-white">Home</a></li>
              <li><a href="#About" className="hover:text-white">About Us</a></li>
              <li><a href="#Contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="#Header" className="hover:text-white">Privacy Policy</a></li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl fontbold text-white mb-4">subscribe to your news letter</h1>
                <p className="text-lg mb-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form>
                    <input type="email"placeholder='Enter your Email' required/>
                    <button type="submit"className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none">Subscribe</button>
                </form>
            </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-2xl text-gray-500">
        <p>
          Copyright &copy; 2024 <span className="font-bold">GreatStack</span>. All
          Rights Reserved.
        </p>
      </div>

        
    </div>
  )
}

export default Footer;
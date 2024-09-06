import Logo from "../../assets/1.png";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
    initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1}}
            className="bg-lightYellow rounded-t-3xl"
    >
        <div className="container py-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* brand info */}
            <div className="space-y-3 lg:max-[300px]">
                <img src={Logo} alt="" className="w-24"/>
                <p className="text-white">
                "Experience authentic Korean cuisine at its finest at ABC Restaurant. Our restaurant brings you the rich, bold flavors of Korea, from sizzling BBQ to savory stews, crafted with fresh ingredients and traditional recipes. At ABC, we are passionate about offering a culinary journey that captures the heart of Korean food culture. Join us for an unforgettable dining experience where tradition meets taste."

                </p>
            </div>
            {/* quick links */}
                <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="">
                        <h1 className="text-xl font-semibold text-white">Quick Links</h1>
                        <ul className="space-y-3 mt-6 text-white">
                            <li className="footer-link">Home</li>
                            <li className="footer-link">About</li>
                            <li className="footer-link">Menu</li>
                            <li className="footer-link">Delivery</li>
                            <li className="footer-link">Contact Us</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="text-xl font-semibold text-white">Social Links</h1>
                        <ul className="space-y-3 mt-6 text-white">
                            <li className="footer-link">Facebook</li>
                            <li className="footer-link">Instagram</li>
                            <li className="footer-link">Twitter</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="text-xl font-semibold text-white">Contact</h1>
                        <ul className="space-y-3 mt-6 text-white">
                            <li className="footer-link">info@ABCRestaurant.lk</li>
                            <li className="footer-link">+94725500881</li>
                            <li className="footer-link font-bold text-4xl p-2 bg-red-300 text-black rounded-lg"> Delivery Hotline 0118822771</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </motion.footer>
  )
}

export default Footer
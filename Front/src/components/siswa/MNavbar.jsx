import { Link, useNavigate, useLocation, matchPath } from "react-router-dom"
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";
import { IoPerson, IoPersonOutline } from "react-icons/io5";
import CustomWidth from "../../CustomWidth";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { useEffect, useState } from "react";
import { PiScrollFill, PiScrollLight } from "react-icons/pi";

const Mnvbar = () => {
    const [SelectNavbar, setNavbar] = useState(0);
    const WMobile = CustomWidth() <= 767;
    const location = useLocation();

    const SelectSidebars = (props) => {
        setNavbar(props);
    }

    useEffect(() => {
        const { pathname } = location;
        if (matchPath('/Siskoolbe/Siswa', pathname)) SelectSidebars(0);
        else if (matchPath('/Siskoolbe/Siswa/Profile', pathname)) SelectSidebars(1);
        else if (matchPath('/Siskoolbe/AboutUs', pathname)) {
            // SelectSidebars(1)
            SelectSidebars(2)
        }
        else if(matchPath('/Siskoolbe/Siswa/Profset', pathname)) SelectSidebars(1);
    }, [location])

    return (
        <>
            {!WMobile ? (
                <div>

                </div>
            ) : (
                <>
                    <nav className="flex fixed bottom-0 left-0 w-full bg-[#D9D9D9]"
                    style={{borderTop: '1px solid #000000'}}>
                        <Link className={`flex flex-col w-full items-center px-2 py-2 text-black dark:bg-opacity-50 m-3
                        ${SelectNavbar === 0 ? 'bg-blue-700 bg-opacity-50 text-white rounded-xl' : ''}
                        `}
                            to="/Siskoolbe/Siswa"
                            onClick={() => SelectSidebars(0)}>
                            {SelectNavbar === 0 ? <AiFillHome className="w-5 h-5" /> : <AiOutlineHome className="w-5 h-5" />}
                            <span className={`mx-2 text-[14px] font-normal font-inter`}>Home</span>
                        </Link>

                        <Link className={`flex flex-col w-full items-center px-2 py-2 text-black dark:bg-opacity-50 m-3
                        ${SelectNavbar === 1 ? 'bg-blue-700 bg-opacity-50 text-white rounded-xl' : ''}
                        `}
                            to="/Siskoolbe/Siswa/Profile"
                            onClick={() => SelectSidebars(1)}>
                            {SelectNavbar === 1 ? <IoPerson className="w-5 h-5" /> : <IoPersonOutline className="w-5 h-5" />}
                            <span className="mx-2 text-[14px] font-normal font-inter">Profile</span>
                        </Link>

                        <Link className={`flex flex-col w-full items-center px-2 py-2 text-black dark:bg-opacity-50 m-3
                        ${SelectNavbar === 2 ? 'bg-blue-700 bg-opacity-50 text-white rounded-xl' : ''}
                        `}
                            to="/Siskoolbe/AboutUs"
                            onClick={() => SelectSidebars(2)}>
                            {SelectNavbar === 2 ? <PiScrollFill className="w-5 h-5 " /> : <PiScrollLight className="w-5 h-5" />}
                            <span className="mx-2 text-[14px] font-normal font-inter">About Us</span>
                        </Link>
                        
                    </nav>

                </>
            )}
        </>
    );
};
export default Mnvbar;
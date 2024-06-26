import React from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import './Styling.css'; 
import { GoPencil } from "react-icons/go";
import CustomWidth from '../CustomWidth';

const ProfilePicture = ({gambar_profil}) => {
    const handleHover = () => {
        const image = document.getElementById('gambarprofil');
        image.classList.add('hovered');
    };

    const handleLeave = () => {
        const image = document.getElementById('gambarprofil');
        image.classList.remove('hovered');
    };

    const WMobile = CustomWidth() <= 767;

    return (
        <div>
            <div className="image-container"
            onMouseEnter={handleHover} 
            onMouseLeave={handleLeave}>
                <img
                    id='gambarprofil'
                    className="object-cover lg:w-32 lg:h-32 md:w-24 md:h-24 mx-2 rounded-full"
                    src={gambar_profil}
                    onError={(e) => (e.target.src = "https://i.pinimg.com/564x/4c/85/31/4c8531dbc05c77cb7a5893297977ac89.jpg")} 
                    alt="avatar"
                />
                <AiOutlineCamera className="camera-icon"
                />
            </div>
        </div>
    );
};

export default ProfilePicture;

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
import React from 'react';
import certifikat from "../Img/certifikat.webp";
import { Link } from 'react-router-dom';
import PageWrapper from "../Components/PageWrapper";


const Certifikat = () => {
    const images = [certifikat, certifikat, certifikat, certifikat];

    const renderGallery = () => {
        return images.map((image, index) => (
            <a href={image} key={index} data-lg-item={`{"src": "${image}"}`} className="group w-full m-5 h-[500px] overflow-hidden relative inline-block cursor-pointer mx-auto">
                <img src={image} alt={`Gallery item ${index}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center  group-hover:opacity-100 transition-opacity duration-300">
                </div>
            </a>
        ));
    };

    return (
       
         <PageWrapper>
             <div className="w-full max-w-base mx-auto py-3 px-5">
            <div className=" my-10 lg:my-14">
                <h2 className='mb-5 opacity-60'>
                    <Link to='/' className='text-[#79c701]'>Главная  / </Link>Сертификаты</h2>
                <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>Сертификаты</h1>
            </div>
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgShare, lgRotate, lgVideo, lgAutoplay, lgZoom]}
                elementClassNames="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4 md:gap-6 lg:gapx-8 pb-14"
                escKeyClose={true}
                download={false}
                zoom={true}
            >
                {renderGallery()}
            </LightGallery>
        </div>
         </PageWrapper>
    );
};

export default Certifikat;

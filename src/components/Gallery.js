import React from "react";
import {Galleria} from "primereact/galleria";

function Gallery({images}) {

    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return <img src={item.image.replace('upload/','upload/w_600,h_600,c_scale/')} alt={item.id} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.image.replace('upload/','upload/w_80,h_80,c_scale/')} alt={item.id} style={{ display: 'block' }} />;
    }


    return (
        <Galleria
            className="p-2"
            value={images}
            style={{ backgroundColor: '#191C24' }}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
            responsiveOptions={responsiveOptions}
            circular autoPlay transitionInterval={3000} numVisible={5} />
    )
}

export default Gallery;
import React, {useEffect, useState} from "react";
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
        return <img src={item.image} alt={item.id} style={{ width: '100%' }} />
    }

    return (
        <Galleria className="p-2" value={images} style={{ backgroundColor: '#191C24' ,maxWidth: 'auto' }} showThumbnails={false} showIndicators item={itemTemplate} />
    )
}

export default Gallery;
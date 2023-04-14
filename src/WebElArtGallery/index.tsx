import {Photo} from './type'
import style from './index.module.scss'
import { useState } from 'react';
import { MainPhoto } from './MainPhoto';
import { PreviewGallery } from './PreviewGallery';
import { Navigation } from './Navigation';

interface WebElArtGalleryProps {
  photos: Photo[]
}
export const WebElArtGallery: React.FC<WebElArtGalleryProps> = ({
  photos
}) => {
    if(!photos.length) {
      return null;
    }

    const [indexActivePhoto, setIndexActivePhoto] = useState(0);
    const activePhoto = photos[indexActivePhoto];
    const prevPhoto = photos[indexActivePhoto - 1];
    const nextPhoto = photos[indexActivePhoto + 1];

    return (
      <div className={style.webelArtGallery}>
        <div className={style.webelArtGalleryContainer}>
          <MainPhoto 
            prevPhoto={prevPhoto} 
            activePhoto={activePhoto} 
            nextPhoto={nextPhoto}
            className={style.webelartMainPhoto}
          />
          <Navigation
            className={style.webelArtGalleryNavigation}
            disabledPrev={!prevPhoto}
            disabledNext={!nextPhoto}
            onPrevClick={() => {
              setIndexActivePhoto(indexActivePhoto - 1)
            }}
            onNextClick={() => {
              setIndexActivePhoto(indexActivePhoto + 1)
            }}
          />
        </div>
        <PreviewGallery 
          activePhotoIndex={indexActivePhoto}
          photos={photos}
          className={style.webelArtGalleryPreviewList}
        />
      </div>
    )
}
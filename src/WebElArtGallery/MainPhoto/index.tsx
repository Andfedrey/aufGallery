import {Photo, CommonClassProps} from '../type'
import style from './index.module.scss'
import cl from 'classnames'

interface MainPhotoProps extends CommonClassProps {
  prevPhoto?: Photo;
  activePhoto: Photo;
  nextPhoto?: Photo;
}

export const MainPhoto: React.FC<MainPhotoProps> = ({
  prevPhoto,
  activePhoto,
  nextPhoto,
  className
}) => {
  return (
    <div className={cl(className, style.mainPhoto)}>
      {
        prevPhoto && (
          <img
            className={style.mainPhotoImage}
            src={prevPhoto.src}
            alt={prevPhoto.description}
          ></img>
        )
      }
      <img
        className={style.mainPhotoImage}
        src={activePhoto.src}
        alt={activePhoto.description}
      ></img>
      {
        nextPhoto && (
          <img
            className={style.mainPhotoImage}
            src={nextPhoto.src}
            alt={nextPhoto.description}
          ></img>
        )
      }
    </div>
  )
}

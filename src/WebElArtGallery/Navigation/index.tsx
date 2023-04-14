import cl from 'classnames'
import {Photo, CommonClassProps} from '../type'
import style from './index.module.scss'

interface NavigationProps extends CommonClassProps {
  disabledPrev: boolean
  disabledNext: boolean
  onPrevClick: () => void
  onNextClick: () => void
}

export const Navigation: React.FC<NavigationProps> = ({
  disabledPrev,
  disabledNext,
  onPrevClick,
  onNextClick,
  className
}) => {
  return (
    <div className={cl(style.navigation, className)}>
      <button
        disabled={disabledPrev}
        className={cl(
          style.navigationBtn,
          style.navigationBtnLeft
        )}
        onClick={onPrevClick}
      >show previes photo</button>
      <button
        disabled={disabledNext}
        className={cl(
          style.navigationBtn,
          style.navigationBtnRight
        )}
        onClick={onNextClick}
      >show next photo</button>
    </div>
  )
}

import style from 'components/Header/style.module.css';
import {MdOutlineNetworkCell} from 'react-icons/md';
import {BiWifi} from 'react-icons/bi';
import {RiBatteryChargeFill} from 'react-icons/ri';

function Header() {
  return (
    <header className={style.header}>
        <div className={style.title}>
            <strong> 9:41 </strong>
        </div>
        <div className={style.icons}>
            <ul>
                <li>
                    <MdOutlineNetworkCell />
                </li>
                <li>
                    <BiWifi />
                </li>
                <li>
                    <RiBatteryChargeFill />
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header
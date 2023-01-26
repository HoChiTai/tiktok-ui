import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.mdule.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <img src={images.logo} alt="Tiktok" />
                <div className={cx("search")}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx("clear")}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon icon={faSpinner} className={cx("loading")} />
                    <button className={cx("search-btn")}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className={cx("action")}></div>
            </div>
        </header>
    );
}

export default Header;

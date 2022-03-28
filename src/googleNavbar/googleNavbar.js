import style from './googleNavbar.module.css'

function Navbar(){
    return (
      <>
        <div className={style.navbarContainer}>
          <div className={style.leftContainer}>
            <ul className={style.leftnavbarWrapper}>
              <li>
                About
                <div className={style.line}></div>
              </li>
              <li>
                Store
                <div className={style.line}></div>
              </li>
            </ul>
          </div>
          <div className={style.rightContainer}>
            <ul className={style.rightnavbarWrapper}>
              <li>Gmail</li>
              <li>Images</li>
            </ul>
          </div>
        </div>
      </>
    );
}

export default Navbar
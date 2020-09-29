import React from 'react';
import soleado from '../images/soleado.png';
import lluvia from '../images/lluvia.png';
import styles from './header.module.css';

const Header = () => {
    return ( 
        <nav className={styles.navegacion}>
            <h1 className={styles.title}>Servicio Meteorológico</h1>
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img className={styles.image} src={soleado} alt="logo clima" />
                </div>
                <div className={styles.flipCardBack}>
                  <img className={styles.image2} src={lluvia} alt="logo clima" />
                </div>
              </div>
            </div>
        </nav>
     );
}
 
export default Header;
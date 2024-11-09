// import React from 'react'
// import styles from '../styles/Footer.module.css'

// export const Footer = () => {
//     return (
//         <div className={styles.footer}>
//             <div className={styles.container}>
//                 <img src={'/logo_dark.png'} alt="Logo" className={styles.logo} />
//                 <button>Share A Car</button>
//             </div>
//         </div>
//     )
// }


import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
            <Image src={'/logo_dark.png'} alt='Logo' width={50} height={50} className={styles.logo} />
                <button>Share A Car</button>
            </div>
            <div className={styles.footerText}>
                <p>&copy; 2024 Your Company. All rights reserved.</p>
                <p>Contact us: <a href="mailto:support@example.com">support@example.com</a></p>
            </div>
        </div>
    )
}

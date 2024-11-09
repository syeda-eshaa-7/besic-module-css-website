// import React from "react";
// import styles from "../styles/Driver.module.css"
// import Drive from "../../images/drive.png";
// import Image from "next/image";

// const Driver = () => {
//   return (
//     <div className={styles.driver}>
//       <div className={styles.left}>
//         <Image
//           src={"/drive.png"}
//           width={500}
//           height={400}
//           className={styles.image}
//           alt="Driver"
//         ></Image>
//       </div>
//       <div>
//         <h2>
//           Find the perfect car <span>to try before you buy</span>
//         </h2>
//         <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam est officia aut corporis odio explicabo libero, pariatur porro tempore necessitatibus enim laudantium eaque consequuntur fugiat illo iure. Dicta, minima corrupti?
//         </p>
//         <button>Browse Cars</button>
//       </div>
//     </div>
//   );
// };

// export default Driver;


import React from "react";
import styles from "../styles/Driver.module.css";
import Image from "next/image";

const Driver = () => {
  return (
    <div className={styles.driver}>
      <div className={styles.left}>
        <Image
          src={"/drive.png"}
          width={500}
          height={400}
          className={styles.image}
          alt="Driver"
        />
      </div>
      <div className={styles.right}>
        <h2 className={styles.heading}>
          Find the perfect car <span className={styles.highlight}>to try before you buy</span>
        </h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam est officia aut corporis odio explicabo libero, pariatur porro tempore necessitatibus enim laudantium eaque consequuntur fugiat illo iure. Dicta, minima corrupti?
        </p>
        <button className={styles.button}>Browse Cars</button>
      </div>
    </div>
  );
};

export default Driver;

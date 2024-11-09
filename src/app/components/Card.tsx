// import React from 'react';
// import styles from '../styles/Find.module.css'
    

// const Card = ({ image, make }: { image: string; make: string }) => {
//   return (
//     <div className={styles.card}>
//       <img src={image} alt="Car" />
//       <p>{make}</p>
//     </div>
//   );
// };

// export default Card;

import React from 'react';
import Image from 'next/image';  // Importing the Image component from Next.js
import styles from '../styles/Find.module.css'

const Card = ({ image, make }: { image: string; make: string }) => {
  return (
    <div className={styles.card}>
    
      <Image 
        src={image} 
        alt="Car" 
        width={500} // Specify width for the image
        height={300} // Specify height for the image
        objectFit="cover"  // Ensures the image is cropped to fit the specified size
      />
      <p>{make}</p>
    </div>
  );
};

export default Card;

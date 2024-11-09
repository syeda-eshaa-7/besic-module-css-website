// import React from 'react';
// import styles from '../styles/Find.module.css'
// import Card from './Card';

// const Find = () => {
//   return (
//     <div className={styles.find}>
//       <div className={styles.heading}>
//         <h1>Find your drive</h1>
//         <div className={styles.text_bg}>
//           <p>
//             <span>Explore the world's largest car sharing marketplace</span>
//           </p>
//         </div>
//       </div>
//       <div className={styles.grid_container}>
//         <Card
//           image='https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
//           make='Audi'
//         />
//         {/* Additional Card components */}
//       </div>
//     </div>
//   );
// };

// export default Find;


import React from 'react';
import styles from '../styles/Find.module.css'
import Card from './Card';

const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Find your drive</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Explore the world&#39;s largest car sharing marketplace</span>
          </p>
        </div>
      </div>
      <div className={styles.grid_container}>
      <Card
          key="1"
          image='https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          make='Audi'
        /><Card
        key="1"
        image='https://images.unsplash.com/photo-1532751203793-812308a10d8e?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        make='Audi'
      />
        <Card
          key="1"
          image='https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          make='Audi'
        /><Card
        key="1"
        image='https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
        make='Audi'
      /><Card
      key="1"
      image='https://images.unsplash.com/photo-1469285994282-454ceb49e63c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      make='Audi'
    />
        
      </div>
    </div>
  );
};

export default Find;

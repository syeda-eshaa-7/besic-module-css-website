// // // Hero.js or Hero.tsx
// // import { AiOutlineSearch } from 'react-icons/ai';
// // import styles from '../styles/Hero.module.css'
// // import Image from 'next/image';

// // const Hero = () => {
// //   return (
// //     <div style={{ position: 'relative' , width: '100%', height: '600px' }}>
// //     <Image
// //       src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"
// //       alt="Background Image"
// //       layout="fill"
// //       objectFit="cover"
// //       quality={100}
// //     />
// //       <form className={styles.form}>
// //         <div className={styles.text}>        <div className={styles.text}>
// //           <label>Where</label>
// //           <input
// //             className={styles.text_input}
// //             type='text'
// //             placeholder='Search Location'
// //           />
// //         </div>

// //           <input type="text" className={styles.textInput} />
// //         </div>
// //         <div className={styles.from}>
// //         <label>From</label>
// //         <input type="date" />
// //         </div>
// //         <div className={styles.until}>
// //           {/* Until content */}
// //           <label>Until</label>
// //           <input type='date' />
// //         </div>
// //         <div className={styles.searchBtn}>
// //           {/* Button content */}
// //           <div className={styles.searchBtn}>
// //           <button className={styles.btn}>Search for cars</button>
// //           <AiOutlineSearch size={25} className={styles.icon} />
// //         </div>
// //         </div>
// //         <button className={styles.btn}>Search</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Hero;




// // Hero.js or Hero.tsx
// import { AiOutlineSearch } from 'react-icons/ai';
// import styles from '../styles/Hero.module.css';
// import Image from 'next/image';

// const Hero = () => {
//   return (
//     // <div style={{ position: 'relative', width: '100%', height: '800px' }}>
//     //   <Image
//     //     src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"
//     //     alt="Background Image"
//     //     layout="fill"
//     //     objectFit="cover"
//     //     quality={100}
//     //   />
//     <div className={styles.container}>
//       <Image src={'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80'} className={styles.image} alt='/' 
//       quality={100}
//       height={300}
//       width={500}
//     />
     
     
//       <form className={styles.form}>
      
//         <div className={styles.text}>
        
//           <label>book your car</label>
          
//           <input
//             className={styles.textInput}
//             type='text'
//             placeholder='Search Location'
//           />
//         </div>
        
//         <div className={styles.from}>
//           <label>From</label>
//           <input type="date" className={styles.dateInput} />
//         </div>
//         <div className={styles.until}>
//           <label>Until</label>
//           <input type='date' className={styles.dateInput} />
//         </div>
//         <div className={styles.searchBtn}>
//           <button className={styles.btn}>Search for cars</button>
//           <AiOutlineSearch size={25} className={styles.icon} />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Hero;


// Hero.js or Hero.tsx
import { AiOutlineSearch } from 'react-icons/ai';
import styles from '../styles/Hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className={styles.container}>
      <Image
        src='https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        className={styles.image}
        alt="Background Image"
        quality={100}
        layout="fill"
        objectFit="cover"
      />
      {/* Animated Heading and Paragraph */}
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Find Your Perfect Ride</h1>
        <p className={styles.subHeading}>Discover top destinations and book cars with ease.</p>
      </div>

      {/* Form with inputs and search button */}
      <form className={styles.form}>
        <div className={styles.text}>
          <label>Location</label>
          <input
            className={styles.textInput}
            type="text"
            placeholder="Search Location"
          />
        </div>
        <div className={styles.from}>
          <label>From</label>
          <input type="date" className={styles.dateInput} />
        </div>
        <div className={styles.until}>
          <label>Until</label>
          <input type="date" className={styles.dateInput} />
        </div>
        <div className={styles.searchBtn}>
          <button className={styles.btn}>Search for cars</button>
          <AiOutlineSearch size={25} className={styles.icon} />
        </div>
      </form>
    </div>
  );
};

export default Hero;

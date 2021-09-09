import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.global}>
      {/* {buildHead()}
      
      {buildHeader()}

      <main>
        {buildCoursesSection()}

        {buildCampusSection()}

        {buildFacilitiesSection()}

        {buildTestimonialsSection()}
      </main> */}
    </div>
  );
}

// function buildHead(): React.ReactNode {
//   return (
//     <Head>
//       <meta name="viewport" content="with=device-width, initial-scale=1.0" />
      
//       <meta charSet="UTF-8" />
      
//       <title>Second Page</title>

//       {/* <link rel="stylesheet" href="/Home.module.css" /> */}      
//     </Head>
//   );
// }

// function buildHeader(): React.ReactNode {
//   function showMenu(): void {
//     const navLinks: HTMLElement | null = document.getElementById("NavLinks");
//     if(navLinks == null) {
//       console.log("CustomLog: navLinks not found");
      
//       return;
//     }
  
//     navLinks.style.right = "0px";
//   }
  
//   function closeMenu(): void {
//     const navLinks: HTMLElement | null = document.getElementById("NavLinks");
//     if(navLinks == null) {
//       console.log("CustomLog: navLinks not found");
      
//       return;
//     }
  
//     navLinks.style.right = "-200px";
//   }

//   return (
//     <header className={styles.header}>
//       <nav>
//         <a href="index.html"><Image src="/logo.png" /></a>

//         <div className="nav-links" id="NavLinks">
//           <i className="fa fa-times" onClick={closeMenu}></i>

//           <ul>
//             <li><a href="">HOME</a></li>
            
//             <li><a href="">ABOUT</a></li>
            
//             <li><a href="">COURSE</a></li>
            
//             <li><a href="">BLOG</a></li>
            
//             <li><a href="">CONTACT</a></li>
//           </ul>
//         </div>
        
//         <i className="fa fa-times" onClick={showMenu}></i>
//       </nav>

//       <div className={styles.text_box}>
//         <h1>Worlds Biggest University</h1>

//         <p>
//           Making website is now one of the easiest things in the world. You just need to learn HTML, CSS,
//           <br />
//           Javascript and you are good to go.
//         </p>
//         <a className={styles.hero_btn} href="">Visit Us To Know More</a>
//       </div>
//     </header>
//   );
// }

// function buildCoursesSection(): React.ReactNode {
//   return (
//     <section className={styles.course}>
//       <h1>Courses we offer.</h1>

//       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

//       <div className={styles.row}>
//         <div className={styles.course_col}>
//           <h3>Intermediate</h3>

//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
//             Vel aperiam excepturi veritatis iusto laboriosam ratione molestias doloribus officia, 
//             voluptatibus, atque quia nulla dolorum, ex fugiat quos nostrum minima et neque!
//           </p>
//         </div>

//         <div className={styles.course_col}>
//           <h3>Degree</h3>

//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
//             Vel aperiam excepturi veritatis iusto laboriosam ratione molestias doloribus officia, 
//             voluptatibus, atque quia nulla dolorum, ex fugiat quos nostrum minima et neque!
//           </p>
//         </div>

//         <div className={styles.course_col}>
//           <h3>Post Graduation</h3>

//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
//             Vel aperiam excepturi veritatis iusto laboriosam ratione molestias doloribus officia, 
//             voluptatibus, atque quia nulla dolorum, ex fugiat quos nostrum minima et neque!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// function buildCampusSection(): React.ReactNode {
//   function buildCampusItem(location: string, imageURL: string): React.ReactNode {
//     return (
//       <div className={styles.campus_col}>
//         <Image src={imageURL} />
        
//         <div className={styles.layer}>
//           <h3>{location}</h3>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section className={styles.campus}>
//       <h1>Our Global Campus</h1>

//       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

//       <div className={styles.row}>
//         {buildCampusItem("LONDON", "/london.png")}
        
//         {buildCampusItem("NEW YORK", "/newyork.png")}
        
//         {buildCampusItem("WASHINGTON", "/washington.png")}
//       </div>
//     </section>
//   );
// }

// function buildFacilitiesSection(): React.ReactNode {
//   function buildItem(title: string, imageURL: string): React.ReactNode {
//     return (
//       <div className={styles.facilities_col}>
//         <Image src={imageURL} />
        
//         <h3>{title}</h3>

//         <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit,
//           Explicabo amet aliquid quam aperiam animi incidunt.          
//         </p>
//       </div>
//     );
//   }

//   return (
//     <section className={styles.facilities}>
//       <h1>Our Facilities</h1>
      
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

//       <div className={styles.row}>
//         {buildItem("World Class Library", "/library.png")}
        
//         {buildItem("Largest Sports Grounds", "/basketball.png")}
        
//         {buildItem("Food From All Over The Globe", "/cafeteria.png")}
//       </div>
//     </section>
//   );
// }

// function buildTestimonialsSection(): React.ReactNode {
//   function buildItem(name: string, imageURL: string): React.ReactNode {
//     return (
//       <div className={styles.testimonial_col}>
//         <Image src={imageURL} />

//         <div>
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//             <br/>Odio amet deleniti earum temporibus inventore?
//             <br/>Similique quia quae dolor accusamus molestiae aperiam tempore nemo ratione.            
//           </p>

//           <h3>{name}</h3>

//           <i className="fa fa-star"></i>
          
//           <i className="fa fa-times"></i>
          
//           <i className="fa fa-times"></i>
          
//           <i className="fa fa-times"></i>
          
//           <i className="fa fa-times"></i>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section className={styles.testimonials}>
//       <h1>What Ours Students Say</h1>

//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sapiente qui quia neque.</p>

//       <div className={styles.row}>
//         {buildItem("Christine Berkley", "user1.jpg")}        
        
//         {buildItem("David Byer", "user2.jpg")}
//       </div>      
//     </section>
//   );
// }

export default Home;

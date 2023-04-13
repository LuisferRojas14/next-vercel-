import {ActiveLink} from './ActiveLink';
import styles from './Navbar.module.css';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/Pricing'
  },
];

export const  Navbar = () => {
  return (
    <nav className={styles.menu}>
{
  menuItems.map ( ({text,href})=>(
    <ActiveLink key={href} text={text} href={href}/>
  ))
}


       {/* <ActiveLink text = "Home"    href='/'/>
        <ActiveLink text= "About" href='/about'/>
        <ActiveLink text= "contact" href='/contact'/>
       <ActiveLink text = "princing" href= '/Princing'/>*/}
    </nav>
  )
}




import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const headerItems=[
    "Home",
    "About Me",
    "Education",
    "Skills",
    "Contact"
  ];

  return (
    
    <Navbar onMenuOpenChange={setIsMenuOpen} >
      <NavbarContent>
        <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
        />
      <NavbarBrand>
        <Link href={'#'} />LOGO
      </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify='end'>
        {headerItems.map((item,index)=>(
          <NavbarItem key={index} >
            <Link href={'#'}>{item}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};

export default Header;

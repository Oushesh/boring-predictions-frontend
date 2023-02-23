import { Navbar } from 'flowbite-react';
const  MyNavbar=()=>
{
  return (
      <Navbar className="bg-black" fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://img.icons8.com/color/48/null/alertus.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="text-white self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            CircularEconomy
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link className="text-white" href="https://www.oekobaudat.de/en.html">Oekobaudat</Navbar.Link>
          <Navbar.Link className="text-white" href="/navbars">Co2 Footprint</Navbar.Link>
          <Navbar.Link className="text-white" href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link className="text-white" href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default MyNavbar;

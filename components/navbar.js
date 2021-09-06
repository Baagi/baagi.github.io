import { Link, HStack } from "@chakra-ui/layout";

export default function NavBar({ children }) {
  return (
    <div className="navBar">
      <HStack spacing={4} bg="black" color="white" w="100vw">
        <Link id="navbar-logo" href="/">@Bat.com</Link>
        <div id="navbar-links">
          <Link href="#about" whiteSpace="nowrap"> About Me </Link>
          <Link href="#projects"> Projects </Link>
          <Link href="#contact"> Contact </Link>
        </div>
      </HStack>
    </div >
  )
}
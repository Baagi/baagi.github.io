import { Link } from "@chakra-ui/layout";

export default function NavBar({ children }) {
  return (
    <div>
      <Link href="/">@Bat.com</Link>
      <Link href="#about" > About Me </Link>
      <Link href="#projects"> Projects </Link>
      <Link href="#contact"> Contact </Link>
    </div>
  )
}
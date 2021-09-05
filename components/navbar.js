import { Link } from "@chakra-ui/layout";

export default function NavBar({ children }) {
  return (
    <div>
      <a href="">@Bat.com</a>
      <Link href="#about" > About Me </Link>
      <Link href="#projects"> Projects </Link>
      <Link href="#contact"> Contact </Link>
    </div>
  )
}
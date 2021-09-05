import { Link } from "@chakra-ui/layout";

export default function Footer({ children }) {
  return (
    <div>
      <Link href="/">@Bat.com</Link>
      <Link href="mailto:webmaster@example.com" isExternal> Email </Link>
      <Link href="https://chakra-ui.com" isExternal> LinkedIn </Link>
      <Link href="https://github.com/Baagi" isExternal> Github </Link>
    </div>
  )
}
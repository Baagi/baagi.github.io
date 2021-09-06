import { Link, HStack } from "@chakra-ui/layout";

export default function Footer({ children }) {
  return (
    <div className="footer">
      <HStack spacing={10} bg="inherit" color="white">
        <Link href="/">@Bat.com</Link>
        <Link href="mailto:webmaster@example.com" isExternal> Email </Link>
        <Link href="https://chakra-ui.com" isExternal> LinkedIn </Link>
        <Link href="https://github.com/Baagi" isExternal> Github </Link>
        <Link href="#top" > Back to top </Link>
      </HStack>
    </div >
  )
}


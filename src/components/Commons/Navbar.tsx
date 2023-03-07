import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Squash } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

const Navbar = (props: Props) => {
  const currPath = useRouter().asPath;
  const [isOpen, setOpen] = useState(false);
  const boxVariants = {
    initial: { x: "-4rem", opacity:0 },
    animate: {
      x: 0,
      opacity:1,
      transition: { staggerChildren: 0.1, ease: "easeInOut", duration: .5 },
    },
  };

  return (
    <nav
      onMouseOver={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="absolute flex items-center justify-center top-12 right-24"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-24 p-24 flex space-x-4 md:space-x-6 lg:space-x-8 text-2xl font-semibold"
            variants={boxVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={boxVariants} >
              <Link
                href="/"
                className={`${
                  currPath == "/" && "underline font-bold underline-offset-4"
                }`}
              >
                Works
              </Link>
            </motion.div>
            <motion.div variants={boxVariants}>
              <Link
                href="/About"
                className={`${
                  currPath == "/About" &&
                  "underline font-bold underline-offset-4"
                }`}
              >
                About
              </Link>
            </motion.div>
            <motion.div variants={boxVariants}>
              <Link
                href="/Contact"
                className={`${
                  currPath == "/Contact" &&
                  "underline font-bold underline-offset-4"
                }`}
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="p-12">
        <Squash toggled={isOpen} />
      </div>
    </nav>
  );
};

export default Navbar;

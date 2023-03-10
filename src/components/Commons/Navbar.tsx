import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Squash } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { changeCursor } from "@/reducers/cursorSlice";

type Props = {};

const Navbar = (props: Props) => {
  const currPath = useRouter().asPath;
  const [isOpen, setOpen] = useState(false);
  const boxVariants = {
    initial: { x: "4rem", opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { staggerChildren: 0.1, ease: "easeInOut", duration: 0.5 },
    },
    exit: {
      x: "4rem",
      opacity: 0,
      transition: { staggerChildren: 0.1, ease: "easeInOut", duration: 0.5 },
    },
  };

  const dispatch = useDispatch();

  const enter = (hovered: boolean) => {
    hovered && dispatch(changeCursor("text"));

    setOpen(true);
  };
  const leave = (letOpen: boolean) => {
    letOpen && setOpen(false);
    dispatch(changeCursor("default"));
  };

  return (
    <nav className="fixed  top-16 w-[90%] z-40">
      <div
        onMouseOver={() => enter(false)}
        onMouseLeave={() => leave(true)}
        className="absolute flex items-center justify-center top-12 right-0 md:-right-10 lg:-right-22  "
      >
        <Squash toggled={isOpen} />

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute right-0 p-24 flex space-x-4 md:space-x-6 lg:space-x-8 z-50 text-lg md:text-xl lg:text-2xl font-semibold"
              variants={boxVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div
                variants={boxVariants}
                onMouseOver={() => enter(true)}
                onMouseLeave={() => leave(false)}
              >
                <Link
                  href="/Projects"
                  className={`${
                    currPath == "/Projects" && "underline font-bold underline-offset-4"
                  }`}
                >
                  Projects
                </Link>
              </motion.div>
              <motion.div
                variants={boxVariants}
                onMouseOver={() => enter(true)}
                onMouseLeave={() => leave(false)}
              >
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
              <motion.div
                variants={boxVariants}
                onMouseOver={() => enter(true)}
                onMouseLeave={() => leave(false)}
              >
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
      </div>
    </nav>
  );
};

export default Navbar;

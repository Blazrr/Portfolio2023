import React from "react";
import {motion} from "framer-motion"
type Props = {};

const Contact = (props: Props) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={()=> alert("test")}>
      Contact
    </motion.div>
  );
};

export default Contact;

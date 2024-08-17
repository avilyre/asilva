"use client";

import { motion } from "framer-motion";

interface TemplateProps {
  children: React.ReactNode;
}

export default function Template(props: TemplateProps) {
  const { children } = props;

  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(-10px)" }}
      animate={{ opacity: 1, transform: "translateY(0)" }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}

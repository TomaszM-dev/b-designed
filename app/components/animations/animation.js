export const up = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};
export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const scrollLeft = {
  hidden: {
    x: -300,
    opacity: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export const scrollRight = {
  hidden: {
    opacity: 0,
    x: 300,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};
export const scrollReveal = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

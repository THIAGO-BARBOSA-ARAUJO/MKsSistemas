export const fadeIn = (direction: string, delay: number) => {
    return {
      hidden: {
        y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
        x: direction === "left" ? '100%' : direction === "right" ? -80 : 0,
        opacity: 0,
  
        transition: {
          type: "tween",
          duration: 1.5,
          ease: [0.25, 0.6, 0.3, 0.8],
          delay,
        }
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
  
        transition: {
          type: "tween",
          duration: 1.4,
          ease: [0.25, 0.2, 0.2, 0.75],
          delay,
        }
      }
    }
  }
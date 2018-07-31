import Styles from "./styles";

const DefaultClasses = {
  header: {
    fontSize: Styles.fontSize.p,
    backgroundColor: Styles.colors.primary,
    height: "70px",
    textAlign: "center"
  },
  footer: {
    fontSize: Styles.fontSize.p,
    backgroundColor: Styles.colors.warn,
    height: "40px"
  },
  nav: {
    fontWeight: Styles.fontWeight.h2,
    backgroundColor: Styles.colors.primary,
    height: "40px"
  },
  li: {
    listStyleType: "none",
    display: "inline",
    padding: "20px"
  },
  liActive: {
    backgroundColor: "#D2691E"
  }
};

export default DefaultClasses;

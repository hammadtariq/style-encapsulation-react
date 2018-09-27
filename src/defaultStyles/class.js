import Styles from "./styles";

const DefaultClasses = {
  header: {
    fontSize: Styles.fontSize.p,
    backgroundColor: Styles.colors.primary,
    height: "20px",
    textAlign: "center",
    fontSize: "16px",
    padding: "10px",
    color: "#fff"
  },
  footer: {
    fontSize: Styles.fontSize.p,
    backgroundColor: Styles.colors.footer,
    height: "20px",
    padding: "10px"
  },
  nav: {
    fontWeight: Styles.fontWeight.h2,
    backgroundColor: "#b9dbd5",
    height: "10px",
    padding: "10px"
  },
  li: {
    listStyleType: "none",
    display: "inline",
    padding: "20px"
  },
  liActive: {
    backgroundColor: "#D2691E"
  },
  section: {
    textAlign: "justify",
    padding: "20px",
    margin: "20px"
  }
};

export default DefaultClasses;

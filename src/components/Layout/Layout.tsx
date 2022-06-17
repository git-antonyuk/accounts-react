import styles from "./Layout.module.scss";
import { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode | ReactNode[];
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header>
          <p>header</p>
        </header>
        <main>{children}</main>
        <footer>
          <p>footer</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;

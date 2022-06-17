import styles from "./Layout.module.scss";
import { ReactNode } from "react";
import AccountHeader from "../Account/AccountHeader/AccountHeader";

interface ILayoutProps {
  children: ReactNode | ReactNode[];
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <AccountHeader />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;

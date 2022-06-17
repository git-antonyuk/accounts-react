import Title from "../../Typography/Title/Title";
import CreateNewAccount from "./CreateNewAccount/CreateNewAccount";
import styles from "./AccountHeader.module.scss";
import CreateNewTransaction from "./CreateNewTransaction/CreateNewTransaction";

const AccountHeader = () => {
  return (
    <header className={styles["account-header"]}>
      <Title text="Accounts" className={styles["account-header__title"]}/>
      <CreateNewAccount className={styles["account-header__btn"]}/ >
      <CreateNewTransaction className={styles["account-header__btn"]} />
    </header>
  );
};

export default AccountHeader;

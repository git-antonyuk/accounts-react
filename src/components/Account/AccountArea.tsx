
import styles from "./AccountArea.module.scss";
import AccountCorporate from "./AccountCorporate/AccountCorporate";
import AccountCustodyVaults from "./AccountCustodyVaults/AccountCustodyVaults";

const AccountArea = () => {
  return (
    <>
      <AccountCorporate className={styles['account-corporate']}/>
      <AccountCustodyVaults className={styles['account-custody-vaults']}/>
    </>
  );
};

export default AccountArea;

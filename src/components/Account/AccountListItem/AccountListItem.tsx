import styles from "./AccountListItem.module.scss";
import IconBTC from "../../../assets/svg/BTC_icon.svg?component";
import IconETH from "../../../assets/svg/ETH_icon.svg?component";
import IconEUR from "../../../assets/svg/EUR_icon.svg?component";
import IconGBP from "../../../assets/svg/GBP_icon.svg?component";
import IconUSD from "../../../assets/svg/USD_icon.svg?component";
import { ReactNode } from "react";

interface IAccountListItem {
  accountType: number;
  currency: string;
  balance: string | number;
  id: string;
  accountName: string;
}

const iconProps = {
  height: "19px",
  width: "19px",
};

const ICON_MAP: { [key: string]: ReactNode } = {
  EUR: <IconEUR {...iconProps} />,
  ETH: <IconETH {...iconProps} />,
  BTC: <IconBTC {...iconProps} />,
  GBP: <IconGBP {...iconProps} />,
  USD: <IconUSD {...iconProps} />,
};

const AccountListItem = ({
  currency,
  balance,
  accountName,
}: IAccountListItem) => {
  return (
    <div className={styles["account-list-item"]}>
      <div className={styles["account-list-item__header"]}>
        {ICON_MAP[currency]}
        <span className={styles["account-list-item__balance"]}>{balance}</span>
      </div>
      <div className={styles["account-list-item__main"]}>
        <span className={styles["account-list-item__status"]}></span>
        <span className={styles["account-list-item__accountName"]}>{accountName}</span>
      </div>
    </div>
  );
};

export default AccountListItem;

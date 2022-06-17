import { IAccount } from "../../../types";
import Title from "../../Typography/Title/Title";
import AccountListItem from "../AccountListItem/AccountListItem";
import LoadMore from "../LoadMore/LoadMore";
import styles from "./AccountList.module.scss";

interface IAccountList {
  title: string;
  list: IAccount[];
  loadMore: Function;
  total: number;
  className?: string;
}

const AccountList = ({
  title,
  list,
  loadMore = () => {},
  total = 0,
  className
}: IAccountList) => {
  const showLoadMore = total > list.length;

  return (
    <div className={[styles["account-list"], className].join(' ')}>
      <div className={styles["account-list__header"]}>
        <Title text={title} level={2} />
      </div>
      <div className={styles["account-list__content"]}>
        <ul className={styles["account-list__list"]}>
          {list.map((item, i) => (
            <AccountListItem key={i} {...item} />
          ))}
        </ul>
        <div className={styles["account-list__footer"]}>
          {showLoadMore && <LoadMore onClick={loadMore} />}
        </div>
      </div>
    </div>
  );
};

export default AccountList;

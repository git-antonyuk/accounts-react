import { useEffect } from "react";
import useAccounts from "../../../hooks/useAccounts";
import AccountList from "../AccountList/AccountList";

const AccountCorporate = ({ ...props }) => {
  const { fetch, list, loadMore, totalLength } = useAccounts({
    initialFileName: "corporate-accounts-0",
    loadMoreFileName: "corporate-accounts-1",
  });

  useEffect(() => {
    fetch();
  }, []);

  return (
    <AccountList
      list={list}
      title="Group 1 Accounts"
      loadMore={loadMore}
      total={totalLength}
      {...props}
    />
  );
};

export default AccountCorporate;

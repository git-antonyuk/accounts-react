import { useEffect } from "react";
import useAccounts from "../../../hooks/useAccounts";
import AccountList from "../AccountList/AccountList";

const AccountCustodyVaults = ({ ...props }) => {
  const { fetch, list, loadMore, totalLength } = useAccounts({
    initialFileName: "custody-vaults-0",
    loadMoreFileName: "custody-vaults-1",
  });

  useEffect(() => {
    fetch();
  }, []);

  return (
    <AccountList
      list={list}
      title="Group 2 Accounts"
      loadMore={loadMore}
      total={totalLength}
      {...props}
    />
  );
};

export default AccountCustodyVaults;

import { IAccount } from "./../types/index.d";
import { useState } from "react";

interface IUseAccounts {
  initialFileName: string;
  loadMoreFileName: string;
}

const LENGTH_OF_LIST = 12;

const useAccounts = ({ initialFileName, loadMoreFileName }: IUseAccounts) => {
  const [list, setList] = useState<IAccount[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const addToList = (list: IAccount[]) => {
    setList((prev) => [...prev, ...list]);
  };

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await import(`../assets/data/${initialFileName}.json`);
      addToList(res.default);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(true);
    }
  };

  const loadMore = async () => {
    setLoading(true);
    try {
      const res = await import(`../assets/data/${loadMoreFileName}.json`);
      addToList(res.default);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(true);
    }
  };

  return {
    fetch,
    loadMore,
    list,
    totalLength: LENGTH_OF_LIST,
  };
};

export default useAccounts;

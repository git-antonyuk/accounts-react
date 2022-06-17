import Button from "../../../Button/Button";
import IconPlus from "../../../../assets/svg/plus.svg?component";
import styles from "../../../Button/ButtonContent.module.scss";
import componentStyles from "./CreateNewTransaction.module.scss";

const CreateNewTransaction = ({ ...props }) => {
  const createNewTransaction = () => {
    console.log(
      "%c 🥖 createNewTransaction: ",
      "font-size:12px;background-color: #2EAFB0;color:#fff;"
    );
  };
  return (
    <Button {...props} onClick={createNewTransaction}>
      <span className={styles.content}>
        <IconPlus
          className={[
            styles.icon,
            componentStyles["create-new-transaction-icon"],
          ].join(" ")}
        />
        <span className={styles.text}>New Transaction</span>
      </span>
    </Button>
  );
};

export default CreateNewTransaction;

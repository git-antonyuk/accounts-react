import Button from "../../../Button/Button";
import IconPlus from "../../../../assets/svg/plus.svg?component";
import styles from "../../../Button/ButtonContent.module.scss";

const CreateNewAccount = ({ ...props }) => {
  const createNewAccount = () => {
    console.log(
      "%c 🥖 createNewAccount: ",
      "font-size:12px;background-color: #2EAFB0;color:#fff;"
    );
  };

  return (
    <Button buttonType="danger" {...props} onClick={createNewAccount}>
      <span className={styles.content}>
        <IconPlus className={styles.icon} />
        <span className={styles.text}>New Account</span>
      </span>
    </Button>
  );
};

export default CreateNewAccount;

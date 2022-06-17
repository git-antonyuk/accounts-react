import Button from "../../Button/Button";
import IconArrow from "../../../assets/svg/arrow-down.svg?component";
import styles from "./LoadMore.module.scss";

interface ILoadMoreProps {
  onClick: Function;
}

const LoadMore = ({ onClick }: ILoadMoreProps) => {
  return (
    <Button buttonType="secondary" onClick={() => onClick()}>
      <span className={styles['load-more__content']}>
        <span className={styles['load-more__text']}>See more</span> <IconArrow />
      </span>
    </Button>
  );
};

export default LoadMore;

import { FC } from "react";

import Button from "../components/UI/Button/Button";
import Input from "../components/UI/Input/Input";

import { ICitiesWrapProps } from "./ICitiesWrap";

import styles from "./CitiesWrap.module.css";

const CitiesWrap: FC<ICitiesWrapProps> = ({ children }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <div className={styles.action}>
          <Input type='text' placeholder='Ввведите название города' />
        </div>
        <div className={styles.action}>
          <Input type='text' placeholder='Ввведите адрес' />
        </div>
        <div className={styles.action}>
          <Button>Добавить город</Button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default CitiesWrap;

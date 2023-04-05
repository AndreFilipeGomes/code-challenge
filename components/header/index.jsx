import { languages } from "../../context/languageContext";
import Select from "../select";
import styles from "./Header.module.css";

export default function Header({ title }) {
  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <Select data={languages}></Select>
      </div>
    </div>
  );
}

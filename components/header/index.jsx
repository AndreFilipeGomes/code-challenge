import Select from "../select";
import styles from "./Header.module.css";

export default function Header({ title }) {
  return (
    <div className={styles.header_container}>
      <Select></Select>
    </div>
  );
}

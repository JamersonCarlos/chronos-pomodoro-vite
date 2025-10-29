import styles from './styles.module.css';

type OptionMenuProps = {
  children: React.ReactNode;
};

export function OptionMenu({ children }: OptionMenuProps) {
  return <a className={styles.optionMenu}>{children}</a>;
}

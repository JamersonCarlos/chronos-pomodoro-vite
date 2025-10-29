import styles from './styles.module.css';
import { Timer } from 'lucide-react';

// //Recebendo parametros
// type HeadingProps = {
//   children: string;
// };

export function Logo() {
  return (
    <>
      <div className={styles.logo}>
        <a href="#" className={styles.logoLink}>
          <Timer size={64} />
          <span>Chronos</span>
        </a>
      </div>
    </>
  );
}

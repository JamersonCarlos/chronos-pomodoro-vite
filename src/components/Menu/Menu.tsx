import styles from './styles.module.css';
import { OptionMenu } from '../OptionMenu';
import { Home } from 'lucide-react';
import { History } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Sun } from 'lucide-react';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <OptionMenu>
        <Home />
      </OptionMenu>
      <OptionMenu>
        <History />
      </OptionMenu>
      <OptionMenu>
        <Settings />
      </OptionMenu>
      <OptionMenu>
        <Sun />
      </OptionMenu>
    </nav>
  );
}

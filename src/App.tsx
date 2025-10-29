import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Cycles } from './components/Cycles';

import { DefaultInput } from './components/DefaultInput';

import './styles/global.css';
import './styles/theme.css';
import { DefaultButton } from './components/DefaultButton';

export function App() {
  return (
    <>
      {/* Logo  */}
      <Container>
        <Logo />
      </Container>

      {/* Menu  */}
      <Container>
        <Menu />
      </Container>

      {/* Content  */}
      <Container>
        <form action="" className="form">
          <div className="formRow">
            <DefaultInput
              id="task"
              type="text"
              labelText="task"
              placeholder="digite algo"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton icon={<span>+</span>}></DefaultButton>
          </div>
        </form>
      </Container>
    </>
  );
}

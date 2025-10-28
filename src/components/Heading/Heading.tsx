import styles from './Heading.module.css';

type HeadingProps = {
  children: string;
};

export function Heading({ children }: HeadingProps) {
  return (
    <>
      <h1>Olá, Chronos!</h1>
      <h2 className={styles.subtitle_style}>Subtitulo</h2>
      <p>{children}</p>
    </>
  );
}

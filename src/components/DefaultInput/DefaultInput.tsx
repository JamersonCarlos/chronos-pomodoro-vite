import style from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {labelText && (
        <label htmlFor={id} className={style.label}>
          {labelText}
        </label>
      )}
      <input id={id} className={style.input} type={type} {...rest} />
    </>
  );
}

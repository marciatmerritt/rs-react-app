import { ChangeEvent, FC } from 'react';
import './input.css';

interface InputProps {
  type?: string;
  id?: string;
  label?: string;
  value?: string;
  name?: string;
  placeholder?: string;
  error?: boolean;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type = 'text',
  id,
  label,
  value,
  name,
  placeholder = '',
  className,
  error,
  onChange,
}) => {
  return (
    <div className="input-container">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={`${className} ${error ? 'input-error' : ''}`}
      />
    </div>
  );
};

export default Input;

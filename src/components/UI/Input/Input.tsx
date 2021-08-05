import React, { DetailedHTMLProps, ForwardedRef, InputHTMLAttributes, MutableRefObject, } from 'react';
import style from './Input.module.css';

export type PropsType = {

    label: string,
    input: {
          id: string,
          type: string,
          min: string,
          max: string,
          step: string,
          defaultValue: string,
    }
}

export type Ref = HTMLInputElement | null

const Input = React.forwardRef<Ref, PropsType>((props, ref) => {
  return (
    <div className={style.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  )
});

export default Input;
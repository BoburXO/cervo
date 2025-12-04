import React from 'react'
import s from './Button.module.scss'

const Button = ({ children, apply, variant }) => {
    const buttonClasses = variant
        ? `${s.btn} ${s[variant]}`
        : s.btn;

    return (
        <button className={buttonClasses}>
            {children}
            {apply && <img src={`/img/apply-icon.svg`} alt="" className={s.icon} />}
        </button>
    )
}

export default Button
import React from 'react'
import s from './Pretitle.module.scss'

const Pretitle = ({ children }) => {
    return (
        <>
            <h3 className={s.pretitle}>{children}</h3>
        </>
    )
}

export default Pretitle
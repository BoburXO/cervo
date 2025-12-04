import React from 'react'
import s from './SectionTitle.module.scss'

const SectionTitle = ({ children, white, black }) => {
    const colorClass = white ? s.white : black ? s.black : s.black; 

    return (
        <>
            <h2 className={`${s.sectionTitle} ${colorClass}`}>{children}</h2>
        </>
    )
}

export default SectionTitle
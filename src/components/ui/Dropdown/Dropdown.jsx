import React, { useEffect, useRef, useState } from 'react'
import s from './Dropdown.module.scss'

const Dropdown = ({
    options = [
        { id: 'en', label: 'English', icon: '/img/flag-icon-us.svg' },
        { id: 'ru', label: 'Русский', icon: '/img/flag-icon-ru.webp' },
        { id: 'ar', label: 'Arabic', icon: '/img/flag-icon-ar.svg' }
    ],
    defaultSelected = 'en',
    onChange = () => { }
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(defaultSelected);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (optionId) => {
        setSelected(optionId);
        setIsOpen(false);
        onChange(optionId);
    };

    const selectedOption = options.find(option => option.id === selected);


    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className={s.dropdown} ref={dropdownRef}>
            <div className={s.dropdownToggle} onClick={toggleDropdown}>
                {selectedOption && (
                    <img
                        src={selectedOption.icon}
                        alt={selectedOption.label}
                        className={s.optionIcon}
                    />
                )}
                <span className={`${s.arrow} ${isOpen ? s.rotated : ''}`}><img src='/img/dropdown-arrow.svg' alt='icon' /></span>
            </div>

            {isOpen && (
                <ul className={s.dropdownMenu}>
                    {options.map(option => (
                        <li
                            key={option.id}
                            className={`${s.option} ${selected === option.id ? s.active : ''}`}
                            onClick={() => handleSelect(option.id)}
                        >
                            <img
                                src={option.icon}
                                alt={option.label}
                                className={s.optionIcon}
                            />
                            {/* <span>{option.label}</span> */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
import React, { useState } from 'react';
import cls from './Checkbox.module.scss';

interface CheckboxProps {
    label: string
    value: string
    onChange: Function
    name: string
}

export const Checkbox = ({ label, value, onChange, name }: any) => {
   
    return (
        <label className={cls.checkinput}>
            <input
                type="checkbox"
                onChange={() => {
                    onChange(!value)
                }}
                name={name}
            />
            <svg
                className={`${cls.checkbox} ${
                    value ? cls.checkboxActive : ''
                }`}
                aria-hidden="true"
                viewBox="0 0 15 11"
                fill="none"
            >
                <path
                    d="M1 4.5L5 9L14 1"
                    strokeWidth="2"
                    stroke={value ? '#fff' : 'none'} // only show the checkmark when `isCheck` is `true`
                />
            </svg>
            {label}
        </label>
    );
};

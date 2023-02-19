import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import s from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    className?: string,
    value?: string,
    onChange?: (value: string) => void,
    isAutoFocus?: boolean,
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        isAutoFocus,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCaretPosition(e.target.value.length);
        onChange?.(e.target.value);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    // TODO проверить потом
    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
        if (isAutoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [isAutoFocus]);

    return (
        <div className={classNames(s.InputWrapper, {}, [className])}>
            {
                placeholder && (
                    <div className={s.placeholder}>
                        {`${placeholder} >`}
                    </div>
                )
            }
            <div className={s.caretWrapper}>
                {
                    isFocused && (
                        <span
                            className={s.caret}
                            style={{ left: `${caretPosition * 9}px` }}
                        />
                    )
                }
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={s.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
            </div>
        </div>
    );
});

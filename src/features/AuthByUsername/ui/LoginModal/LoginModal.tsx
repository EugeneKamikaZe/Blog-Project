import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import s from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void,
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    const { t } = useTranslation();

    return (
        <Modal
            className={classNames(s.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            isLazy
        >
            <LoginForm />
        </Modal>
    );
};

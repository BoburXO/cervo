import React, { useEffect, useState } from 'react';
import s from './Modal.module.scss';
import Button from '../Button/Button';
import { useModalStore } from '@/stores/useModalStore';
import { useTranslation } from 'react-i18next';
import { useIsClient } from 'usehooks-ts';
import { sendTelegramMessage } from '@/utils/sendTelegramMessage';

const Modal = () => {
    const { isOpen, closeModal, modalData } = useModalStore();
    const { t } = useTranslation();
    const isClient = useIsClient();
    const [comment, setComment] = useState('');

    useEffect(() => {
        if (isOpen) {
            setComment(modalData?.comment || '');
            document.body.style.overflow = 'hidden';
            return () => { document.body.style.overflow = ''; };
        }
    }, [isOpen, modalData]);

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {
            lastName: formData.get('lastName'),
            firstName: formData.get('firstName'),
            middleName: formData.get('middleName'),
            city: formData.get('city'),
            state: formData.get('state'),
            address: formData.get('address'),
            company: formData.get('company'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            comment: comment
        };

        const message = `
<b>📩 Новая заявка</b>
👤 <b>ФИО:</b> ${data.lastName} ${data.firstName} ${data.middleName}
🏢 <b>Компания:</b> ${data.company}
📍 <b>Город/Регион:</b> ${data.city}, ${data.state}
🏠 <b>Адрес:</b> ${data.address}
📞 <b>Телефон:</b> ${data.phone}
📧 <b>Email:</b> ${data.email || '—'}
📝 <b>Комментарий:</b> ${data.comment || '—'}
    `;

        try {
            await sendTelegramMessage(message);
            alert('Заявка успешно отправлена ✅');
            closeModal();
        } catch (error) {
            console.error('Ошибка отправки:', error);
            alert('Произошла ошибка при отправке. Попробуйте ещё раз. ⛔');
        }
    };


    return (
        <div className={s.overlay} onClick={handleOverlayClick}>
            {isClient && (
                <div className={s.modal}>
                    <button className={s.closeBtn} onClick={closeModal} type="button">×</button>

                    <form className={s.form} onSubmit={handleSubmit}>
                        <div className={s.top}>
                            <h2 className={s.title}>{t('modal.title')}</h2>
                            <img src="/img/logo.png" alt="logo" />
                        </div>

                        <div className={s.row}>
                            <div className={s.inputGroup}>
                                <label>{t('modal.labels.lastName')}<span>*</span></label>
                                <input name="lastName" type="text" placeholder={t('modal.placeholders.lastName')} required />
                            </div>
                            <div className={s.inputGroup}>
                                <label>{t('modal.labels.firstName')}<span>*</span></label>
                                <input name="firstName" type="text" placeholder={t('modal.placeholders.firstName')} required />
                            </div>
                            <div className={s.inputGroup}>
                                <label>{t('modal.labels.middleName')}<span>*</span></label>
                                <input name="middleName" type="text" placeholder={t('modal.placeholders.middleName')} required />
                            </div>
                        </div>

                        <div className={s.row}>
                            <div className={s.inputGroup}>
                                <label>{t('modal.labels.city')}<span>*</span></label>
                                <input name="city" type="text" placeholder={t('modal.placeholders.city')} required />
                            </div>
                            <div className={s.inputGroup}>
                                <label>{t('modal.labels.state')}<span>*</span></label>
                                <input name="state" type="text" placeholder={t('modal.placeholders.state')} required />
                            </div>
                            <div className={s.inputGroup}>
                                <label>{t('modal.labels.address')}<span>*</span></label>
                                <input name="address" type="text" placeholder={t('modal.placeholders.address')} required />
                            </div>
                        </div>

                        <div className={s.row}>
                            <div className={s.inputGroup}>
                                <label>{t('modal.labels.company')}<span>*</span></label>
                                <input name="company" type="text" placeholder={t('modal.placeholders.company')} required />
                            </div>
                            <div className={s.inputGroup}>
                                <label>{t('modal.labels.phone')}<span>*</span></label>
                                <input name="phone" type="tel" placeholder={t('modal.placeholders.phone')} required />
                            </div>
                            <div className={s.inputGroup}>
                                <label>{t('modal.labels.email')}</label>
                                <input name="email" type="email" placeholder={t('modal.placeholders.email')} />
                            </div>
                        </div>

                        <div className={s.inputGroup}>
                            <label>{t('modal.labels.comments')}</label>
                            <textarea
                                placeholder={t('modal.placeholders.comments')}
                                rows={4}
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                        </div>

                        <div className={s.actions}>
                            <Button apply type="submit">{t('modal.submit')}</Button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Modal;

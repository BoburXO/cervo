import { create } from 'zustand'

export const useModalStore = create((set) => ({
    // Состояние модалки
    isOpen: false,
    modalType: null,
    modalData: null, // сюда мы и будем передавать comment

    // Открытие универсальной модалки
    openModal: (type = 'application', data = null) => set({
        isOpen: true,
        modalType: type,
        modalData: data
    }),

    // Закрытие
    closeModal: () => set({
        isOpen: false,
        modalType: null,
        modalData: null
    }),

    // Открытие модалки-заявки без данных
    openApplicationModal: () => set({
        isOpen: true,
        modalType: 'application',
        modalData: null
    }),

    // Открытие модалки-заявки с комментарием
    openApplicationModalWithComment: (comment) => set({
        isOpen: true,
        modalType: 'application',
        modalData: { comment }
    }),
}))

import { defineStore } from 'pinia'
export const useHomeStore = defineStore('home', {
    state: () => ({
        mainTitle: 'Bienvenue au Movie Quiz !',
        mozaicMobile: require('@/assets/mobile/mosaicOne.svg'),
    })
})
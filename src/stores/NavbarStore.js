import { defineStore } from 'pinia'
export const useNavbarStore = defineStore('navbar', {
    state: () => ({
        logo: require('@/assets/moviequizDarkMod.svg'),
        pages: [
            {
                //HOME
                label: 'Home',
                path: '/',
            },
            {
                //ABOUT
                label: 'Divers',
                path: '/divers',
            },
            {
                //PLAY
                label: 'Jouer',
                path: '/jouer'
            }

        ]
    })
})
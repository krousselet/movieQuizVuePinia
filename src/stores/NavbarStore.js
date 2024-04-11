import { defineStore } from 'pinia'
export const useNavbarStore = defineStore('navbar', {
    state: () => ({
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
            }
        ]
    })
})
import { defineStore } from 'pinia'
export const usePlayStore = defineStore('play', {
    state: () => ({
        catch: 'Saurez-vous être à la hauteur ?',
        data: [],
    })
})
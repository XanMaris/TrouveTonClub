import { defineStore } from 'pinia'

export const useClubStore = defineStore('counter', {
  state: () => {
    return {
      clubs: {
        10:{
          nom:"ASVEL"
        },
      }
    }
  },
  actions: {
    getClub(id) {
      return this.clubs[id];
    },
  },
})
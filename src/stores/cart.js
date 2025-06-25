import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: []
    }),
    actions: {
        addItem(item) {
            this.items.push(item)
        },
        clearCart() {
            this.items = []
        }
    },
    getters: {
        itemCount: (state) => state.items.length
    }
})
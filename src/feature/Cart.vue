<script setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
</script>

<template>
    <div style="padding: 20px;">
        <h1 style="color: #f96e03; font-weight: 800;">Your Cart</h1>
        <!-- Data that add to cart -->
        <div v-if="cartStore.items.length > 0">
            <div v-for="(item, index) in cartStore.items" :key="index" class="itemAdd">
                <img :src="item.image" alt="Cart Item"
                    style="width: 150px; height: 150px; object-fit: cover; border-radius: 150px;" />
                <div class="title">
                    <h2 style="color: black; font-weight: 500;">{{ item.title }}</h2>
                    <p style="color: gray;">{{ item.desc }}</p>
                </div>
                <h3 style="color: #f96e03; padding-left: 30px; font-weight: 700;">{{ item.price }}</h3>
            </div>

        </div>
        <!-- If don't have data -->
        <div v-else>
            <p style="color: black; font-weight: 600;">No items in cart.</p>
        </div>
    </div>
</template>

<style>
.itemAdd {
    flex-direction: row;
    border-radius: 10px;
    border-color: #f96e03;
    border-width: 1px;
    border-style: solid;
    padding: 15px 15px;
    display: flex;
    margin-top: 20px;
    align-items: center;
    background-color: rgb(236, 236, 236);
}

.title {
    padding-left: 50px;
    flex-direction: column;
    display: flex;
}
</style>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'
import SearchIcon from '../assets/icon/ic_search.png'
import CartIcon from '../assets/icon/ic_search.png'
const imageUrl = 'https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.webp?b=1&s=612x612&w=0&k=20&c=w8BdPTIA_yaRkhmQWrqJXSKTLZDXXNtgPJh5KjyahCA='

function orderClick() {
    alert('Order Click');
}

// Categories
const categories = ['All Items', 'Staters', 'Main Course', 'Deserts', 'Beverages']
const selectedCategory = ref('All Items')
function selectCategory(category) {
    selectedCategory.value = category
}


// const router = useRouter()
const router = useRouter()
const cartStore = useCartStore()

// Item
const items = [
    { title: 'Crispy Chicken Wings', desc: 'Perfectly seasoned wings', price: '$12.99', image: "https://media.istockphoto.com/id/583848484/photo/spicy-deep-fried-breaded-chicken-wings.jpg?s=612x612&w=0&k=20&c=N9JOYnsCFDQt8uFiWTzlEdefHn4NNhfI3JPN0vGwUas=" },
    { title: 'Beef Burger', desc: 'Juicy grilled beef patty', price: '$10.50', image: "https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg=" },
    { title: 'Spaghetti', desc: 'Pasta with tomato sauce', price: '$11.20', image: "https://t3.ftcdn.net/jpg/01/09/75/90/360_F_109759077_SVp62TBuHkSn3UsGW4dBOm9R0ALVetYw.jpg" },
    { title: 'Caesar Salad', desc: 'Fresh lettuce and croutons', price: '$8.99', image: "https://media.istockphoto.com/id/534139231/photo/healthy-grilled-chicken-caesar-salad.jpg?s=612x612&w=0&k=20&c=TR_sE5S5ChmjFywg3dh_J5V_ha-BcwgTU26BvsgbsjY=" },
    { title: 'Chocolate Cake', desc: 'Rich chocolate dessert', price: '$6.75', image: "https://img.freepik.com/premium-photo/professional-photography-delicious-chocolate-cake_758367-17611.jpg" },
    { title: 'Fried Rice', desc: 'Rice with vegetables & eggs', price: '$9.60', image: "https://www.australianeggs.org.au/assets/Uploads/Egg-fried-rice-2.jpg" },
    { title: 'Fruit Smoothie', desc: 'Mixed fruit blend', price: '$5.20', image: "https://media.istockphoto.com/id/527673038/photo/freshly-blended-fruit-smoothies-of-various-colors-and-tastes.jpg?s=612x612&w=0&k=20&c=G1kf5N8QhQMe-yb9GdKj13YJ-2ZPn6f-myRwxV64I50=" },
    { title: 'Grilled Salmon', desc: 'Salmon fillet with herbs', price: '$14.30', image: "https://www.pccmarkets.com/wp-content/uploads/2017/08/pcc-rosemary-grilled-salmon-flo.jpg" },
    { title: 'Tacos', desc: 'Spicy chicken tacos', price: '$9.99', image: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg" },
    { title: 'Ice Cream Sundae', desc: 'Vanilla with chocolate syrup', price: '$4.50', image: "https://media.istockphoto.com/id/1136006564/photo/vanilla-and-chocolate-sundaes-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=XaZo3aopn_SWTXH3dNVxw5v79zi3cI8MX4LbtO7dn9s=" }
]

function addTocart(item) {
    // alert('Add to cart')
    // router.push({ name: 'Cart', params: { item: JSON.stringify(item) } })
    cartStore.addItem(item)
}

function goToCart() {
    router.push('/cart')
}

// Dialog
const showDialog = ref(false)
const selectedItem = ref(null)

function openDialog(item) {
    selectedItem.value = item
    showDialog.value = true
}

function closeDialog() {
    showDialog.value = false
    selectedItem.value = null
}

</script>
<template>

    <!-- App Bar -->
    <div class="box">
        <div class="text">FoodieMenu</div>
        <div style="justify-content: space-between; width: 60px; display: flex;">
            <img class="icon" :src="SearchIcon" alt="">
            <!-- <img class="icon" :src="SearchIcon" alt=""> -->
            <div style="position: relative;" @click="goToCart">
                <img class="icon" :src="CartIcon" alt="Cart">
                <div v-if="cartStore.itemCount > 0"
                    style="position: absolute; top: -5px; right: -5px; background: #f96e03; color: white; border-radius: 50%; width: 18px; height: 18px; display: flex; justify-content: center; align-items: center; font-size: 12px;">
                    {{ cartStore.itemCount }}
                </div>
            </div>
        </div>
    </div>

    <!-- Banner -->
    <div class="Banner">
        <div class="title_card">
            <!-- Title -->
            <h1 style="color: white; font-weight: 700;">
                Delicious Food Awaits
            </h1>
            <!-- Detail -->
            <h3 style="color: whitesmoke;">Explore our curated menu of fresh, tasty dishes</h3>
            <!-- Button -->
            <div class="button_order" @click="orderClick">
                Order now
            </div>
        </div>


        <!-- Image -->
        <img :src="imageUrl" alt="Banner Image" class="image_banner" />
    </div>

    <!-- Body -->

    <!-- Category -->
    <div style="margin: 20px 30px; display: flex; gap: 10px;">
        <div v-for="(category, index) in categories" :key="index" class="category"
            :class="{ active: selectedCategory === category }" @click="selectCategory(category)">
            {{ category }}
        </div>
    </div>

    <!-- Cart -->
    <div style="display: flex;  flex-wrap: wrap;">
        <div class="item" v-for="(item, index) in items" :key="index">
            <!-- Item Image -->
            <img class="itemImage" :src="item.image" alt="" @click="openDialog(item)">

            <div style="padding: 0px 15px;">
                <!-- Title -->
                <h3 style="color: black;font-weight: 600;">{{ item.title }}</h3>
                <!-- Deatil -->
                <h5 style="color: gray;font-weight: 600;">
                    {{ item.desc }}
                </h5>

                <!-- Price -->
                <div class="price_section">
                    <h3 style="color: #f96e03;font-weight: 700;">{{ item.price }}</h3>
                    <div class="add_button" @click="addTocart(item)">
                        + Add
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Dialog -->
    <div v-if="showDialog" class="dialog-overlay" @click.self="closeDialog">
        <div class="dialog-box">
            <img :src="selectedItem?.image" class="dialog-img" />
            <h2 style="color: black; font-weight: 600;">{{ selectedItem?.title }}</h2>
            <p style="color: gray; font-weight: 400;">{{ selectedItem?.desc }}</p>
            <h3 style="color: #f96e03; font-weight: 700;">{{ selectedItem?.price }}</h3>
            <button @click="closeDialog" class="close-btn">Close</button>
        </div>
    </div>

</template>

<style scoped>
.box {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding-left: 30px;
    padding-right: 30px;
    background-color: white;
    box-shadow: 0 4px 8px rgba(164, 164, 164, 0.1);
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 20px;
    color: black;
    align-items: center;
    justify-content: center;
    font-weight: 600;
}

.icon {
    width: 24px;
    height: 24px;
}

.Banner {
    margin-top: 70px;
    margin-bottom: 20px;
    margin-left: 30px;
    margin-right: 30px;
    border-radius: 12px;
    background: linear-gradient(135deg, #f96e03 0%, #dc4921 100%);
    height: 250px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    padding-left: 20px;
}

.button_order {
    margin-top: 20px;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    background-color: white;
    color: rgb(239, 124, 52);
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: medium;
    cursor: pointer;
    transition: 0.3s;
}

.button_order:hover {
    background-color: rgb(227, 227, 227);
}

.title_card {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.image_banner {
    height: 200px;
    width: 550px;
    margin-right: 30px;
    object-fit: cover;
    border-radius: 10px;
}

.category {
    font-size: medium;
    color: black;
    width: auto;
    padding: 8px 16px;
    font-weight: 400;
    background-color: rgb(223, 221, 221);
    justify-content: center;
    display: flex;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s;
}

.category.active {
    background-color: #f96e03;
    color: white;
    font-weight: 600;
}

.item {
    margin: 20px 30px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    width: 420px;
    height: 400px;
    border-radius: 16px;
    background-color: white;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
}

.item:hover {
    background: linear-gradient(to bottom right, #fff7f1, #fff2e6);
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
    border: 2px solid #f96e03;
}

.item:hover .itemImage {
    transform: scale(1.05);
    transition: transform 0.3s ease;
}

.itemImage {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
    transition: transform 0.3s ease;
}


.price_section {
    margin-top: 20px;
    justify-content: space-between;
    flex-direction: row;
    display: flex;
}

.add_button {
    width: 80px;
    height: 40px;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 500;
    display: flex;
    border-radius: 5px;
    background-color: #f96e03;
}

.add_button:hover {
    background-color: #dc4921;
}

/* For dialog detail item */
.dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.dialog-box {
    background-color: white;
    padding: 20px;
    width: 400px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    text-align: center;
}

.dialog-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
}

.close-btn {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #f96e03;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
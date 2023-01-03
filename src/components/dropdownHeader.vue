<template>
    <!-- <button class="dropdown" @click="isOpen = !isOpen"> -->
    <button :class="{ dropdown: isOpen === false, dropdown2: isOpen === true }" @click="isOpen = !isOpen">
        <img class="logo-asr2" alt="ASR logo" src="../assets/LC.svg">
        <img v-if="!isOpen" class="logo-asr3" alt="ASR logo" src="../assets/chevronDown.svg">
        <img v-if="isOpen" class="logo-asr3" alt="ASR logo" src="../assets/chevronUp.svg">
    </button>
    <ul class="sub-menu" v-if="isOpen">
        <li v-for="(item, i) in items" :key="i" class="menu-item">
            <a :href="item.link">
                <img class="menu-image" :src="item.image" alt="">
                {{ item.title }}
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'dropdownHeader',
    props: ['title', 'image', 'items'],
    data() {
        return {
            isOpen: false
        }
    }
}
</script>

<style>
.sub-menu {
    position: absolute;
    top: 76px;
    right: 100px;
    box-shadow: 0px 0px 16px rgba(42, 41, 48, 0.08), 0px 2px 4px rgba(42, 41, 46, 0.16);
}

li.menu-item {
    position: relative;
    width: 380px;
    text-align: left;
    background-color: #fff;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    height: 64px;
    list-style: none;
}

li.menu-item:nth-child(1) {
    border-bottom: none;
}

li.menu-item:nth-last-child(1) {
    border-top: none;
}

li.menu-item:hover {
    border-left: 4px solid #e5e5e5;
}

.menu-item a {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 24px 0 64px;
    width: 100%;
    color: #000;
    text-decoration: none;
}

.menu-image {
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
}

.menu-item a:active,
.menu-item a:focus-visible {
    outline: none;
    border: none;
    border: 2px dotted #000000;
}

/* *******mobile********* */


@media screen and (max-width: 600px) {
    .sub-menu {
        position: absolute;
        top: 72px;
        right: 0px;
        box-shadow: 0px 0px 16px rgba(42, 41, 48, 0.08), 0px 2px 4px rgba(42, 41, 46, 0.16);
    }

    li.menu-item {
        width: 100vw;
    }
}
</style>
<template>
  <nav>
    <img class="logo-asr" alt="ASR logo" src="../assets/LogoASRglobalHeader.svg">
    <div class="header-items">
      <img class="logo-notification" alt="ASR notification" src="../assets/MeldingenNavigatie.svg">
      <DropdownHeader :items="DD" />
    </div>
  </nav>
</template>

<script>
import DropdownHeader from './dropdownHeader.vue';
export default {
  name: "header",
  components: { DropdownHeader },
  data() {
    return {
      DD: [
        {
          title: "ListMenu item 1",
          link: "https://www.asr.nl/",
          image: require('../assets/trashcan.svg')
        },
        {
          title: "ListMenu item 2",
          link: "#",
          image: require('../assets/persoon.svg')
        },
        {
          title: "ListMenu item 3",
          link: "#",
          image: require('../assets/Uitgang.svg')
        }
      ]
    }
  },

}

</script>

<style >
nav {
  height: 88px;
  background-color: #FFF;
  box-shadow: 0px 0px 16px rgba(42, 41, 48, 0.08), 0px 2px 4px rgba(42, 41, 46, 0.16);
  padding: 16px 124px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img.logo-asr {
  max-width: 136px;
}

img.logo-asr2 {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.header-items {
  height: 100%;
  display: flex;
  align-items: center;
}

button.dropdown,
button.dropdown2 {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  width: 58px;
  height: 100%;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  margin-left: 32px;
  display: flex;
  justify-content: right;
}

button.dropdown:hover {
  padding-top: 10px;
}

button.dropdown2:hover {
  padding-bottom: 10px;
}


/* *******13 inche********* */
@media screen and (max-width: 1440px) {
  nav {
    height: 88px;
    padding: 16px 60px;
  }
}

/* *******tablet********* */
@media screen and (max-width: 834px) {
  nav {
    height: 88px;
    padding: 16px 32px;
  }
}

/* *******mobile********* */
@media screen and (max-width: 600px) {
  nav {
    height: 72px;
    padding: 8px 24px;
  }

  img.logo-asr {
    width: 90px;
  }

  img.logo-asr2 {
    max-width: 26px;
  }

  img.logo-asr3 {
    max-width: 8px;
  }

  img.logo-notification {
    width: 36px;
  }

  button.dropdown,
  button.dropdown2 {
    width: 46px;
    margin-left: 16px;
  }

  button.dropdown:hover,
  button.dropdown2:hover {
    padding-top: 0;
  }

}
</style>

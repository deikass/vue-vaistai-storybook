<template>
  <Overlay title="card">
    <div class="card">
      <div class="card__image">
        <img src="./assets/img.png" alt="">
      </div>
      <div class="card__content">
        <div class="card__title">Ocuvite Lutein Forte plėvele dengtos tabletės N30</div>
        <div class="card__subtitle">Agetis Supplements Ltd</div>
        <div class="card__price"><span>nuo</span> 12,00 €</div>
      </div>
    </div>
  </Overlay>
  <Overlay title="card sale">
    <div class="card">
      <div class="card__image">
        <div class="card__sale">
          <img src="./assets/sale.svg" alt="">
        </div>
        <img src="./assets/img.png" alt="">
      </div>
      <div class="card__content">
        <div class="card__title">Ocuvite Lutein Forte plėvele dengtos tabletės N30</div>
        <div class="card__subtitle">Agetis Supplements Ltd</div>
        <div class="card__price"><span>nuo</span> 12,00 €</div>
      </div>
    </div>
  </Overlay>
</template>

<script>
import Overlay from './Overlay.vue'

export default {
  components: {Overlay}
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

.card {
  font-family: 'Inter', sans-serif;
  border: 1px solid #E1EBF2;
  width: 300px;
  text-align: left;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  background: #FFFFFF;
}

.card__image {
  height: 200px;
  display: flex;
  justify-content: center;
  position: relative;
}

.card__image img {
  width: fit-content;
}

.card__content {
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.card__title {
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  color: #4D4D4D;
}

.card__subtitle {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #92979D;
}

.card__price {
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
}
.card__price span{
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #6A727A;
}

.card__sale {
  position: absolute;
  right: 10px;
  top: 15px;
}

</style>

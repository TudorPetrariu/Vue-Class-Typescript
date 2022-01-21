<template>
  <div
    :style="`border-left: 10px solid ${randomColors};`"
    class="transfer-row__container"
  >
    <div class="transfer__left--col">
      <span class="transfer--price">$25 </span>
      <div>
        <span class="transfer--label">TODAY </span>
        <small class="transfer--time">06:30 PM</small>
      </div>
    </div>
    <div class="transfer__right--col">
      <div>
        <div class="transfer__address--text">
          <div :style="`border: 2px solid ${randomColors}`" class="circle top-circle" />
          <div :style="`border-left: 0.2rem dotted ${randomColors}`" class="dotted-line" />
          <span class="first-address">W 90th St, New York, NY 10025</span>
          <div class="address-divider--hr" />

          <span class="second-address">46th Ave, Woodside, NY 11101 Woodside</span>
          <div :style="`border: 2px solid ${randomColors}`" class="circle bottom-circle" />
        </div>
          <span style="color:red; font-weight:600; font-size:15px;" v-if="transfer.forgottenProperty">{{ transfer.forgottenProperty }}</span>
      </div>
      <div class="transfer--footer">
        <div>
          <span class="transfer--label">REQUESTS</span>
          <br />
          <span class="footer---label__value">5</span>
        </div>
        <div>
          <span class="transfer--label">PLEDGE</span>
          <br />
          <span class="footer---label__value">$150</span>
        </div>
        <div>
          <span class="transfer--label">WEIGHT</span>
          <br />
          <span class="footer---label__value">light</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Transaction } from "@/types/types";

@Component({
  name: "TransferRow",
})
export default class TransferRow extends Vue {
  @Prop({ required: true }) transfer!: Transaction;
  get randomColors():string{
    return  `#${Math.floor(Math.random()*16777215).toString(16)}`
  }
}
</script>

<style lang="scss">
.transfer-row__container {
  background: whitesmoke;
  display: flex;
  min-height: 12rem;
  max-height: 16rem;

  border-radius: 8px;
  margin: 1rem;
  max-width: 30rem;
  padding: 0.8rem 0;
  .transfer--label {
    font-weight: 600;
    opacity: 0.4;
  }
}
.transfer__left--col {
  padding: 0 1rem;
  margin: 1rem 0;
  width: min-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 2px solid rgba(199, 193, 193, 0.521);
  text-align: left;
  .transfer--price {
    font-size: 25px;
    font-weight: 700;
    opacity: 0.7;
  }
  .transfer--time {
    white-space: nowrap;
    font-weight: 900;
    opacity: 0.7;
  }
}
.transfer__right--col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  padding: 1rem;
  text-align: left;
  .transfer__address--text {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 14px;
    font-weight: 600;
    opacity: 0.8;

    .first-address,
    .second-address {
      margin: 0 1rem;
      white-space: nowrap;
      overflow-x: auto;
    }
  }

  .address-divider--hr {
    border-top: 0.1rem solid rgb(218, 210, 210);
    width: 90%;
    margin-left: 1rem;
  }
  .dotted-line {
    position: absolute;
    top: 1.1rem;
    left: 0.2rem;
    height: 40%;
    // border-left: 0.2rem dotted blueviolet;
  }
  .circle {
    position: absolute;
    border-radius: 50%;
    width: 0.6rem;
    height: 0.6rem;
    // border: 2px solid blueviolet;
    &.top-circle {
      top: 0.3rem;
    }
    &.bottom-circle {
      bottom: 0.3rem;
    }
  }
}

.transfer--footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0.3rem;
  .footer---label__value {
    font-weight: 900;
    opacity: 0.7;
  }
}
</style>

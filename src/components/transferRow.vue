<template>
  <div class="transfer-row">
    <h4>{{ transfer.fromSecurityHolder }}</h4>
    <p>Type: {{ transfer.type }}</p>
    <p class="transfer-row__state">State: {{ transfer.state }}</p>
    <p>Amount: {{ transfer.amount }}</p>
    <span v-if="transfer.forgottenProperty">{{
      transfer.forgottenProperty
    }}</span>
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
}
</script>

<style lang="scss">
.transfer-row {
  border: 1px solid blue;
  margin: 1rem;
  max-width: 500px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__state {
    border: 1px solid hotpink;
    width: fit-content;
    display: block;
  }
}
</style>

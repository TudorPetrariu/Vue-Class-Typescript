<template>
  <th>
    <span>{{ footerCellText }}</span>
  </th>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: "footerRow",
})
export default class footerRow extends Vue {
  @Prop({ required: true }) footerCellText!: string;
}
</script>


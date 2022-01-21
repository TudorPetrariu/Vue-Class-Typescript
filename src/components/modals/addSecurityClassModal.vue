<template>
  <section class="section">
    <div class="modal-card">
      <div class="modal-card-body">
        <div class="form__input--layout">
          <b-field
            :type="{ 'is-danger': messsage.length }"
            :message="messsage.length ? messsage : ''"
            label="Security Class Name"
          >
            <b-input maxlength="15" size="is-medium" v-model="securityClassName"></b-input>
          </b-field>
          <b-field label="Authorized Amount">
            <b-numberinput
              v-model="authorizedAmount"
              min="1"
              type="is-light"
              size="is-medium"
            >
            </b-numberinput>
          </b-field>

          <b-field label="Issued Amount">
            <b-numberinput
              v-model="issuedAmount"
              type="is-light"
              size="is-medium"
              min="1"
            >
            </b-numberinput>
          </b-field>

          <b-field label="Authorized Capital">
            <b-numberinput
              v-model="authorizedCapital"
              type="is-light"
              size="is-medium"
              min="1"
            >
            </b-numberinput>
          </b-field>
          <b-field label="Issued Capital">
            <b-numberinput
              v-model="issuedCapital"
              type="is-light"
              size="is-medium"
              min="1"
            >
            </b-numberinput>
          </b-field>
          <b-field label="Nominal Value">
            <b-numberinput
              v-model="nominalValue"
              type="is-light"
              size="is-medium"
              min="1"
            >
            </b-numberinput>
          </b-field>
        </div>
        <div class="form__btn--layout">
          <b-button class="btn--close" @click="$emit('close')">Close</b-button>
          <b-button :disabled="!securityClassName.length" class="btn--submit" @click="submitForm"
            >Submit</b-button
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { TableData } from "@/types/types";

@Component
export default class addSecurityClassModal extends Vue {
  @Prop({ required: false }) securityClassNames!: Array<string>;
  securityClassName = "";
  nominalValue = 0;
  authorizedAmount = 0;
  issuedAmount = 0;
  authorizedCapital = 0;
  issuedCapital = 0;
  isCardModalActive = false;
  messsage = "";

  submitForm(): void {
    const securityClass: TableData = {
      id: JSON.stringify(Math.random()),
      name: this.securityClassName,
      nominalValue: this.nominalValue,
      authorizedAmount: this.authorizedAmount,
      issuedAmount: this.issuedAmount,
      authorizedCapital: this.authorizedCapital,
      issuedCapital: this.issuedCapital,
    };

    const duplicateRecordName = this.securityClassNames.find((name) => name === securityClass.name);
    if (duplicateRecordName) {
      this.messsage = "Security Class already registered";
      return;
    }
    this.$emit("submit", securityClass);
    this.$emit("close");
  }
}
</script>

<style scoped lang="scss">
.form__input--layout {
  margin: 0 2rem;
}
.form__btn--layout {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  button {
    padding: 1rem 2rem;
    border-radius: 4px;
  }
  .btn--submit {
    background: rgb(13, 189, 174);
    color: rgb(255, 255, 255);
  }
  .btn--close {
    border-color: rgb(41, 212, 198);
    border: 2px solid;
    color: rgb(13, 189, 174);
  }
}
</style>

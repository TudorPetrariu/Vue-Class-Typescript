<template>
  <div class="home">
    <h1>This is a table with some important data</h1>
    <b-button @click="onAddSecurityClass" size="is-small" class="btn--add" icon-left="plus">
      Security Class
    </b-button>
    <div v-if="tableResources">
      <b-table :data="tableResources" :columns="columns">
        <template #footer>
          <th key-attribute="footer-label">
            <span>TOTALS</span>
          </th>
          <transferRowFooter key-attribute="totalAuthorizedAmount" :footer-cell-text="totalAuthorizedAmount"
          />
          <transferRowFooter key-attribute="totalIssuedAmount" :footer-cell-text="totalIssuedAmount"
          />
          <transferRowFooter key-attribute="totalAuthorizedCapital" :footer-cell-text="totalAuthorizedCapital"
          />
          <transferRowFooter key-attribute="totalIssuedCapital" :footer-cell-text="totalIssuedCapital"
          />
        </template>
      </b-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import { TableData } from "@/types/types";
import { totalAmount } from "@/../utils/helperFunctions";
import addSecurityClassModal from "@/components/modals/addSecurityClassModal.vue";
import transferRowFooter from "@/components/transferRowFooter.vue";

@Component({
  name: "Home",
  components: { transferRowFooter },
  computed: {
    ...mapGetters(["tableResources"]),
  },
  methods: {
    ...mapActions(["getTableData", "addSecurityClass"]),
  },
})
export default class Home extends Vue {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async created() {
    await this.getTableData();
  }
  getTableData!: () => any;
  addSecurityClass!: () => any;
  tableResources!: () => any;
  columns = [
    {
      label: "Security class",
      field: "name",
    },
    {
      label: "Authorized amount",
      field: "authorizedAmount",
    },
    {
      label: "Issued amount",
      field: "issuedAmount",
    },
    {
      label: "Authorized Capital",
      field: "authorizedCapital",
    },
    {
      label: "Issued capital",
      field: "issuedCapital",
    },
  ];
  loading = false;

  onAddSecurityClass(): void {
    this.$buefy.modal.open({
      parent: this,
      component: addSecurityClassModal,
      hasModalCard: true,
      width: 900,
      trapFocus: true,
      scroll: "keep",
      ariaModal: true,
      customClass: "card-form-modal",
      canCancel: ["outside"],
      props: {
        securityClassNames: this.securityClassNames,
      },
      events: {
        submit: (record: TableData): void => {
          this.addSecurityClass(record);
        },
      },
    });
  }
  get securityClassNames(): Array<string> {
    return this.tableResources.map((securityName: string) => securityName.name);
  }
  get totalAuthorizedAmount(): number {
    return totalAmount(this.tableResources, "authorizedAmount");
  }
  get totalIssuedAmount(): number {
    return totalAmount(this.tableResources, "issuedAmount");
  }
  get totalAuthorizedCapital(): number {
    return totalAmount(this.tableResources, "authorizedCapital");
  }
  get totalIssuedCapital(): number {
    return totalAmount(this.tableResources, "issuedCapital");
  }
}
</script>
<style scoped lang="scss">
.btn--add {
  background: rgb(13, 189, 174);
  color: rgb(255, 255, 255);
  &:hover {
    background: rgb(255, 255, 255);
    color: rgb(13, 189, 174);
    border: 2px solid rgb(13, 189, 174);
  }
}
</style>

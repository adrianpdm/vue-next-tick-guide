<template>
  <div style="display: block; margin: 0 auto; width: 360px;">
    <p>
      <ul>
        <li>
          Apa fungsi dari <code>$nextTick</code>?
        </li>
        <li>
          Apa yang dimaksud dengan 1 update cycle (1 tick)?
        </li>
        <li>
          Apakah <code>$nextTick</code> akan menunggu async operation beres dahulu?
        </li>
      </ul>
    </p>
    <br>
    <br>
    <button @click="refreshTable(--currentPage)">
      Prev
    </button>
    &nbsp;
    <button @click="refreshTable(++currentPage)">
      Next
    </button>
    <table v-if="render">
      <thead>
        <tr>
          <th>Abjad</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in tableData" :key="index">
          <td>{{ row }} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from './mockAxios'

export default {
  data: () => ({
    tableData: [],
    render: true,
    currentPage: 1,
    perPage: 5,
  }),
  mounted() {
    this.refreshTable()
  },
  methods: {
    async getDataFromRemoteRepository(page = 1) {
      await axios.get({
        params: {
          page: page,
          perPage: this.perPage
        }
      }).then((res) => {
        this.currentPage = page;
        this.tableData = res.data;
      })
    },
    async refreshTable(page = 1) {
      this.render = false;
      this.getDataFromRemoteRepository(page);
      await this.$nextTick();
      this.render = true;
    }
  }
}
</script>

<style lang="scss" scoped>
table th,
table td {
  border-collapse: collapse;
  border: 1px solid #eee;
}
</style>
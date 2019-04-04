<template>
  <div class="index">
    <div class="table" v-full-height>
      <Table border :columns="userColumns" :data="userData"></Table>
    </div>
    <Page
      :total="userTotal"
      :current="page.current"
      :page-size-opts="[5, 10, 15, 20]"
      :size="page.size"
      show-total
      show-sizer
      class="pager"
      @on-change="onChange"
      @on-page-size-change="onPageSizeChange"
    />
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      userTotal: 0,
      page: {
        current: 1,
        size: 5
      },
      userColumns: [
        {
          title: "Name",
          key: "name",
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "person"
                }
              }),
              h("strong", params.row.name)
            ]);
          }
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return (
              <div>
                <button
                  style={{ marginRight: "5px" }}
                  on-click={this.show.bind(this, params.index)}
                >
                  View
                </button>
                <button on-click={this.remove.bind(this, params.index)}>
                  Delete
                </button>
              </div>
            );
          }
        }
      ],
      userData: []
    };
  },
  created() {
    this.onSearch(this.page);
  },
  methods: {
    ...mapActions(["getUserList"]),
    onSearch(params) {
      this.getUserList(params)
        .then(res => {
          console.log(res);
          this.userData = res["data"]["rows"];
          this.userTotal = res["data"]["total"];
        })
        .catch(e => {
          console.log(e);
        });
    },
    onPageSizeChange(size) {
      this.page.size = size;
      this.onSearch(this.page);
    },
    onChange(index) {
      this.page.current = index;
      this.onSearch(this.page);
    },
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.userData[index].name}<br>Age：${
          this.userData[index].age
        }<br>Address：${this.userData[index].address}`
      });
    },
    remove(index) {
      this.userData.splice(index, 1);
    }
  }
};
</script>
<style scoped lang="scss">
.index {
  .table {
    overflow: auto;
  }
  .pager {
    height: 60px;
    line-height: 60px;
  }
}
</style>

<template>
  <div ref="contentDIV" class="nav2">
    <h4>目录2</h4>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="productId" label="id" width="180"></el-table-column>
      <el-table-column fixed prop="productName" label="车型" width="200"></el-table-column>
      <el-table-column prop="prodcutPrice" label="价格(元)" width="220"></el-table-column>
      <el-table-column label="图片" width="500">
        <template slot-scope="scope">
          <img :src="scope.row.prodcutImg" class="imgIcon">
        </template>
      </el-table-column>

      <el-table-column prop="outer" label="内容"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template>
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="total,prev, pager, next" :total="param.total"></el-pagination>
  </div>
</template>

<script>
export default {
  name: "menu1",
  data() {
    return {
      tableData: [],

      param: {
        size: 10,
        page: 1,
        total: 100
      }
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.getDate();

      this.setHeights();
    });
  },
  methods: {
    setHeights() {
      var dom = this.$refs.contentDIV;
      dom.style.minHeight = document.body.offsetHeight - 79 + "px";
    },
    //获取数据
    getDate: function() {
      var OBJ;
      this.$http
        .get("/api/seller", {
          params: {}
        })
        .then(response => {
          debugger;
          this.tableData = response.data.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  } // method end
};
</script>
<style lang="scss">
.imgIcon {
  width: 100%;
  height: auto;
}
.nav2.view {
    min-height: 909px!important;
}
h4 {
    background: #f56c6c;
    padding: 10px;
    color: white;
}
</style>

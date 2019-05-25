<template>
  <div ref="contentDIV">
    <h4>目录1</h4>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="newId" label="id" width="80"></el-table-column>
      <el-table-column fixed prop="date" label="日期" width="100"></el-table-column>
      <el-table-column prop="title" label="标题" width="120"></el-table-column>
      <el-table-column prop="position" label="地点" width="50"></el-table-column>
      <el-table-column label="图片" width="200">
        <template slot-scope="scope">
          <img :src="scope.row.imgs" class="imgIcon">
        </template>
      </el-table-column>

      <el-table-column prop="content" label="内容"></el-table-column>
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
        .get("/api/news", {
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
h4 {
    background: #030303;
    padding: 10px;
    color: white;
}
</style>

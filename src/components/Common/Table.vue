<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
const props = defineProps<{
  tableData: object[];
  tableHeader: TableHeaderConfig[];
}>();
const emit = defineEmits<{
  (e: 'click', type: string, data: object): void;
}>();
</script>
<template>
  <el-table :data="props.tableData" style="width: 100%" header-row-class-name="table-header">
    <template v-for="item in props.tableHeader" :key="item.prop">
      <el-table-column v-if="item.component == 'switch'" :label="item.label">
        <template #default="scope">
          <div>
            <el-switch v-model="scope.row[item.prop]" :active-value="item.value.activeValue" :inactive-value="item.value.inactiveValue" />
          </div>
        </template>
      </el-table-column>
      <el-table-column v-else-if="item.operate" :label="item.label">
        <template #default="scope">
          <div class="flex justify-around cursor-pointer text-blue">
            <div v-for="item2 in item.operate" @click="emit('click', item2, scope.row)">
              {{ item2 }}
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column v-else :prop="item?.prop" :label="item.label"></el-table-column>
    </template>
  </el-table>
</template>
<style lang="scss">
.el-table {
  background: #17295c;
  overflow: hidden;
  border-radius: 10px;
  --el-table-tr-bg-color: transparent;
  --el-table-row-hover-bg-color: #143479;
  //   --el-table-border: #ccc;
  --el-table-border-color: #21366d;
  .el-table__header-wrapper {
    background: linear-gradient(222deg, #4994e8 0%, #154bd8 100%);
  }
  //   --el-table-header-bg-color: linear-gradient(222deg, #4994e8 0%, #154bd8 100%);
  .table-header {
    height: 60px;
    background: none;
    border-radius: 10px;
    .el-table__cell {
      background-color: transparent;
      .cell {
        color: #fff;
      }
    }
  }
  .el-table__row {
    height: 50px;
    font-size: 14px;
    color: #e2e4eb;
    &:hover {
      background-color: transparent;
    }
  }
}
</style>

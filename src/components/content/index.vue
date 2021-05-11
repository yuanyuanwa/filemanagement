<template>
  <!--使用子组件，传值并监听子组件自定义事件拿值-->
  <div>
    111
  <Tabs :listMenu="listMenu" @menuClick="menuClick" />
  </div>
  
</template>
<script>
import { defineComponent, ref } from "vue";
import Tabs from './b.vue'
 
export default defineComponent({
  name: "Index",
  components: {
    Tabs
  },
  setup() {
    const listMenu = ref([
      {
        name : '总部',
        isActive : true
      },
      {
        name : '地球',
        isActive : false
      },
      {
        name : '火星',
        isActive : false
      }     
    ])
    function menuClick (param) {
      listMenu.value.forEach(item => {
        item.isActive = item.name === param.menuName ? true : false
      })
    }
    return {
      listMenu,
      menuClick
    }
  }
});
</script>

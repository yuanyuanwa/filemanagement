<template>
    <div class="Tabs">
        <div v-for="(menu, index) in listMenu" :key="index" 
            
            :class="{ 'mactive' : menu.isActive === true ? true : false }">
           1- {{ menu.name }}

        </div>
        <div>55555</div>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'Tabs',
    props: {
        listMenu: { // 菜单数据
            type: Array,
            required: true,
            default(){
                return []
            }
        }
    },
    setup(props, context){
        // const listMenu = props.listMenu
        console.log(11,props);
        // function menuClick (menuName) {
        //     // 通过自定义事件回传值
        //     context.emit('menuClick', { menuName })
        // }
        return {
            // listMenu,
            // menuClick
        }
    }
})
</script>
<style >
    .Tabs{
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 50px;
        background-color: #0087AC;
        color: black;
    }
    .mactive{
        color: white;
        font-weight: bold;
    }
</style>

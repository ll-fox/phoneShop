<template>
    <div>
        <cmtbox :id="$route.params.id"></cmtbox>
    </div>
</template>
<script>
import cmtbox from '../subconponents/comment.vue'
export default {
    components:{
        cmtbox
    }
    
}
</script>
<style scoped>

</style>

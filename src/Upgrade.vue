<template>
    <div>
        <button 
        :disabled="!canclick"
        @click="$emit('clicked', {'cost':cost, 'cps':cps, 'key':index})"
        >Add {{cps}} cps, cost: {{cost}} [ {{data.count}} ]</button>
    </div>
</template>
<script>
export default {
    props:['counter', 'data', 'index'],
    computed:{
        canclick(){
            return this.counter>=this.cost;
        },
        cps(){
            return this.data.cps;
        },
        cost(){
            return this.data.cost;
        }
    }
}
</script>
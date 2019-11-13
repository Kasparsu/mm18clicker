import Vue from 'vue';
import Counter from './Counter.vue';
import Clicker from './Clicker.vue';
import Upgrade from './Upgrade.vue';

Vue.component('counter', Counter);
Vue.component('clicker', Clicker);
Vue.component('upgrade', Upgrade);

let app = new Vue({
    el: '#app',
    mounted(){
        setInterval(()=> {
            this.counter+=this.cps;
        }, 1000);
    },
    data:{
       counter: 0,
       cps: 0,
       upgrades: [
           {cps: 0.1, cost:10, count:0},
           {cps: 1, cost:100, count:0},
           {cps: 10, cost:1000, count:0},
           {cps: 100, cost:10000, count:0},
           {cps: 1000, cost:100000, count:0},
       ]
    },
    methods: {
       upgrade({cps, cost, key}){
            this.counter-=cost;
            this.cps+=cps;
            this.upgrades[key].count++;
            this.upgrades[key].cost += Math.ceil((this.upgrades[key].cost /100)*15);
       }
    },
    computed: {
        
    }
});
 import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const App = {
    name: 'App',
    data: function() {
        return {
            input_one: 0,
            input_two : 0,
            operator: 0,
        }
    },
    computed:{
        calculatingResults(){
            let oper = 0
            if (this.operator === "sum") {this.oper = "+"}
            if (this.operator === "subtract") {this.oper = "-"}
            if (this.operator === "multiply") {this.oper = "*"}
            if (this.operator === "divide") {this.oper = "/"}
            return eval(this.input_one + this.oper + this.input_two)

        }
    }
  };

  const app = createApp(App);
  const vm = app.mount('#app');
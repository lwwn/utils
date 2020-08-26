import Vue from 'vue'
import toast from './toast.vue'

const toastBox = Vue.extend(toast);

toast.install = function(data) {

   let instance = new toastBox({
     data
   }).$mount();

   document.body.appendChild(instance.$el)

   Vue.nextTick(()=>{

     instance.visible =true

   })
}

export default toast;
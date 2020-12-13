import Vue from "vue";
import VueRouter from "vue-router";



Vue.use(VueRouter);


import Question from "./components/Question.vue";
// import InvestmentFunds from "./components/investment-funds .vue";
// import selectAll from "./components/select-all.vue";
// import publicProcess from "./components/public-process.vue";
// import batchTansection from "./components/batch-transection.vue";
// import contactUs from "./components/contact-us.vue";
// import Faq from "./components/faq.vue";

/* const routes = [
	
	},
]; */




const router = new VueRouter({

    mode:'history',

   routes:[
   { path: "/", component: Question},
  /* { path: "/dashboard", component: DashboardLayout},
    { path: "/InvestmentFunds", component: InvestmentFunds},
    { path: "/selectAll", component: selectAll},
    { path: "/batchTransection", component: batchTansection},
    { path: "/publicProcess", component: publicProcess},
    { path: "/contactUs", component: contactUs},
    { path: "/faq", component: Faq} */

   ]
	
}); 


export default  router
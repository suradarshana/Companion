<template>
  <div class="Main_container exgc-container exgc-mx-auto exgc-p-8">

    <div class="Qpanel exgc-border-solid exgc-border-2 exgc-border-gray-400">
      <div class="Qpanel__qheader exgc-border-b-1 exgc-border-solid exgc-border-b-2 exgc-border-gray-400 exgc-py-2 exgc-px-4">
        <h2>Question: </h2>
      </div>
      <div class="Qpanel__qbody exgc-p-4">
        <div class="Qpanel__qbody__towColomn">
          <p>Country increased by an average of 2% per year from 2000 to 2003. If the population of this country was 2 000 000 on December 31, 2003, then the population of this country on January 1, 2000, to the nearest thousand would have been. </p>
        </div>
      </div>
    </div>

 <div class="QboxRow exgc-flex exgc-content-between exgc-mt-5">
<div class="QboxRow__boxColomn exgc-border-solid exgc-border-2 exgc-border-gray-400  exgc-w-2/3 exgc-mr-4 exgc-p-4">
<p>Lorem Ipsum is simply dummy</p>
 </div>
 <div class="QboxRow__boxColomn exgc-border-solid exgc-border-2 exgc-border-gray-400  exgc-w-1/3 exgc-p-4">
<h3>Hint.</h3>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
 </div>
 </div>


  <div class="QboxRow exgc-flex exgc-content-between exgc-mt-5">
<div class="QboxRow__boxColomn exgc-w-2/3 exgc-mr-4 exgc-p-4">
<label>Next Question</label>
 </div>
 <div class="QboxRow__boxColomn   exgc-w-1/3 exgc-p-4">
<button class="exgc-bg-orange-400 exgc-hover:bg-blue-700 exgc-text-white exgc-font-bold exgc-p-2 exgc-px-4 exgc-rounded exgc-mr-4">
  Check Answer
</button>

<button class="exgc-bg-orange-400 exgc-hover:bg-blue-700 exgc-text-white exgc-font-bold exgc-p-2 px-4 exgc-rounded">
  Show Hint
</button>

 </div>
 </div>


  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.Qpanel{
 
}
</style>

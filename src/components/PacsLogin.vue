<template>
  <div class="pacs-root">
      <div class="pacs-login">
        <h2 style="color:white;">二维码登录</h2>
        <img src= "../assets/qrcode.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PacsLogin',
  data () {
    return {
    }
  },
  methods:{
    goPacs(){
        window.location.href = "https://viewer-wpacs.rubikstack.com/series.html?accessionNumber=CTZY1583473&institution=26b8d8c566d811e7af980242af104d37#/"
    },
    goDiseaseDetail(){
      this.$router.push({
        name:"DiseaseDetail"
      })
    },
    checkState(){
      var that = this
       this.$axios({
          method:"get",
          url:"/v1/exams/3",
      }).then(res=>{
        console.log(res)
        if(res && res.data.state !== 200){
          setTimeout(() => {
            that.checkState()
          }, 2000);
        }else if(res && res.data.state === 200){
          this.goPacs()
          return
        }
      }).catch(res=>{

      })
    }
  },
  mounted(){
     this.checkState()
      //   
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 .pacs-root{
   width: 100%;
   height: 100%;
   display:flex;
   background: #46acf6;
   flex-direction: column;
   align-items: center;
   justify-content: center;
 }
 .pacs-login{
   
 }
</style>

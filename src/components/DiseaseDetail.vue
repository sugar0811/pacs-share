<template>
    <div class="disease-detail--wrap">
        <div class="disease-detail--title">
                病程详情
        </div>
        <div class="disease-detail-record--wrap">
            <sapn class="record--title">11-07病程记录</sapn>
            <span class="record--content">记录时间:2018-09-09 12:24  记录人：周亮亮</span>
        </div>
        <div class="disease-detail--item">
            <div class="item--title">
                    <img class="title--icon" src="../assets/goutong_.png" >
                    <span class="title-text">查房沟通</span>
            </div>
             <hr style="height:1px;border:none;border-top:1px dashed #dadada;" />
             <span class="content-text">患者咳嗽、咳痰较前减少，咳黄白色浓痰，无明显胸闷、气促；左髋关节胀痛痛钱，NRS评分：1分；无明显腹痛，腹胀不适</span>
        </div>
         <div class="disease-detail--item">
            <div class="item--title">
                    <img class="title--icon" src="../assets/tizheng_.png" >
                    <span class="title-text">查体体征</span>
            </div>
             <hr style="height:1px;border:none;border-top:1px dashed #dadada;" />
             <span class="content-text">查体，神清，精神可；体温 37.3摄氏度，心率70次/分，呼吸18次/分，血压141/71mmHg，24小时总入量2028ml，总出量1900ml，总尿量1900ml，皮肤巩膜无明显感染，肺部听诊呼吸音粗，可闻及湿啰音，心脏听诊未及病理性杂音，腹略膨，无压痛，无调痛，双下肢无明显凹陷性水肿，神经系统</span>
             <img src="../assets/disea_test.png" style="width:100px;heigt:80px;margin-top:5px;display:block;">

        </div>
         <div class="disease-detail--item">
            <div class="item--title">
                    <img class="title--icon" src="../assets/fuzhu_.png" >
                    <span class="title-text">辅助检查</span>
            </div>
             <hr style="height:1px;border:none;border-top:1px dashed #dadada;" />
             <div class="jianyan-item--title">
                <span>血常规+超敏CRP(快速法)(病房)</span>
                <span>2018/10/31</span>
             </div>
            <span class="content-text">
                    中性粒细胞(%)：73.3%<br/>
                    红细胞计数：3.75*10E12/L<br/>
                    血红蛋白： 120g/L<br/>
                    C反应蛋白：28.9mg/L
            </span>
        </div>
         <div class="disease-detail--item">
            <div class="item--title">
                    <img class="title--icon" src="../assets/goutong_.png" >
                    <span class="title-text">医嘱调整</span>
            </div>
             <hr style="height:1px;border:none;border-top:1px dashed #dadada;" />
             <span class="content-text" style="display:block;">停用 拉氧头孢钠针</span>
             <hr style="height:1px;border:none;border-top:1px solid #dadada;" />
             <span class="content-text">新增 复方草珊瑚含片</span>
        </div>
        <div class="disease-detail--item">
            <div class="item--title">
                    <img class="title--icon" src="../assets/yijian_.png" >
                    <span class="title-text">治疗意见</span>
            </div>
             <hr style="height:1px;border:none;border-top:1px dashed #dadada;" />
             <span class="content-text">患者白蛋白偏低，今加用人血白蛋白补充，剩余治疗同前，续关。已审核护理计划并同意目前处理措施</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'DiseaseDetail',
    data(){
        return {
            a:'1'
        }
    }
}
</script>
<style lang='scss' rel='stylesheet/scss' scoped>
    .disease-detail--wrap{
        background-color: #fafafa;
        .title--icon{
            width: 20px;
            height: 20px;
            //  vertical-align:middle;
        }
        .title-text{
            margin-left: 5px;
            font-size: 16px;
            line-height: 20px;
            color: #777;
        }
        .content-text{
            font-size: 14px;
            color: #333;
        }
        .disease-detail--title{
            background: #46acf6;
            height: 40px;
            width: 100%;
            color: #fff;
            font-size: 16px;
            line-height: 40px;
        }
        .disease-detail-record--wrap{
            padding: 10px;
            background: #fff;
            text-align: left;
            .record--title{
                font-size: 18px;
                font-weight: bold;
                display: block;
            }
            .record--content{
                font-size: 14px;
                color: #777;
            }
        }
        .disease-detail--item{
            padding: 10px;
            margin: 10px;
            text-align: left;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 3px 3px 5px #dadada;
            .jianyan-item--title{
                    color: #000;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                span:nth-child(1){
                    color: #222;
                    font-weight: bold;
                    font-size: 16px;
                    &:before{
                        content: '#'
                    }
                }
                 span:nth-child(2){
                    color: #666;
                    font-size: 14px;
                }
            }
            .item--title *{
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
  
</style>


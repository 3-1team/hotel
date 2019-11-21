<template>
  <div>
   <!-- 顶栏 -->
    <el-row :gutter="15">
      <el-col :span="15" :offset="5">
        <div class="grid-content bg-purple">
          <el-form ref="form" :model="form" label-width="80px">
            <div style="float: left;">
              <el-form-item label="目的地">
                <el-select v-model="form.region" placeholder="请选择入住区域">
                  <el-option label="西安" value="shanghai"></el-option>
                  <el-option label="北京" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="block" style="float: left;">
              <span class="demonstration" style="width: 200px;">入住时间</span>
              <el-date-picker
                v-model="value1"
                type="datetimerange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['12:00:00']"
              ></el-date-picker>
            </div>
            <div style="float: left;">
              <el-form-item label="房间数">
                <el-select v-model="form.region" placeholder="1间" style="width: 70px;">
                  <el-option label="1间" value="shanghai"></el-option>
                  <el-option label="2间" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <div style="float: left;padding-left: 10px;">
              <el-form-item label="住客数">
                <el-select v-model="form.region" placeholder="1" style="width: 70px;">
                  <div>
                    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>
                  </div>
                </el-select>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <!-- 酒店名称 -->
    <div style="margin-left: 21%">
      <el-row>
        <el-col :span="14">
          <div class="grid-content bg-purple-dark" style="background: #FFFFFF;">
            <div>
              <a style="font-size: 25px;">西安咸阳机场</a>
              <a>&nbsp;&nbsp;&nbsp;&nbsp; xianxianyangjichang</a>
              <div>品质保障</div>
            </div>
            <div style="float: left;">💎💎</div>
            <div style="float: left;margin-left: 10px;background: #7be;color: #FFFFFF;">名宿</div>
            <div style="float: left;margin-left: 10px;background: #7be;color: #FFFFFF;">周边</div>
            <div>
              <a>“</a>
              <a style="color: #F0AD4E;">服务周到，交通便利</a>
              <a>”</a>
            </div>
            <div>西安南窑头</div>
            <div>
              <a>交通地图</a>&nbsp;&nbsp;&nbsp;
              <a>周边街景</a>
            </div>
            <!-- 酒店图片 -->
            <div style="width: 40%;height: 280px;background-color: red;float: left;"></div>
            <div>
              <div style="width: 20%;height: 140px;background-color: yellow;float: left;"></div>
              <div style="width: 20%;height: 140px;background-color: blue;float: left;"></div>
              <div style="width: 20%;height: 140px;background-color: green;float: left;"></div>
              <div style="width: 20%;height: 140px;background-color: #F0AD4E;float: left;"></div>
              <div style="width: 20%;height: 140px;background-color: yellow;float: left;"></div>
              <div style="width: 20%;height: 140px;background-color: gray;float: left;"></div>
              <br />
            </div>
          </div>
        </el-col>
        <div style="width: 60%;margin-top: 400px;">
          <div style="width: 100%;border: 1px solid #;">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <!-- 房间列表 -->
              <el-tab-pane label="房型列表" name="first">
                <div style="width: 100%;height: 500px;border: 1px solid silver;border-radius: 5px;">
                  <div class="block" style="width: 200px;height: 30px;">
                    <span class="demonstration"></span>
                    <el-date-picker
                      v-model="value2"
                      type="daterange"
                      align="right"
                      unlink-panels
                      range-separator="至"
                      start-placeholder="入住日期"
                      end-placeholder="退房日期"
                      :picker-options="pickerOptions"
                    ></el-date-picker>
                  </div>
                  <div style="margin-top: 10px;">
                    <table>
                      <th style="width: 400px;">房型</th>
                      <th>床型</th>
                      <th>早餐</th>
                      <th>设施服务</th>
                      <th>政策</th>
                      <th>房价</th>
                      <th></th>
                      <tr>
                        <td>aaa</td>
                        <td>aaa</td>
                        <td>aaa</td>
                        <td>aaa</td>
                        <td>aaa</td>
                        <td>aaa</td>
                        <td>aaa</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </el-tab-pane>
              <!-- 酒店介绍。详情 -->
              <el-tab-pane label="酒店详情" name="second">
                <div>
                  <a style="font-size: 20px;">酒店介绍</a>
                  <br />
                  <div style="float: left;margin-left: 10px;background: #7be;color: #FFFFFF;">名宿</div>
                  <div style="float: left;margin-left: 10px;background: #7be;color: #FFFFFF;">周边</div>
                </div>
                <hr/>
                <div>
                  <a>1998年开业 2012年装修 277间房</a>
                  <br />
                  <a>
                    西安鸿业大酒店地处西安这个历史文化古城、国际化旅游城市的中心区域，临近古城含光门，步行至明城墙约5分钟，距钟楼、鼓楼、回民街、大/小雁塔等名胜景点行程均不超过20分钟，多条公交线路经过我酒店，交通便利，地理位置优越。
                    酒店使用的棉织品是的亮点之一，洗涤、消毒都来自酒店自备洗衣工厂，这在西安的酒店中已不多见，所有棉织品的清洗、消毒讲究程序；用药、用料讲究品质，确保您每晚使用的棉织品卫生、安全、舒适。在注重品质、卫生、安全的今天，入住在此是您不错的选择。
                    酒店的特色之一就是使用优质温泉作为酒店的洗浴用水，温泉水质清澈、水色宜人，富含对人体皮肤健康有益的矿物质，淡淡的硫磺气味更是温泉水品质的保证，长期使用让您体验到“温泉水滑洗凝脂”的美妙感受。
                    入住在此，您可在面积400余平方室内温泉游泳池畅游，欢迎前来亲身体验。酒店坚持亲情化、标准化服务，竭尽所能为您服务，全体员工愿为您营造满意、惊喜和感动的服务经历，非常高兴您能有一个愉快的入住体验。
                  </a>
                </div>
                <div style="margin-top: 20px;">
                  <div style="color: #31B0D5;font-size: 20px;">酒店设施</div>
                    <table style="width: 100%;margin-top: 20px;">
                      <tr>
                        <td style="width: 400px;">网络</td>
                        <td style="width: 400px;">
                          客房无线
                          <a style="color: green;">免费</a>
                        </td>
                        <td style="width: 400px;">
                          公用区无线
                          <a style="color: green;">免费</a>
                        </td>
                        <td style="width: 400px;"></td>
                        <td style="width: 400px;"></td>
                      </tr>
                      <hr style="width: 100%;" />
                      <tr>
                        <td style="width: 400px;">交通设施</td>
                        <td style="width: 400px;">
                          <a style="color: green;">免费</a>停车场
                          <a style="color: green;">&nbsp;&nbsp;免费!</a>
                        </td>
                        <td style="width: 400px;"></td>
                        <td style="width: 400px;"></td>
                        <td style="width: 400px;"></td>
                      </tr>
                      <hr />
                      <tr>
                        <td style="width: 400px;">交通服务</td>
                        <td style="width: 400px;">接站服务</td>
                        <td style="width: 400px;">代客泊车</td>
                        <td style="width: 400px;">租车服务</td>
                        <td style="width: 400px;">自行车租赁服务</td>
                      </tr>
                      <tr>
                        <td style="width: 400px;"></td>
                        <td style="width: 400px;">叫车服务</td>
                        <td style="width: 400px;"></td>
                        <td style="width: 400px;"></td>
                        <td style="width: 400px;"></td>
                      </tr>
                      <hr />
                      <tr>
                        <td style="width: 400px;">休闲娱乐</td>
                        <td style="width: 400px;">室内游泳</td>
                        <td style="width: 400px;">健身房</td>
                        <td style="width: 400px;">温泉</td>
                        <td style="width: 400px;">足浴</td>
                      </tr>
                      <tr>
                        <td style="width: 400px;"></td>
                        <td style="width: 400px;">按摩室</td>
                        <td style="width: 400px;">桑拿浴室</td>
                        <td style="width: 400px;">棋牌室</td>
                        <td style="width: 400px;">茶室</td>
                      </tr>
                      <hr />
                      <tr>
                        <td style="width: 400px;">前台服务</td>
                        <td style="width: 400px;">行李寄存</td>
                        <td style="width: 400px;">24小时前台</td>
                        <td style="width: 400px;">专职行李员</td>
                        <td style="width: 400px;">专职门童</td>
                      </tr>
                      <tr>
                        <td style="width: 400px;"></td>
                        <td style="width: 400px;">礼宾服务</td>
                        <td style="width: 400px;">旅游票务服务</td>
                        <td style="width: 400px;">叫醒服务</td>
                        <td style="width: 400px;">邮政服务</td>
                      </tr>
                      <hr />
                    </table>
                </div>
                <div>
                  <div style="color: #31B0D5;font-size: 20px;">酒店政策</div>
                  <div>
                    <table>
                     <tr>
                       <td style="width: 400px;">入住和离店</td>
                       <td style="width: 1000px;">入住时间：14:00以后      离店时间：12:00-14:00</td>
                       <td style="width: 400px;"></td>
                       <td style="width: 100px;"></td>
                       <td style="width: 400px;"></td>
                     </tr>
                     <hr />
                     <tr>
                       <td style="width: 400px;">儿童政策</td>
                       <td style="width: 1000px;">···酒店允许携带儿童入住</td>
                       <td style="width: 400px;"></td>
                       <td style="width: 100px;"></td>
                       <td style="width: 400px;"></td>
                     </tr>
                     <tr>
                       <td style="width: 400px;"></td>
                       <td style="width: 1000px;">···不接受18岁以下客人在无监护人陪同的情况下入住</td>
                       <td style="width: 400px;"></td>
                       <td style="width: 100px;"></td>
                       <td style="width: 400px;"></td>
                     </tr>
                     <tr>
                       <td style="width: 400px;"></td>
                       <td style="width: 1000px">···若超过房型限定人数，要求均需获得酒店的确认。</td>
                     </tr>
                     <hr />
                     <tr>
                       <td style="width: 400px;">早餐信息</td>
                       <td style="width: 1000px;">形式：自助餐</td>
                       <td style="width: 400px;"></td>
                       <td style="width: 100px;"></td>
                       <td style="width: 400px;"></td>
                     </tr>
                     <tr>
                       <td style="width: 400px;"></td>
                       <td style="width: 1000px;">价格：RMB30/人</td>
                       <td style="width: 400px;"></td>
                       <td style="width: 100px;"></td>
                       <td style="width: 400px;"></td>
                     </tr>
                     <hr />
                     <tr>
                       <td style="width: 400px;">宠物</td>
                       <td style="width: 1000px;">不可以携带宠物</td>
                       <td style="width: 400px;"></td>
                       <td style="width: 100px;"></td>
                       <td style="width: 400px;"></td>
                     </tr>
                     <hr />
                     <tr>
                       <td style="width: 400px;">可用支付方式</td>
                       <td style="width: 1000px;">支付宝，微信，银行银联</td>
                       <td style="width: 400px;"></td>
                       <td style="width: 100px;"></td>
                       <td style="width: 400px;"></td>
                     </tr>
                     <hr />
                    </table>
                  </div>
                </div>
              </el-tab-pane>
             <!-- 酒店评论 -->
              <el-tab-pane label="酒店评价" name="third">酒店评论</el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        region: ""
      },
      value1: "",
      value2: "",
      num: 1,
      value: ""
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #e3f2ff;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
th {
  width: 200px;
}
tr {
  border: #000000 solid #1b6d85;
}
td {
}
</style>

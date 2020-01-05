<template>
<v-container>
  <v-row>
    <v-col cols="8" offset="2">
      <v-card class="pa-2">
        <v-card-text style="font-size: 20px" class="darken-1--text font-weight-bold" align="center">Konsola Nintendo Switch Joy-Con 32GB Niebiesko-czerwony</v-card-text>
      </v-card>
      <div class="text-center pa-2">
        <v-btn-toggle rounded>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn @click="extractData(), extractInfoVisibility = true" color="white" v-on="on">
                <span style="font-size: 20px" class="brown-1--text font-weight-bold">E</span>
              </v-btn>
            </template>
            <span>Extract</span>
          </v-tooltip>
          <v-btn v-if="extractedData === null" disabled color="white">
            <span style="font-size: 20px" class="brown-1--text font-weight-bold">T</span>
          </v-btn>
          <v-tooltip bottom v-else>
            <template v-slot:activator="{ on }">
              <v-btn @click="transformData" color="white" v-on="on">
                <span style="font-size: 20px" class="brown-1--text font-weight-bold">T</span>
              </v-btn>
            </template>
            <span>Transform</span>
          </v-tooltip>
          <v-btn v-if="transformedData === null" disabled color="white">
            <span style="font-size: 20px" class="brown-1--text font-weight-bold">L</span>
          </v-btn>
          <v-tooltip v-else bottom>
            <template v-slot:activator="{ on }">
              <v-btn @click="loadData" color="white" v-on="on">
                <span style="font-size: 20px" class="brown-1--text font-weight-bold">L</span>
              </v-btn>
            </template>
            <span>Load</span>
          </v-tooltip>
        </v-btn-toggle>
      </div>
      <div class="text-center pa-2">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn @click="testing" rounded v-on="on">
              <span style="font-size: 20px" class="brown-1--text font-weight-bold">ETL</span>
            </v-btn>
          </template>
          <span>Extract -> Transform -> Load</span>
        </v-tooltip>
      </div>
    </v-col>
  </v-row>
<!--  <v-row>-->
<!--    <v-col cols="12">-->
<!--      <v-card height="100px">-->
<!--        <v-card-text style="font-size: 20px" class="darken-1&#45;&#45;text font-weight-bold" align="center">SHOPS</v-card-text>-->
<!--        <div v-for="shop in scrapeData.shops" :key="shop.shopName">-->
<!--          <v-row>-->
<!--            <v-col cols="8" offset="2">-->

<!--            </v-col>-->
<!--          </v-row>-->
<!--        </div>-->
<!--      </v-card>-->
<!--      <div class="text-center pa-2">-->
<!--        <v-btn-toggle rounded>-->
<!--          <v-tooltip bottom>-->
<!--            <template v-slot:activator="{ on }">-->
<!--              <v-btn @click="chartSwitch = true" color="white" v-on="on">-->
<!--                <span style="font-size: 20px" class="brown-1&#45;&#45;text font-weight-bold">E</span>-->
<!--              </v-btn>-->
<!--            </template>-->
<!--            <span>Extract</span>-->
<!--          </v-tooltip>-->
<!--          <v-tooltip bottom>-->
<!--            <template v-slot:activator="{ on }">-->
<!--              <v-btn color="white" v-on="on">-->
<!--                <span style="font-size: 20px" class="brown-1&#45;&#45;text font-weight-bold">T</span>-->
<!--              </v-btn>-->
<!--            </template>-->
<!--            <span>Transform</span>-->
<!--          </v-tooltip>-->
<!--          <v-tooltip bottom>-->
<!--            <template v-slot:activator="{ on }">-->
<!--              <v-btn color="white" v-on="on">-->
<!--                <span style="font-size: 20px" class="brown-1&#45;&#45;text font-weight-bold">L</span>-->
<!--              </v-btn>-->
<!--            </template>-->
<!--            <span>Load</span>-->
<!--          </v-tooltip>-->
<!--        </v-btn-toggle>-->
<!--      </div>-->
<!--      <div class="text-center pa-2">-->
<!--        <v-tooltip bottom>-->
<!--          <template v-slot:activator="{ on }">-->
<!--            <v-btn rounded v-on="on">-->
<!--              <span style="font-size: 20px" class="brown-1&#45;&#45;text font-weight-bold">ETL</span>-->
<!--            </v-btn>-->
<!--          </template>-->
<!--          <span>Extract -> Transform -> Load</span>-->
<!--        </v-tooltip>-->
<!--      </div>-->
<!--    </v-col>-->
<!--  </v-row>-->
  <transition name="popup">
    <div v-if="transformedData !== null" align="center">
      <v-row>
        <v-col cols="6">
          <v-card class="ma-4">
            <v-card-text style="font-size: 18px" class="darken-1--text font-weight-bold" align="center">DETAILS</v-card-text>
            <v-row>
              <v-col cols="8" offset="2" style="text-align: center">
                <v-card color="#BCAAA4" class="pa-2">
                  {{transformedData.details.name}}
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4" offset="1" style="text-align: center">
                <v-card color="#BCAAA4" class="pa-2">
                  rate: {{transformedData.details.rate}}
                </v-card>
              </v-col>
              <v-col cols="4" offset="2" style="text-align: center">
                <v-card color="#BCAAA4" class="pa-2">
                  opinions: {{transformedData.details.opinions}}
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="ma-4">
            <v-card-text style="font-size: 18px" class="darken-1--text font-weight-bold" align="center">SHOPS</v-card-text>
            <v-card flat height="300px" id="scrollShops">
                  <v-card width="400px" class="my-3" color="#BCAAA4" v-for="shop in transformedData.shops"
                          :key="shop.index">
                    <v-card-text style="font-size: 15px" class="darken-1--text font-weight-bold" align="center">{{shop.shopName
                      }}</v-card-text>
                    <v-card-text style="font-size: 15px" class="darken-1--text font-weight-bold" align="center">price: {{shop.price}}</v-card-text>
                  </v-card>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="ma-4">
            <v-card-text style="font-size: 18px" class="darken-1--text font-weight-bold" align="center">COMMENTS
            </v-card-text>
            <v-card flat height="500px" id="scrollComments" align="center">
              <v-card width="700px" class="pa-3 my-3" color="#BCAAA4" v-for="comment in transformedData.comments"
                      :key="comment.index">
                <v-card flat color="#8D6E63">
                  <v-row>
                    <v-col cols="6">
                      <v-card-text style="font-size: 14px" class="white--text font-weight-bold">rating:
                        {{comment.rating.recommendation }}</v-card-text>
                    </v-col>
                    <v-col cols="6">
                      <v-card-text style="font-size: 14px" class="white--text font-weight-bold">rate: {{comment.rating.rate }}</v-card-text>
                    </v-col>
                  </v-row>
                </v-card>
                <v-card-text style="font-size: 15px" class="darken-1--text" align="center">{{comment.content }}</v-card-text>
                <v-card flat color="#8D6E63">
                  <v-row>
                    <v-col cols="6">
                      <v-card-text style="font-size: 14px" class="white--text font-weight-bold">advantages</v-card-text>
                      <v-card-text v-for="advantage in comment.advantages" :key="advantage.index" style="font-size:
                       14px"
                                   class="white--text">{{advantage}}
                      </v-card-text>
                    </v-col>
                    <v-col cols="6">
                      <v-card-text style="font-size: 14px" class="white--text font-weight-bold">disadvantages
                      </v-card-text>
                      <v-card-text v-for="disadvantage in comment.disadvantages" :key="disadvantage.index" style="font-size: 14px"
                                   class="white--text">{{disadvantage}}
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-card>
                <v-card-text style="font-size: 14px" class="white--text font-weight-bold" align="right">{{comment
                  .author}}<br> {{comment.date}}</v-card-text>
              </v-card>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </transition>
  <ExtractInfo
    :extractInfoVisibility.sync="extractInfoVisibility"
    :extractedDataDetails="extractedDataDetails"
    v-on:closeDialog="closeDialog"
  />
</v-container>
</template>

<script>
import db from '../database/firebaseInit'
import ScrapeService from '../services/ScrapeService'
import Functions from '../libs/helperFunctions'
import ExtractInfo from '../components/ExtractInfo'
export default {
  name: 'Dashboard',
  components: { ExtractInfo },
  data () {
    return {
      responseDetails: null,
      responseShops: [],
      responseComments: [],
      extractInfoVisibility: false,
      functions: new Functions(),
      scrapeService: new ScrapeService(),
      extractedData: null,
      extractedDataDetails: {
        shopsQuantity: null,
        commentsQuantity: null
      },
      transformedData: null
    }
  },
  methods: {
    testing () {
      let arr1 = [
        'auto',
        'auto'
      ]
      let arr2 = [
        'auto',
        'auto'
      ]
      let arr3 = this.arrayUnique(arr1.concat(arr2))
      console.log(arr3)
      console.log('dupa')
    },
    arrayUniqueShops (array) {
      let a = array.concat()
      for (let i = 0; i < a.length; ++i) {
        for (let j = i + 1; j < a.length; ++j) {
          if (a[i].shopName === a[j].shopName) {
            a.splice(j--, 1)
          }
        }
      }
      return a
    },
    arrayUniqueComments (array) {
      let a = array.concat()
      for (let i = 0; i < a.length; ++i) {
        for (let j = i + 1; j < a.length; ++j) {
          if (a[i].content === a[j].content) {
            a.splice(j--, 1)
          }
        }
      }
      return a
    },
    async loadData () {
      await db.firestore().collection('details').get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.responseDetails = {
              name: doc.data().name,
              rate: doc.data().rate,
              opinions: doc.data().opinions
            }
            doc.ref.delete()
          })
        })
      await db.firestore().collection('details').add({
        name: this.transformedData.details.name,
        rate: this.transformedData.details.rate,
        opinions: this.transformedData.details.opinions
      })
      await db.firestore().collection('shops').get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.responseShops.push(doc.data())
            doc.ref.delete()
          })
        })
      let filteredShops = this.arrayUniqueShops(this.transformedData.shops.concat(this.responseShops))
      filteredShops.forEach(shop => {
        db.firestore().collection('shops').add(shop)
      })
      await db.firestore().collection('comments').get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.responseComments.push(doc.data())
            doc.ref.delete()
          })
        })
      let filteredComments = this.arrayUniqueComments(this.transformedData.comments.concat(this.responseComments))
      filteredComments.forEach(comment => {
        db.firestore().collection('comments').add(comment)
      })
      this.extractedData = null
      this.transformedData = null
    },
    async extractData () {
      this.extractedData = await this.scrapeService.getPage()
    },
    closeDialog (value) {
      this.extractInfoVisibility = value
      this.extractedDataDetails.shopsQuantity = null
      this.extractedDataDetails.commentsQuantity = null
    },
    transformData () {
      let extractedData = this.extractedData
      this.transformedData = {
        details: extractedData.details.map(this.functions.transformDetails),
        shops: extractedData.shops.map(this.functions.transformShops),
        shopsQuantity: extractedData.shops.length,
        comments: extractedData.comments.map(this.functions.transformComments),
        commentsQuantity: extractedData.comments.length
      }
    }
  },
  watch: {
    'extractedData' (value) {
      if (value !== null) {
        this.extractedDataDetails.shopsQuantity = value.shops.length
        this.extractedDataDetails.commentsQuantity = value.comments.length
      }
    },
    'transformedData' (value) {
      console.log(value.details)
    }
  }
}
</script>

<style>
  .fill-height {
    height: 40%;
  }
   .popup-enter,
   .popup-leave-to{
     transform: rotateY(50deg);
   }
  .popup-enter-to,
  .popup-leave {
    transform: rotateY(0deg);
  }
  .popup-enter-active,
  .popup-leave-active {
    transition: transform 400ms;
  }
  #scrollShops {
    overflow-y: auto;
  }
  #scrollComments {
    overflow-y: auto;
  }
</style>

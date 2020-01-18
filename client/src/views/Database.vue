<template>
  <v-container>
    <transition name="popup">
      <div>
        <div v-if="responseDetails !== null || responseShops !== null || responseComments !== null" align="center">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn color="red" @click="clearDatabase" rounded v-on="on">
                <span style="font-size: 20px" class="white--text font-weight-bold">Clear</span>
              </v-btn>
            </template>
            <span>Clear Database</span>
          </v-tooltip>
          <v-row>
            <v-col cols="6">
              <v-card class="ma-4 pa-3" v-if="responseDetails === null && circularVisibility === true">
                <v-progress-circular
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </v-card>
              <v-card class="ma-4" v-else-if="responseDetails === null">
                <v-card-text style="font-size: 18px" class="darken-1--text font-weight-bold" align="center">DATABASE IS EMPTY
                </v-card-text>
              </v-card>
              <v-card class="ma-4 pa-3" v-if="responseDetails !== null">
                <v-card-text style="font-size: 18px" class="darken-1--text font-weight-bold" align="center">DETAILS</v-card-text>
                <div v-for="details in responseDetails" :key="details.index">
                  <v-row>
                    <v-col cols="8">
                      <v-card color="#BCAAA4" class="pa-2">
                        <v-card-text style="font-size: 15px" class="darken-1--text font-weight-bold" align="center">{{details.name}}</v-card-text>
                        <v-row>
                          <v-col cols="6">
                            <span style="font-size: 17px" class="brown-1--text font-weight-light">opinions: {{details
                              .opinions}}</span>
                          </v-col>
                          <v-col cols="6">
                            <span style="font-size: 17px" class="brown-1--text font-weight-light">rate: {{details.rate}}</span>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-col>
                    <v-col cols="4" align="center">
                      <div class="my-3 pa-1">
                      </div>
                      <div class="my-3">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <v-btn @click="deleteDetails(details.id)" class="mx-2" fab small color="red" v-on="on">
                              <v-icon style="color: white">mdi-delete</v-icon>
                            </v-btn>
                          </template>
                          <span>Delete details</span>
                        </v-tooltip>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn fab small color="blue" v-on="on">
                    <JsonCSV
                      :data   = "transformedDetails"
                      name    = "details.csv">
                      <v-icon style="color: white">mdi-database-export</v-icon>
                    </JsonCSV>
                  </v-btn>
                </template>
                <span>Export details</span>
              </v-tooltip>
            </v-col>
            <v-col cols="6">
              <v-card class="ma-4 pa-3" v-if="responseShops === null && circularVisibility === true">
                <v-progress-circular
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </v-card>
              <v-card class="ma-4" v-else-if="responseShops === null">
                <v-card-text style="font-size: 18px" class="darken-1--text font-weight-bold" align="center">DATABASE IS EMPTY
                </v-card-text>
              </v-card>
              <v-card class="ma-4" v-if="responseShops !== null">
                <v-card-text style="font-size: 18px" class="darken-1--text font-weight-bold" align="center">SHOPS</v-card-text>
                <v-card flat height="300px" id="scrollShops">
                  <div v-for="shop in responseShops" :key="shop.index">
                    <v-card width="400px" class="my-3" color="#BCAAA4">
                      <v-card-text style="font-size: 15px" class="darken-1--text font-weight-bold" align="center">{{shop.shopName
                        }}</v-card-text>
                      <v-card-text style="font-size: 15px" class="darken-1--text font-weight-bold" align="center">price: {{shop.price+' zł'}}</v-card-text>
                    </v-card>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-btn @click="deleteShop(shop.id)" class="mx-2" fab small color="red" v-on="on">
                          <v-icon style="color: white">mdi-delete</v-icon>
                        </v-btn>
                      </template>
                      <span>Delete shop</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-btn fab small color="blue" v-on="on">
                          <JsonCSV
                            :data   = "[functions.transformSingleShop(shop)]"
                            name    = "shop.csv">
                            <v-icon style="color: white">mdi-database-export</v-icon>
                          </JsonCSV>
                        </v-btn>
                      </template>
                      <span>Export shop</span>
                    </v-tooltip>
                  </div>
                </v-card>
              </v-card>
              <v-btn-toggle rounded>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn @click="sortShops(false)" fab small color="green" v-on="on">
                      <v-icon style="color: white">mdi-sort-ascending</v-icon>
                    </v-btn>
                  </template>
                  <span>Sort by price ascending</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn fab small color="blue" v-on="on">
                      <JsonCSV
                        :data   = "transformedShops"
                        name    = "shops.csv">
                        <v-icon style="color: white">mdi-database-export</v-icon>
                      </JsonCSV>
                    </v-btn>
                  </template>
                  <span>Export shops</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn @click="sortShops(true)" fab small color="green" v-on="on">
                      <v-icon style="color: white">mdi-sort-descending</v-icon>
                    </v-btn>
                  </template>
                  <span>Sort by price descending</span>
                </v-tooltip>
              </v-btn-toggle>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-card class="ma-4 pa-3" v-if="responseComments === null && circularVisibility === true">
                <v-progress-circular
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </v-card>
              <v-card class="ma-4" v-else-if="responseComments === null">
                <v-card-text style="font-size: 18px" class="darken-1--text font-weight-bold" align="center">DATABASE IS EMPTY
                </v-card-text>
              </v-card>
              <v-card class="ma-4" v-if="responseComments !== null">
                <v-card-text style="font-size: 18px" class="darken-1--text font-weight-bold" align="center">COMMENTS
                </v-card-text>
                <v-card flat height="500px" id="scrollComments" align="center">
                  <div v-for="comment in responseComments" :key="comment.index">
                    <v-card width="700px" class="pa-3 my-3" color="#BCAAA4">
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
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-btn @click="deleteComment(comment.id)" class="mx-2" fab small color="red" v-on="on">
                          <v-icon style="color: white">mdi-delete</v-icon>
                        </v-btn>
                      </template>
                      <span>Delete comment</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-btn fab small color="blue" v-on="on">
                          <JsonCSV
                            :data   = "[functions.transformSingleComment(comment)]"
                            name    = "comment.csv">
                            <v-icon style="color: white">mdi-database-export</v-icon>
                          </JsonCSV>
                        </v-btn>
                      </template>
                      <span>Export comment</span>
                    </v-tooltip>
                  </div>
                </v-card>
              </v-card>
              <v-btn-toggle rounded>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn @click="sortComments(false)" fab small color="green" v-on="on">
                      <v-icon style="color: white">mdi-sort-ascending</v-icon>
                    </v-btn>
                  </template>
                  <span>Sort by rate ascending</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                  <v-btn fab small color="blue" v-on="on">
                    <JsonCSV
                      :data   = "transformedComments"
                      name    = "comments.csv">
                            <v-icon style="color: white">mdi-database-export</v-icon>
                    </JsonCSV>
                    </v-btn>
                  </template>
                  <span>Export comments</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn @click="sortComments(true)" fab small color="green" v-on="on">
                      <v-icon style="color: white">mdi-sort-descending</v-icon>
                    </v-btn>
                  </template>
                  <span>Sort by rate descending</span>
                </v-tooltip>
              </v-btn-toggle>
            </v-col>
          </v-row>
        </div>
        <div v-else-if="circularVisibility === true">
          <v-card class="ma-4 pa-3" align="center">
            <v-progress-circular
              indeterminate
              color="primary"
            ></v-progress-circular>
          </v-card>
        </div>
        <div v-else-if="responseDetails === null && responseShops === null && responseComments === null">
          <v-card class="ma-4 pa-3">
            <v-card-text style="font-size: 18px" class="darken-1--text font-weight-bold" align="center">DATABASE IS EMPTY
            </v-card-text>
          </v-card>
        </div>
      </div>
    </transition>
  </v-container>
</template>

<script>
import db from '../database/firebaseInit'
import JsonCSV from 'vue-json-csv'
import Functions from '../libs/helperFunctions'
export default {
  name: 'Database',
  components: {
    JsonCSV
  },
  data () {
    return {
      responseDetails: null,
      responseShops: null,
      responseComments: null,
      transformedDetails: [],
      transformedShops: [],
      transformedComments: [],
      functions: new Functions(),
      circularVisibility: false
    }
  },
  methods: {
    async getData () {
      this.circularVisibility = true
      setTimeout(function () { this.circularVisibility = false }
        .bind(this),
      6000)
      let detailsSnapshot = await db.firestore().collection('details').get()
      this.responseDetails = detailsSnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id
        }
      })
      let shopsSnapshot = await db.firestore().collection('shops').get()
      this.responseShops = shopsSnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id
        }
      })
      let commentsSnapshot = await db.firestore().collection('comments').get()
      this.responseComments = commentsSnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id
        }
      })
      if (this.responseDetails.length === 0) {
        this.responseDetails = null
      }
      if (this.responseShops.length === 0) {
        this.responseShops = null
      }
      if (this.responseComments.length === 0) {
        this.responseComments = null
      }
      this.transformedDetails = this.responseDetails.map(this.functions.transformDetails)
      this.transformedShops = this.responseShops.map(this.functions.transformShopsToExport)
      this.transformedComments = this.responseComments.map(this.functions.transformCommentsToExport)
    },
    async deleteDetails (id) {
      await db.firestore().collection('details').get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            if (doc.id === id) {
              doc.ref.delete()
            }
          })
        })
      this.getData()
    },
    async deleteShop (id) {
      await db.firestore().collection('shops').get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            if (doc.id === id) {
              doc.ref.delete()
            }
          })
        })
      this.getData()
    },
    async deleteComment (id) {
      await db.firestore().collection('comments').get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            if (doc.id === id) {
              doc.ref.delete()
            }
          })
        })
      this.getData()
    },
    async sortShops (descending) {
      this.responseShops = []
      let shopsSnapshot = await db.firestore().collection('shops').get()
      this.responseShops = shopsSnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id
        }
      })
      this.responseShops.sort(function (a, b) {
        return a.price - b.price
      })
      if (descending) {
        this.responseShops.reverse()
      }
      this.transformedShops = this.responseShops.map(this.functions.transformShopsToExport)
    },
    async sortComments (descending) {
      this.responseComments = []
      let shopsSnapshot = await db.firestore().collection('comments').get()
      this.responseComments = shopsSnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id
        }
      })
      this.responseComments.sort(function (a, b) {
        return a.rating.rate.slice(0, 1) - b.rating.rate.slice(0, 1)
      })
      if (descending) {
        this.responseComments.reverse()
      }
      this.transformedComments = this.responseComments.map(this.functions.transformCommentsToExport)
    },
    async clearDatabase () {
      await db.firestore().collection('details').get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete()
          })
        })
      await db.firestore().collection('shops').get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete()
          })
        })
      await db.firestore().collection('comments').get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete()
          })
        })
      this.responseDetails = null
      this.responseShops = null
      this.responseComments = null
      this.getData()
    }
  },
  mounted () {
    this.getData()
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

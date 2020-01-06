<template>
  <v-container>
    <transition name="popup">
      <div v-if="responseDetails.length !== 0 || responseShops.length !== 0 || responseComments.length !== 0" align="center">
        <v-row>
          <v-col cols="6">
            <v-card class="ma-4" v-if="responseDetails.length === 0">
              <v-card-text style="font-size: 18px" class="darken-1--text font-weight-bold" align="center">DATABASE IS EMPTY
              </v-card-text>
            </v-card>
            <v-card class="ma-4" v-else>
              <v-card-text style="font-size: 18px" class="darken-1--text font-weight-bold" align="center">DETAILS</v-card-text>
              <div v-for="details in responseDetails" :key="details.index">
                <v-row>
                  <v-col cols="8" offset="2" style="text-align: center">
                    <v-card color="#BCAAA4" class="pa-2">
                      {{details.name}}
                    </v-card>
                  </v-col>
                  <v-col cols="2">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-btn @click="deleteDetails(details.id)" class="mx-2" fab small color="red" v-on="on">
                          <v-icon style="color: white">mdi-delete</v-icon>
                        </v-btn>
                      </template>
                      <span>Delete details</span>
                    </v-tooltip>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4" offset="1" style="text-align: center">
                    <v-card color="#BCAAA4" class="pa-2">
                      rate: {{details.rate}}
                    </v-card>
                  </v-col>
                  <v-col cols="4" offset="2" style="text-align: center">
                    <v-card color="#BCAAA4" class="pa-2">
                      opinions: {{details.opinions}}
                    </v-card>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card class="ma-4" v-if="responseShops.length === 0">
              <v-card-text style="font-size: 18px" class="darken-1--text font-weight-bold" align="center">DATABASE IS EMPTY
              </v-card-text>
            </v-card>
            <v-card class="ma-4" v-else>
              <v-card-text style="font-size: 18px" class="darken-1--text font-weight-bold" align="center">SHOPS</v-card-text>
              <v-card flat height="300px" id="scrollShops">
                <div v-for="shop in responseShops" :key="shop.index">
                  <v-card width="400px" class="my-3" color="#BCAAA4">
                    <v-card-text style="font-size: 15px" class="darken-1--text font-weight-bold" align="center">{{shop.shopName
                      }}</v-card-text>
                    <v-card-text style="font-size: 15px" class="darken-1--text font-weight-bold" align="center">price: {{shop.price}}</v-card-text>
                  </v-card>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn @click="deleteShop(shop.id)" class="mx-2" fab small color="red" v-on="on">
                        <v-icon style="color: white">mdi-delete</v-icon>
                      </v-btn>
                    </template>
                    <span>Delete shop</span>
                  </v-tooltip>
                </div>
              </v-card>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card class="ma-4" v-if="responseComments.length === 0">
              <v-card-text style="font-size: 18px" class="darken-1--text font-weight-bold" align="center">DATABASE IS EMPTY
              </v-card-text>
            </v-card>
            <v-card class="ma-4" v-else>
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
                </div>
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </transition>
  </v-container>
</template>

<script>
import db from '../database/firebaseInit'
export default {
  name: 'Database',
  data () {
    return {
      responseDetails: [],
      responseShops: [],
      responseComments: []
    }
  },
  methods: {
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
    async getData () {
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
    }
  },
  watch: {
    'responseDetails' (value) {
      console.log(value)
    },
    'responseShops' (value) {
      console.log(value)
    },
    'responseComments' (value) {
      console.log(value)
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

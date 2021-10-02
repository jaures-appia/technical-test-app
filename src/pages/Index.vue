<template>
  <q-page padding class="">
    <div class="row q-mt-md items-center justify-center">
      <div class="col-md-4 col-sm-6 col-10">
        <q-card class="myCard shadow-5">
          <q-toolbar class="bg-primary text-white shadow-2">
            <q-toolbar-title>Results</q-toolbar-title>
          </q-toolbar>

          <q-list bordered>
            <div v-for="(item, i) in users" :key="i">
              <q-item v-if="i<6" class="q-my-sm" v-ripple>
                <q-item-section side>
                  {{ i+1 }}
                </q-item-section>

                <q-item-section avatar>
                  <q-avatar size="4em" color="primary" text-color="white">
                    <img :src="item.image">
                  </q-avatar>
                </q-item-section>

                <q-item-section class="text-center text-capitalize text-subtitle1">
                  <q-item-label>{{ item.username }} <q-icon v-if="i==0" size="2em" color="amber-4" name="star"/> </q-item-label>
                  
                </q-item-section>

                <q-item-section class="text-bold text-black text-subtitle1" side>
                  <q-btn flat round class="text-bold text-black text-subtitle1" color="black" :label="item.score"></q-btn>
                </q-item-section>
              </q-item>
            </div>
            
          </q-list>
        </q-card> 
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'PageIndex',
  data(){
    return{

    }
  },
  beforeMount(){
    this.$store.dispatch("myApp/getUsers")
  },
  computed:{
    ...mapGetters("myApp", ['users'])
  }
}
</script>

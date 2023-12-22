<template>
    <!-- <Navbar></Navbar>
    <Introduction></Introduction>
    <Slider></Slider> -->
    <!-- <div class="container"> -->
        <Form></Form>
        <!-- <OurServices></OurServices>
        <ChooseUs></ChooseUs> -->
        <!-- <CarouselSection></CarouselSection>
        <h1>{{message}}</h1>
        <button class="btn btn-primary" @click="changeMessage()">Trigger me</button>
        <div v-if="loadingMessage == true" class="container">
            <h2>Loading</h2>
        </div>
        <div class="row">
            <div class="col-12">
                <h5 class="font-weight-bold" id="text-set"></h5>
            </div>
        </div> -->
    <!-- </div> -->
    <!-- <JobList></JobList>
    <div class="container">
        <TheySay></TheySay>
        <CarouselSection></CarouselSection>
    </div> -->
</template>

<script>
import Form from './LandingPageSections/Form.vue';

export default {
    name: 'LandingPageIndex',
    components:{
        Form,
    },
    // data() {
    //     return {
    //         message : 'ajar kriminal',
    //         loadingMessage: false,
    //     }
    // },
    // async mounted() {
    //     await this.setTextInclude();
    // },
    // methods: {
    //     async changeMessage() {
    //         this.loadingMessage = true;
    //         if (this.message == 'ajar kriminal') {
    //             setTimeout(() => {
    //             this.loadingMessage = false;
    //                 this.message = 'Aul hehe';
    //             }, 5*1000);
    //         }
    //     },
    //     // async setTextInclude() {
    //     //     var text = document.getElementById('#text-set');
    //     //     console.log(text);
    //     //     text.text('okokokoko');
    //     // }
    // }
}
</script>

<style>

</style>
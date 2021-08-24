const app = Vue.createApp({
    data(){
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },

    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        }
    }
});
app.mount('#app');
/*
    Giving the user the ability to toggle wheter to show or not the book information cliking on a button
*/
const app = Vue.createApp({
    data(){
        return {
            url: 'https://www.google.com',
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'partick rothfuss', img: 'assets/1.jpg', isFav: true},
                {title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false},
                {title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true}
            ]
        }
    },

    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        },

        toggleIsfav(item){
            item.isFav = !item.isFav 
        }
    }
});
app.mount('#app');

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
        },
        handleEvent(event, word){
            console.log(event, event.type);
            
            if(word){
                console.log (word);
            }
        }
    }
});
app.mount('#app');

const app = Vue.createApp({
    data(){
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0
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
        },
        handleMousemove(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
            console.log(this.x, this.y); // prints to the browsers console 
        }
    }
});
app.mount('#app');

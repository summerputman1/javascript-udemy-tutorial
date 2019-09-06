// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        this.blogs 
    // console.log(this);
    console.log('this user has written the follow blogs:');
    this.blogs.forEach(blog => {
        console.log(blog);
    })
    }
};

user.logBlogs();
console.log(this);
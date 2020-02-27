let articles = [
    { id: 1, title: 'The first post', slug: 'first-post', excerpt: 'The first post excerpt', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore temporibus officia voluptatum reiciendis, illo ex iste molestias, doloremque! Laboriosam nihil sit, tempora nam porro placeat reprehenderit non exercitationem ipsa magnam!'  },
	{ id: 2, title: 'The second post', slug: 'second-post', excerpt: 'The second post excerpt', content: 'Consectetur adipisicing elit. Inventore temporibus officia voluptatum reiciendis, illo ex iste molestias, doloremque! Laboriosam nihil sit, tempora nam porro placeat reprehenderit non exercitationem ipsa magnam!'  },

];
let Home = {
  template: `<div>
    <h3>Home</h3>
    <div v-for="article in articles">
		<h3><router-link :to="/articles/ + article.slug">{{ article.title }}</router-link></h3>
		<p>{{ article.excerpt }}</p>
	</div>
    </div>
    `,

  data() {
    return {
      articles: []
    };
  },

  mounted() {
    this.articles = articles;
  }
};

let Contact = {
  template: `<div class= "text-center mt-4">
    <p>Contact me on my Github Page for more content</h3>
    <p ><a class="text-success" href="https://github.com/Charmant101/">Github</a><img class="ml-3 giticon"src="download.png"></p>
   
   
    </div>`,

 
};

let Article = {
    template:`
    <div>
    <h2>{{article.title}}</h2>
    <p>{{article.content}}</p>
    </div>
    
    `,

    data() {
        return {
           article: {} 
        }
    },

    mounted() {
        this.article = this.findBySlug(this.$route.params.slug);
    },
   
        methods: {
            findBySlug(slug) {
                for (let i = 0; i < articles.length; i++)
                {
                    if (slug === articles[i].slug) return articles[i];
                }
    
                return null;
            }
        }


   
}

let routes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/articles/:slug", component: Article }
];

let router = new VueRouter({ routes });

let app = new Vue({
  router
}).$mount("#app");

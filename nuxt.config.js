export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: 'ProVitamin' || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap' },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        '~/assets/styles/main.css'
    ],


    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/directives.js'
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        ['@nuxtjs/fontawesome',
            {
                suffix: true,
                icons: {
                    // list the icons you want to add, not listed icons will be tree-shaked
                    solid: ['faSearch', 'faUser', 'faShoppingBasket', 'faChevronDown', 'faChevronUp'],
                    brands: ['faFacebook', 'faInstagram', 'faLinkedin']
                }
            }],
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios'
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {},
    /*
    ** Build configuration
    */
    build: {
        analyze: true,
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        },
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}

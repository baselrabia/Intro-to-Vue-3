const app = Vue.createApp({
  data() {
    return {
      cart:0,
      product: "Socks",
      description: "A warm fuzzy pair of socks.",
      image: "./assets/socks_blue.jpg",
      url: "https://www.vuemastery.com/",
      inventory: 9,
      onSale: true,
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      // solution
      sizes: ["S", "M", "L", "XL"],
      // solution
      variants: [
        { id: 2234, color: "green", image: "./assets/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/socks_blue.jpg" },
      ],
    };
  },
 methods: {
        addToCart() {
            this.cart += 1
        },
        // solution
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        },
        // solution
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})

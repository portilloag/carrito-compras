const app = Vue.createApp({
    data() {
        return {
            productos: [],
            carrito: [],
            categoria: "",
            activo: false,
            mostrarToast: false,
            productoAgregado: ""
        };
    },

    mounted() {
        this.fetchApi();
    },

    computed: {
        filter() {
            if (this.categoria === "") {
                return this.productos;
            }

            return this.productos.filter(
                producto => producto.category === this.categoria
            )
        },
        cantidadTotalProductos() {
            return this.carrito.reduce((total, item) => total + item.cantidad, 0);
        },
        totalCarrito() {
            return this.carrito.reduce((total, item) => total + (item.price * item.cantidad), 0);
        }
    },
    methods: {
        async fetchApi() {
            const res = await fetch("./productos.json");
            const data = await res.json();
            this.productos = data.productos;
        },

        addItem(producto) {
            let indice = null
            this.carrito.forEach((productos, index) => {
                if (productos.id == producto.id) {
                    indice = index
                    return
                }
            })
            if (indice != null) {
                this.carrito[indice].cantidad++
            } else {
                producto.cantidad = 1
                this.carrito.push(producto)
            }
            this.productoAgregado = producto.name;
            this.mostrarToast = true;


            setTimeout(() => {
                this.mostrarToast = false;
            }, 6000);
        },


        delItem(indice) {
            if (this.carrito[indice].cantidad > 1) {
                this.carrito[indice].cantidad--;
            } else {
                this.carrito.splice(indice, 1);
            }
        },

        delPro(indice){
            this.carrito.splice(indice, 1);
        },

        delCar() {
            this.carrito = [];
        }

    }
});

app.component("listaproductos", Listaproductos);
app.component("card", Card);
app.component("carrito", Carrito);
app.component("totalcantidad", TotalCantidad);
app.component("totalprecio", TotalPrecio);

app.mount("#carrito");
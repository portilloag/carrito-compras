const app = Vue.createApp({
    data() {
        return {
            productos: [],
            carrito: [],
            buscar: "",
            categoria: "",
            activo: false,
            mostrarToast: false,
            productoAgregado: ""
        };
    },
    computed: {
        filter() {
            if (this.categoria === ""){
                return this.productos;
            }
                return this.productos.filter((producto) =>
                    producto.category === this.categoria
            );
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
            const res = await fetch("./products.json");
            const data = await res.json();
            this.productos = data.productos;
        },

        addCar(productos) {
            const itemExistente = this.carrito.find(
                (item) => item.id === productos.id,
            );
            if (itemExistente) {
                itemExistente.cantidad++;
            } else {
                this.carrito.push({
                    ...productos,
                    cantidad: 1,
                });
            }

            this.productoAgregado = productos.name;
            this.mostrarToast = true;
            setTimeout(() => {
                this.mostrarToast = false;
            }, 8000);
        },

        delPro(indice){
            if(this.carrito[indice].cantidad > 1){
                this.carrito[indice].cantidad--;
            }else {
                this.carrito.splice(indice, 1);
            }
        },

        delCar(){
            this.carrito=[];
        }

    },
    mounted(){
        this.fetchApi();
    }
});

app.mount("#carrito");
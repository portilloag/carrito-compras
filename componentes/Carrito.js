const Carrito = {
    props: {
        carrito: Array,
        cantidadp: Number,
        totalc: Number,
    },
    methods:{
        delItem(indice){
            this.$emit("quitar", indice)
        },
        delCar(){
            this.$emit("vaciar")
        }
    },
    template: 
            `
            <div>
                <div class="lista-carrito">
                    <div class="modal-body">
                        <ul>
                            <li v-for="(producto, indice) in carrito" class="d-flex justify-content-between align-items-center">
                            <span class="fs-3">{{ producto.name }} x {{producto.cantidad}}</span>
                            <span>= $ {{ producto.price * producto.cantidad }}</span>
                            <button @click="delItem(indice)" class="btn btn-danger">Quitar</button>
                            </li>
                        </ul>
                    </div>
                    <totalcantidad :cantidad="cantidadp"></totalcantidad>
                    <totalprecio :total="totalc"></totalprecio>
                </div>                    
                <button @click="delCar">Vaciar carrito</button>
            </div>
            `   
    
}
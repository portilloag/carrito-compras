const Carrito = {
    props: {
        carrito: Array,
        cantidadp: Number,
        totalc: Number,
    },
    methods: {
        delItem(indice) {
            this.$emit("quitar", indice);
        },
        delCar() {
            this.$emit("vaciar");
        },
        addItem(producto) {
            
            this.$parent.addItem(producto);
        },
        delPro(indice){
            this.$emit("eliminar", indice);
        }
    },
    template: `
        <div class="flex flex-col h-full">
            
            <div class="flex justify-between items-center pb-4 border-b border-gray-100">
                <h2 class="text-xs font-bold text-orange-500 tracking-wider uppercase">MI CARRITO</h2>
                <button @click="$parent.activo = false" class="text-gray-400 hover:text-gray-600 text-lg">✕</button>
            </div>

           
           
            <div class="flex-grow overflow-y-auto py-2">
                <p v-if="carrito.length === 0" class="text-center text-gray-400 text-sm py-8">El carrito está vacío</p>
                <ul v-else class="divide-y divide-gray-100">
                    <li v-for="(producto, indice) in carrito" :key="indice" class="py-4 flex gap-3 items-center">
                        <img 
                            :src="producto.img" 
                            :alt="producto.name" 
                            class="w-16 h-16 object-contain rounded bg-gray-50 p-1 flex-shrink-0"
                        />
                        <div class="flex-grow">
                            <h3 class="text-xs font-semibold text-gray-900 mb-2 leading-snug">{{ producto.name }}</h3>
                            
                            <div class="flex items-center justify-between gap-2 mb-2">
                                
                                <div class="flex items-center border border-gray-300 rounded overflow-hidden">
                                    <button 
                                        @click="delItem(indice)" 
                                        class="px-2 py-0.5 bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-semibold"
                                    >
                                        -
                                    </button>
                                    <span class="px-3 py-0.5 text-xs font-semibold text-gray-800 bg-white border-x border-gray-300">
                                        {{ producto.cantidad }}
                                    </span>
                                    <button 
                                        @click="addItem(producto)" 
                                        class="px-2 py-0.5 bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-semibold"
                                    >
                                        +
                                    </button>
                                </div>

                                <strong class="text-sm font-bold text-gray-900">
                                    $ {{ (producto.price * producto.cantidad).toLocaleString() }}
                                </strong>
                            </div>

                            <div class="flex items-center gap-4 text-xs">
                                <button @click="delPro" class="text-red-500 hover:text-red-700 font-medium flex items-center gap-1">
                                    <span>🗑</span> Eliminar
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        
            <div class="pt-4 border-t border-gray-200 mt-auto">
                <div class="flex justify-between font-bold text-gray-900 text-base mb-4">
                    <span>Total:</span>
                    <span>$ {{ totalc.toLocaleString() }}</span>
                </div>

                <div class="flex gap-2">
                    <button @click="delCar" class="w-1/3 bg-gray-100 text-gray-700 text-xs font-medium py-3 rounded-lg hover:bg-gray-200 transition">
                        Vaciar
                    </button>
                    <button class="w-2/3 bg-orange-600 text-white text-xs font-bold py-3 rounded-lg hover:bg-orange-700 transition">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    `
};
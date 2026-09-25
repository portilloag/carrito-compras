const Listaproductos = {
    props: {
        item: Array
    },
    methods: {
        addItem(producto) {
            this.$emit("add", producto);
        }
    },
    template: `
        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 list-none p-0">
          <li
            v-for="producto in item"
            class="backdrop-blur-md border border-white/20 rounded-2xl  shadow-xl rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full"
          >
            <img
              :src="producto.img"
              :alt="producto.alt"
              class="w-full h-80 object-cover"
            />
            <div class="p-4 flex flex-col flex-grow">
             
              <div class="space-y-1.5">
                <h3 class="text-base font-bold text-gray-900 leading-snug">{{ producto.name }}</h3>
                <p class="text-green-600 font-bold text-lg">$ {{ producto.price }}</p>
                <p class="text-gray-500 text-xs leading-relaxed line-clamp-3">{{ producto.detail }}</p>
              </div>

         
              <div class="mt-auto pt-4">
                <button 
                  @click="addItem(producto)" 
                  class="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2.5 px-4 rounded-lg transition text-sm shadow-sm active:scale-95"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </li>
        </ul>
    `
};
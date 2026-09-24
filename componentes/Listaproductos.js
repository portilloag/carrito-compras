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
            :key="producto.id"
            class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full"
          >
            <img
              :src="producto.img"
              :alt="producto.alt"
              class="w-full h-48 object-cover"
            />
            <div class="p-4 flex flex-col flex-grow">
              <!-- Textos pegados arriba -->
              <div class="space-y-1.5">
                <h3 class="text-base font-bold text-gray-900 leading-snug">{{ producto.name }}</h3>
                <p class="text-green-600 font-bold text-lg">$ {{ producto.price }}</p>
                <p class="text-gray-500 text-xs leading-relaxed line-clamp-3">{{ producto.detail }}</p>
              </div>

              <!-- Botón alineado abajo -->
              <div class="mt-auto pt-4">
                <button 
                  @click="addItem(producto)" 
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition text-sm shadow-sm active:scale-95"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </li>
        </ul>
    `
};
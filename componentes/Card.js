const Card = {
    props: ["productoCard"],
    methods: {
        addCar(productos) {
            this.$emit("add", productos)
        }
    },
   template: `
  <li class=" card-hueso  rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full">
    
    <img
      :src="producto.img"
      :alt="producto.alt"
      class="w-full h-48 object-cover"
    />

   
    <div class="p-4 flex flex-col flex-grow">
     
      <div class="space-y-1.5 mb-4">
        <h3 class="text-base font-bold text-gray-900 leading-snug">
          {{ producto.name }}
        </h3>
        <p class="text-green-600 font-bold text-lg">
          \${{ producto.price.toLocaleString() }}
        </p>
        <p class="text-gray-500 text-xs leading-relaxed line-clamp-3">
          {{ producto.detail }}
        </p>
      </div>

      
      <div class="mt-auto">
        <button
          @click="addCar(producto)"
          class="w-full  font-medium py-2 px-4 rounded-lg transition text-sm shadow-sm active:scale-95"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  </li>
`
}
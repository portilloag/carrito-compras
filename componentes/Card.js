const Card = {
  props: ["producto"],
  methods: {
    addCar(prod) {
      this.$emit("add", prod);
    }
  },
  template: `
    <li class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl overflow-hidden flex flex-col h-full hover:border-white/40 hover:bg-white/20 transition-all duration-300">
      
      <img
        :src="producto.img"
        :alt="producto.alt"
        class="w-full h-52 object-contain rounded-xl mb-3 bg-black/20 p-2"
      />

      <div class="flex flex-col flex-grow">
        <div class="space-y-1.5 mb-4">
          <h3 class="text-base font-bold text-white leading-snug">
            {{ producto.name }}
          </h3>
          <p class="text-emerald-400 font-bold text-lg">
            \${{ producto.price.toLocaleString() }}
          </p>
          <p class="text-slate-300 text-xs leading-relaxed line-clamp-3">
            {{ producto.detail }}
          </p>
        </div>

        <div class="mt-auto">
          <button
            @click="addCar(producto)"
            class="w-full bg-orange-600 hover:bg-orange-500 text-white font-medium py-2 px-4 rounded-xl transition text-sm shadow-lg shadow-orange-600/30 active:scale-95"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </li>
  `
};
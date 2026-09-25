const Toast = {
    props: {
        mostrart: Boolean,
        productoa: String
    },
    methods: {
        cerrarToast() {
            this.$emit("cerrar");
        }
    },
    template: `
    <transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="mostrart"
        class="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-900 px-4 py-3 rounded-xl shadow-lg max-w-sm"
        role="alert"
      >
        <div class="w-7 h-7 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-xs shrink-0">
          ✓
        </div>
        <div class="text-xs font-medium pr-2">
          <span class="font-bold text-emerald-950">{{ productoa }}</span> se añadió al carrito.
        </div>
        <button
          @click="cerrarToast"
          type="button"
          class="text-emerald-500 hover:text-emerald-700 p-1 rounded-lg transition ml-auto"
        >
          ✕
        </button>
      </div>
    </transition>
    `
}
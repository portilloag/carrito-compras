const Card = {
    props: ["productoCard"],
    methods: {
        addCar(productos) {
            this.$emit("add", productos)
        }
    },
    template: `     <div>
                        <img
                            :src="productoCard.img"
                            :alt="productoCard.alt"
                            class="card-img-top"
                        />
                        <div
                            class="card-body d-flex flex-column justify-content-between p-2"
                        >
                            <h3 class="card-title">{{ productoCard.name }}</h3>
                            <p class="text-success fw-bold mb-1">$ {{ productoCard.price }}</p>
                            <p class="card-text text-muted small">{{ productoCard.detail }}</p>
                            <div>
                            <button @click="addCar(productoCard)" class="btn btn-primary">
                                Agregar al carrito
                            </button>
                            </div>
                        </div>
                    </div>
                `
}
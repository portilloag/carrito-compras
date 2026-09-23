const Listaproductos = {
    props: {
        item: Array
    },
    methods:{
        addItem(producto){
            this.$emit("add", producto)
        }
    },
    template: `
                <div>
                    <ul class="row list-unstyled g-6">
                        <li
                        v-for="producto in item"
                        :key="producto.id"
                        class="card col-12 col-sm-6 col-md-4 col-lg-3 g-7"
                        >
                        <card :productoCard="producto" @add="addItem"></card>
                        </li>
                    </ul>
                </div>
                `
}
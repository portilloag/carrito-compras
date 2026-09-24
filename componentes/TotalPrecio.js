const TotalPrecio = {
    props: ["total"],
    template: `
        <div>
            <span class="text-xl font-bold text-green-600">Total a pagar: $ {{ total }}</span>
        </div>`   
}
const TotalPrecio = {
    props: ["total"],
    template: `
        <div>
            <span class="fs-4 fw-bold text-success">Total a pagar: $ {{ total }}</span>
        </div>`   
}
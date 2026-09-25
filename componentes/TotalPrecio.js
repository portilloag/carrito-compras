const TotalPrecio = {
    props: ["total"],
    template: `
        <div class="flex justify-between font-bold text-gray-900 text-base mb-4">
            <span>Total:</span>
            <span>$ {{ total }}</span>
        </div>`   
}
document.addEventListener("DOMContentLoaded", () => {
    // Manejador del formulario de facturación
    const facturaForm = document.getElementById("factura-form");
    const facturasLista = document.getElementById("facturas-lista");

    facturaForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Captura de datos del formulario
        const cliente = document.getElementById("cliente").value;
        const monto = parseFloat(document.getElementById("monto").value).toFixed(2);
        const detalle = document.getElementById("detalle").value;

        // Crear un nuevo div para la factura generada
        const factura = document.createElement("div");
        factura.innerHTML = `<strong>Cliente:</strong> ${cliente}<br><strong>Monto:</strong> S/ ${monto}<br><strong>Detalle:</strong> ${detalle}`;
        facturasLista.appendChild(factura);

        // Limpiar formulario
        facturaForm.reset();
    });

    // Generar reporte financiero con Chart.js
    const ctx = document.getElementById("grafico-ingresos-egresos").getContext("2d");

    const datosEjemplo = {
        labels: ["Enero", "Febrero", "Marzo", "Abril"],
        datasets: [
            {
                label: "Ingresos (S/)",
                data: [5000, 7000, 8000, 6000],
                borderColor: "green",
                borderWidth: 2,
                fill: false,
            },
            {
                label: "Egresos (S/)",
                data: [2000, 3000, 4000, 2500],
                borderColor: "red",
                borderWidth: 2,
                fill: false,
            },
        ],
    };

    new Chart(ctx, {
        type: "line",
        data: datosEjemplo,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
            },
        },
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const facturaForm = document.getElementById("factura-form");
    const facturasLista = document.getElementById("facturas-lista");

    // Función para generar un comprobante
    facturaForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Obtener valores del formulario
        const cliente = document.getElementById("cliente").value;
        const monto = parseFloat(document.getElementById("monto").value).toFixed(2);
        const detalle = document.getElementById("detalle").value;

        // Crear el comprobante
        const factura = {
            id: Date.now(),
            cliente,
            monto,
            detalle,
            fecha: new Date().toLocaleString("es-PE"),
        };

        // Mostrar factura en la interfaz
        mostrarFactura(factura);

        // Generar archivo PDF
        generarPDF(factura);

        // Limpiar formulario
        facturaForm.reset();
    });

    // Función para mostrar la factura en la interfaz
    function mostrarFactura(factura) {
        const facturaDiv = document.createElement("div");
        facturaDiv.innerHTML = `
            <strong>ID:</strong> ${factura.id}<br>
            <strong>Cliente:</strong> ${factura.cliente}<br>
            <strong>Monto:</strong> S/ ${factura.monto}<br>
            <strong>Detalle:</strong> ${factura.detalle}<br>
            <strong>Fecha:</strong> ${factura.fecha}<br>
            <button onclick="alert('Funcionalidad aún en desarrollo')">Enviar por correo</button>
        `;
        facturaDiv.style.border = "1px solid #ddd";
        facturaDiv.style.padding = "1rem";
        facturaDiv.style.marginBottom = "1rem";
        facturaDiv.style.borderRadius = "4px";
        facturasLista.appendChild(facturaDiv);
    }

    // Función para generar un PDF del comprobante
    function generarPDF(factura) {
        const { jsPDF } = window.jspdf; // Librería jsPDF
        const doc = new jsPDF();

        doc.setFontSize(12);
        doc.text("Comprobante Electrónico", 20, 20);
        doc.text(`ID: ${factura.id}`, 20, 30);
        doc.text(`Cliente: ${factura.cliente}`, 20, 40);
        doc.text(`Monto: S/ ${factura.monto}`, 20, 50);
        doc.text(`Detalle: ${factura.detalle}`, 20, 60);
        doc.text(`Fecha: ${factura.fecha}`, 20, 70);

        doc.save(`Factura-${factura.id}.pdf`);
    }
});

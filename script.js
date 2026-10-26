// Substitua pelo número oficial do WhatsApp da Mazaserv lda.
const WHATSAPP_NUMBER = "258840000000";

// Sanitização de texto contra XSS
function sanitizeInput(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

// Formulário de Pedido de Produtos Sob Encomenda
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = sanitizeInput(document.getElementById('orderName').value.trim());
    const category = sanitizeInput(document.getElementById('orderCategory').value);
    const details = sanitizeInput(document.getElementById('orderDetails').value.trim());

    if (!name || !category || !details) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    const message = `Olá, Mazaserv lda.!%0A%0A*NOVO PEDIDO DE PRODUTO SOB ENCOMENDA*%0A*Cliente:* ${name}%0A*Categoria:* ${category}%0A*Especificações:* ${details}`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
});

// Formulário de Cotação e Assistência Técnica
document.getElementById('quoteForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = sanitizeInput(document.getElementById('clientName').value.trim());
    const contact = sanitizeInput(document.getElementById('clientContact').value.trim());
    const service = sanitizeInput(document.getElementById('serviceType').value);
    const problem = sanitizeInput(document.getElementById('problemDescription').value.trim());

    if (!name || !contact || !service || !problem) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    const message = `Olá, Mazaserv lda.!%0A%0A*SOLICITAÇÃO DE COTAÇÃO / DIAGNÓSTICO*%0A*Cliente:* ${name}%0A*Contacto:* ${contact}%0A*Serviço:* ${service}%0A*Descrição:* ${problem}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
});
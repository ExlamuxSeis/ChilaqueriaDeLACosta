const { createApp } = Vue;

createApp({
    data() {
        return {
            chilaquiles: [
                { name: "Sencillos", price: 85, img: "https://picsum.photos/id/292/600/400", description: "Totopos crujientes con salsa a elegir." },
                { name: "Con pollo", price: 125, img: "https://picsum.photos/id/1015/600/400", description: "Pechuga deshebrada de alta calidad." },
                { name: "Con bistec", price: 150, img: "https://picsum.photos/id/870/600/400", description: "Corte de res suave y jugoso." },
                { name: "Con chicharrón", price: 115, img: "https://picsum.photos/id/1016/600/400", description: "Chicharrón prensado guisado en salsa." }
            ],
            especialidades: [
                { name: "Sopes", subtitle: "Orden de 3", price: 90, img: "https://picsum.photos/id/133/600/400" },
                { name: "Tacos Acorazados", subtitle: "Orden de 3", price: 100, img: "https://picsum.photos/id/201/600/400" },
                { name: "Enchiladas", subtitle: "4 piezas", price: 100, img: "https://picsum.photos/id/292/600/400" },
                { name: "Menú Comida", subtitle: "A partir de 1:00 PM", price: 160, img: "https://picsum.photos/id/870/600/400" }
            ],
            bebidas: [
                { name: "Aguas Frescas", price: 35, subtitle: "Limonada, Horchata o Jamaica", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500" },
                { name: "Refrescos", price: 30, subtitle: "Variedad de la familia Coca-Cola", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=500" },
                { name: "Café Americano", price: 25, subtitle: "Grano recién molido", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=500" }
            ],
            order: {
                phone: "527447402325",
                base: '',    
                salsa: '',   
                bebida: '',  
                extra: '', // Agregado para que no de error en el método
                total: 0
            }
        }; // <-- Aquí faltaba cerrar data y poner coma
    },
    methods: {
        sendWhatsApp() {
            // Corregido: Usamos this.order.phone
            const phoneNumber = this.order.phone;

            if (!this.order.base && !this.order.salsa) {
                const mensajeDefault = encodeURIComponent("¡Hola! Vengo de la página web y me gustaría hacer un pedido.");
                window.open(`https://wa.me/${phoneNumber}?text=${mensajeDefault}`, '_blank');
                return;
            }

            const lineas = [
                "¡Hola! Quiero armar un pedido desde la web: 🌶️",
                `*Platillo: Chilaquiles * ${this.order.base || 'No especificado'}`,
                `*Salsa:* ${this.order.salsa || 'A elegir'}`,
                `*Bebida:* ${this.order.bebida || 'Ninguna'}`
            ];

            if (this.order.extra) {
                lineas.push(`*Notas:* ${this.order.extra}`);
            }

            lineas.push("---", "¿Me confirman el total para pago? 🙏");

            const textoFinal = encodeURIComponent(lineas.join('\n'));
            window.open(`https://wa.me/${phoneNumber}?text=${textoFinal}`, '_blank');
        }
    }
}).mount('#app');

/* Lógica del DOM fuera de Vue */
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('pro-chilaquil-cursor');

    // Verificamos que el cursor exista para evitar errores en consola
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });

        document.addEventListener('mousedown', () => cursor.classList.add('clicked'));
        document.addEventListener('mouseup', () => cursor.classList.remove('clicked'));
    }

    // Navbar collapse automático
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navMenu');
    
    if (menuToggle) {
        const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
        navLinks.forEach((l) => {
            l.addEventListener('click', () => { 
                // Solo cerrar si el menú está visible (móvil)
                if (window.getComputedStyle(menuToggle).display !== 'none') {
                    bsCollapse.hide();
                }
            });
        });
    }
});
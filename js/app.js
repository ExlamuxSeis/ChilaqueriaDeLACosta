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
            ]
        }
    }
}).mount('#app');
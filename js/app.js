var app = new Vue({
    el: "#app",
    data: {
        registers: [
            {Articulo: "", Nombre: "", Factor: "", Unidad: "", Pedido: "", Viveres: ""},
            {Articulo: "", Nombre: "", Factor: "", Unidad: "", Pedido: "", Viveres: ""},
            {Articulo: "", Nombre: "", Factor: "", Unidad: "", Pedido: "", Viveres: ""},
            {Articulo: "", Nombre: "", Factor: "", Unidad: "", Pedido: "", Viveres: ""},
            {Articulo: "", Nombre: "", Factor: "", Unidad: "", Pedido: "", Viveres: ""},
            {Articulo: "", Nombre: "", Factor: "", Unidad: "", Pedido: "", Viveres: ""},
            {Articulo: "", Nombre: "", Factor: "", Unidad: "", Pedido: "", Viveres: ""},
            {Articulo: "", Nombre: "", Factor: "", Unidad: "", Pedido: "", Viveres: ""},
            {Articulo: "", Nombre: "", Factor: "", Unidad: "", Pedido: "", Viveres: ""},
            {Articulo: "", Nombre: "", Factor: "", Unidad: "", Pedido: "", Viveres: ""},
            {Articulo: "", Nombre: "", Factor: "", Unidad: "", Pedido: "", Viveres: ""},
            {Articulo: "", Nombre: "", Factor: "", Unidad: "", Pedido: "", Viveres: ""},
            {Articulo: "", Nombre: "", Factor: "", Unidad: "", Pedido: "", Viveres: ""},
            {Articulo: "", Nombre: "", Factor: "", Unidad: "", Pedido: "", Viveres: ""},
            {Articulo: "", Nombre: "", Factor: "", Unidad: "", Pedido: "", Viveres: ""},
            {Articulo: "", Nombre: "", Factor: "", Unidad: "", Pedido: "", Viveres: ""}
        ],
        titles: ["Articulo", "Nombre", "Factor", "Unidad", "Pedido", "Viveres"],
        titleAlert: "Advertencia",
        messageAlert: "Formato incorrecto"
    },
    mounted: function() {
        this.setNameFile("");
    },
    methods: {
        isValidFormat: function(arrayTitles) {
            if (arrayTitles.length < 6) return false;
            const isValid = (
                arrayTitles[0] === "Articulo" &&
                arrayTitles[1] === "Nombre" &&
                arrayTitles[2] === "Factor" &&
                arrayTitles[3] === "Unidad" &&
                arrayTitles[4] === "Pedido" &&
                arrayTitles[5] === "Viveres"
            ) ? true : false;
            return isValid;
        },
        showMessageDialog: function(message) {
            this.messageAlert = message;
            $("#activateAlert").click();
        },
        setTitles: function(arrayTitle) {
            this.titles = arrayTitle;
        },
        clickSearch: function() {
            $("#readFile").click();
        },
        setNameFile: function(name) {
            $("#textFile").val(name);
        }
    }
});
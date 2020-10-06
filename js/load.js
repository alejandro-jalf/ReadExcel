$(document).ready(function() {
    $("#readFile").change(function(evt){
        var selectedFile = evt.target.files[0];
        var reader = new FileReader();
        app.setNameFile(selectedFile.name);
        reader.onload = async function(event) {
            var data = event.target.result;
            var workbook = XLSX.read(data, {
                type: 'binary'
            });
            await workbook.SheetNames.forEach(function(sheetName) {
                var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                try {
                    const titles = Object.keys(XL_row_object[0]);
                    if (!app.isValidFormat(titles)) {
                        app.showMessageDialog("El archivo no cumple con el formato");
                        return;
                    }
                    app.setTitles(titles);
                    app.registers = XL_row_object;
                } catch (error) {
                    app.showMessageDialog("El archivo no cumple con el formato");
                    // console.log(error);
                }
            });
        };

        reader.onerror = function(event) {
            app.showMessageDialog("Ocurrio un error al cargar el archivo");
            console.error("File could not be read! Code " + event.target.error.code);
        };

        reader.readAsBinaryString(selectedFile);
    });
});
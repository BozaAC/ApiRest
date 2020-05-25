function cargarDatos() {

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'GET',
        dataType: 'JSON',

        success: function (Respuesta) {
            $.each(Respuesta, function (index, elemento) {
                $(".re1").append(
                        "<tr><td>" + elemento.userId + "</td><td>" + elemento.id + "</td><td>" + elemento.title
                        + "</td><td>" + elemento.body + "</td></tr>"
                        );
            });
        },
        error: function () {
            console.log("Error");
        },
        complete: function () {
            alert("Operacion completada");
        }
    });

}



function buscar(){
    var ID = $("input:text[name=ID]").val();
    
    $.ajax({
                url:"https://jsonplaceholder.typicode.com/posts",
                type:'GET',
                dataType:'JSON',
                data:'data',
                
                success: function (data) {
                    $.each(data, function(index,elemento){
                        
                        if (elemento.userId == ID) {
                            
                             $(".re1").append(
                        "<tr><td>" + elemento.userId + "</td><td>" + elemento.id + "</td><td>" + elemento.title
                        + "</td><td>" + elemento.body + "</td></tr>"
                        );
                        }
                    });
                } 
            });
    
}
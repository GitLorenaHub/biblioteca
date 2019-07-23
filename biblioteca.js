<script>
 
        //Oculto todos los textos excepto el texto inicial
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "none";
 
        function seleccion() {

        if (document.getElementById("1").selected == true) {
document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "none";
            
 
            if (document.getElementById("2").selected == true) {

        document.getElementById("1").style.display = "none";
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "none";
        
            else if (document.getElementById("3").selected == true) {

        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "none";
        document.getElementById("4").style.display = "none";
            } else if (document.getElementById("4").selected == true) {

        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "none";
            } 
        }
</script>
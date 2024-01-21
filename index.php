<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego del Ahorcado</title>
    <link rel="stylesheet" type="text/css" href="juego.css">
</head>
<body>

<header>
    <h1>Juego del Ahorcado</h1>
</header>

<main>
    <img id="ahorcado" src="imagenes/ahorcado_0.png" alt="Ahorcado"/>
    <div>
        <p id="palabra">   
            <?php
            // Imprime los spans para cada letra de la palabra a adivinar
            if (!empty($palabra_adivinar)) {
                for ($i = 0; $i < strlen($palabra_adivinar); $i++) {
                    echo '<span></span>';
                }
            }
            ?>
        </p>

        <button id="juego" onclick="iniciar()">Obtener palabra</button>

        <p id="resultado_juego"></p>

        <div id="letras">
            <?php
            // Imprime los botones de letras usando PHP
            for ($i = ord('a'); $i <= ord('z'); $i++) {
                $letra = chr($i);
                echo '<button onclick="clickLetras(\'' . $letra . '\')">' . $letra . '</button>';
            }
            ?>
        </div>

        <div id="formulario">
            <form action="procesar_palabra.php" method="POST">
                <h3>Añade una palabra al juego</h3>
                <label for="palabra"></label>
                <input type="text" id="palabra" name="palabra" required>
                <br>
                <input type="submit" value="Enviar Palabra">
            </form>
        </div>
    </div>
</main>

<script src="juego.js"></script>   
</body>
</html>

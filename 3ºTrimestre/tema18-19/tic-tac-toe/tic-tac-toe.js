      let jugador = 1; 
      // La variable jugador controla controla el turno 
      // y se guarda en el tablero cuadno hace click.
      let casillas = document.querySelectorAll(".casilla"); 
      // Casillas sera un array que contine todos los elementos de la 
      // clase casilla, se usa para colorearla segun el jugador que ha hecho click.
      let tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      let ganador = false;
      // Estas son las combinaciones posibles con las cuales puedes ganar la partida
      let combinaciones = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      // Aqui se ponen todas las jugadas de cada jugador 
      function jugada(num) {
        if (!ganador && tablero[num - 1] === 0) {
          tablero[num - 1] = jugador;
          casillas[num - 1].classList.add("jugador" + jugador);
          if (comprobarGanador()) {
            alert("Jugador " + jugador + " ha ganado");
            ganador = true;

          } else if (comprobarEmpate()) {
            alert("Empate");
            ganador = true;
          } else {
            cambiarJugador();
            var turno2 = document.getElementById('turno');
            turno2.innerText = "Turno de Jugador "+jugador;
          }
        }
      }

      function cambiarJugador() {
        jugador = jugador === 1 ? 2 : 1; 
        // Esto es un operador ternario. 
        // Si el jugador 1 el valor cambia a 2 y en caso contrario cambia a 1. 
        // Conclusion alterna el valor de jugador entre 1 y 2
        
      }

      // En esta funcion NO hay ningun error
      function comprobarGanador() {
        for (let i = 0; i < combinaciones.length; i++) {
          const combinacion = combinaciones[i];
          let ganador = true;
          for (let j = 0; j < combinacion.length; j++) {
            const casilla = combinacion[j];
            if (tablero[casilla] !== jugador) {
              ganador = false;
              break;
            }
          }
          if (ganador) {
            return true;
          }
        }
        return false;
      }

      // Funcion para reiniciar, recorre todas las casillas y borra los iconos de jugador 1 y jugador 2.
      function reiniciar(){
        casillas.forEach(casilla => casilla.classList.remove("jugador1", "jugador2"));
      }

      function otraPartida(){

      }

      function contador(){
        
      }

      // Comprueba si hay empate.
      function comprobarEmpate() {
        return !tablero.includes(0);
      }
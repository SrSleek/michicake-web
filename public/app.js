// Arma el mensaje de WhatsApp con los antojos palomeados en la carta.
(function () {
  var NUMERO = "522223470539";
  var elegidos = Array.prototype.slice.call(document.querySelectorAll(".elegir"));
  var botones = Array.prototype.slice.call(document.querySelectorAll(".js-pedir"));
  var lista = document.querySelector(".ticket-lista");
  var textoBoton = document.querySelector(".js-texto-boton");

  function mensaje(items) {
    if (!items.length) return "¡Hola, Michi Cake! Quiero hacer un pedido. ¿Qué tienen disponible?";
    return "¡Hola, Michi Cake! Quiero pedir:\n" + items.map(function (i) { return "• " + i; }).join("\n") + "\n¿Qué días tienen disponible?";
  }

  function actualizar() {
    var items = elegidos.filter(function (c) { return c.checked; }).map(function (c) { return c.value; });
    var url = "https://wa.me/" + NUMERO + "?text=" + encodeURIComponent(mensaje(items));
    botones.forEach(function (b) { b.href = url; });
    document.body.classList.toggle("con-pedido", items.length > 0);

    lista.textContent = "";
    if (!items.length) {
      var vacio = document.createElement("span");
      vacio.className = "ticket-vacio";
      vacio.textContent = "Palomea tus antojos";
      lista.appendChild(vacio);
    } else {
      items.forEach(function (i) {
        var chip = document.createElement("span");
        chip.className = "chip";
        chip.textContent = i;
        lista.appendChild(chip);
      });
    }
    if (textoBoton) textoBoton.textContent = items.length ? "Pedir " + (items.length === 1 ? "mi antojo" : "mis " + items.length + " antojos") : "Pedir por WhatsApp";
  }

  elegidos.forEach(function (c) { c.addEventListener("change", actualizar); });
  actualizar();
})();

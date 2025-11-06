var genero = document.getElementById('genero').value;
var edad = document.getElementById('edad').value;
var meses = document.getElementById('meses').value;

if (edad >= 5) {
  pesoedad.style.visibility = 'hidden';
  pesotalla.style.visibility = 'hidden';
} else if (edad <= 5) {
  tallaedad.style.visibility = 'hidden';
  imcedad.style.visibility = 'hidden';
}
function calcular() {
  var a = parseFloat(document.getElementById('peso').value) || 0;
  var b = parseFloat(document.getElementById('talla').value / 100) || 0;
  var imc = parseFloat(a / (b * b)).toFixed(2);
  document.getElementById('imc').value = imc;
  parseFloat(a / (b * b)).toFixed(2);

  var peso = document.getElementById('peso').value;
  var talla = document.getElementById('talla').value;
  if (genero == 'Femenino') {
    if (edad == 5 && meses >= 0 && meses < 6) {
      if (imc <= 11.8) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 11.9 && imc <= 12.6) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 12.7 && imc <= 13.8) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 13.9 && imc <= 16.8) {
        imcvalor.value = 'Normal';
      } else if (imc >= 16.9 && imc <= 18.8) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 18.9) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 95.3) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 95.4 && talla <= 100.0) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 100.1 && talla <= 104.7) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 104.8 && talla <= 114.3) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 114.4 && talla <= 119.0) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 119.1 && talla <= 123.8) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 123.9) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 5 && meses >= 6 && meses <= 11) {
      if (imc <= 11.7) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 11.8 && imc <= 12.6) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 12.7 && imc <= 13.8) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 13.9 && imc <= 16.8) {
        imcvalor.value = 'Normal';
      } else if (imc >= 16.9 && imc <= 18.9) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 19.0) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 97.4) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 97.5 && talla <= 102.2) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 102.3 && talla <= 107.1) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 107.2 && talla <= 117.0) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 117.1 && talla <= 121.9) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 122.0 && talla <= 126.9) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 127.0) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 6 && meses >= 0 && meses < 6) {
      if (imc <= 11.7) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 11.8 && imc <= 12.6) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 12.7 && imc <= 13.8) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 13.9 && imc <= 16.9) {
        imcvalor.value = 'Normal';
      } else if (imc >= 17.0 && imc <= 19.1) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 19.2) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 99.8) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 99.9 && talla <= 104.8) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 104.9 && talla <= 109.9) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 110.0 && talla <= 120.1) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 120.2 && talla <= 125.3) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 125.4 && talla <= 130.4) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 130.5) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 6 && meses >= 6 && meses <= 11) {
      if (imc <= 11.7) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 11.8 && imc <= 12.6) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 12.7 && imc <= 13.8) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 13.9 && imc <= 17.0) {
        imcvalor.value = 'Normal';
      } else if (imc >= 17.1 && imc <= 19.4) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 19.5) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 102.1) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 102.2 && talla <= 107.3) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 107.4 && talla <= 112.6) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 112.7 && talla <= 123.2) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 123.3 && talla <= 128.5) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 128.6 && talla <= 133.8) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 133.9) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 7 && meses >= 0 && meses < 6) {
      if (imc <= 11.8) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 11.9 && imc <= 12.6) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 12.7 && imc <= 13.8) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 13.9 && imc <= 17.2) {
        imcvalor.value = 'Normal';
      } else if (imc >= 17.3 && imc <= 19.7) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 19.8) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 104.4) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 104.5 && talla <= 109.8) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 109.9 && talla <= 115.2) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 115.3 && talla <= 126.2) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 126.3 && talla <= 131.6) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 131.7 && talla <= 137.1) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 137.2) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 7 && meses >= 6 && meses <= 11) {
      if (imc <= 11.8) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 11.9 && imc <= 12.7) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 12.8 && imc <= 13.9) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 14.0 && imc <= 17.4) {
        imcvalor.value = 'Normal';
      } else if (imc >= 17.5 && imc <= 20.0) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 20.1) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 106.8) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 106.9 && talla <= 112.3) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 112.4 && talla <= 117.9) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 118.0 && talla <= 129.2) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 129.3 && talla <= 134.8) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 134.9 && talla <= 140.5) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 140.6) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 8 && meses >= 0 && meses < 6) {
      if (imc <= 11.9) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 12.0 && imc <= 12.8) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 12.9 && imc <= 14.0) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 14.1 && imc <= 17.6) {
        imcvalor.value = 'Normal';
      } else if (imc >= 17.7 && imc <= 20.5) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 20.6) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 109.2) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 109.3 && talla <= 114.9) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 115.0 && talla <= 120.7) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 120.8 && talla <= 132.3) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 132.4 && talla <= 138.1) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 138.2 && talla <= 143.8) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 143.9) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 8 && meses >= 6 && meses <= 11) {
      if (imc <= 12.0) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 12.1 && imc <= 12.9) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 13.0 && imc <= 14.2) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 14.3 && imc <= 17.9) {
        imcvalor.value = 'Normal';
      } else if (imc >= 18.0 && imc <= 20.9) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 21.0) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 111.6) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 111.7 && talla <= 117.5) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 117.6 && talla <= 123.4) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 123.5 && talla <= 135.4) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 135.5 && talla <= 141.3) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 141.4 && talla <= 147.3) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 147.4) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 9 && meses >= 0 && meses < 6) {
      if (imc <= 12.1) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 12.2 && imc <= 13.0) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 13.1 && imc <= 14.3) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 14.4 && imc <= 18.2) {
        imcvalor.value = 'Normal';
      } else if (imc >= 18.3 && imc <= 21.4) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 21.5) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 114.2) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 114.3 && talla <= 120.2) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 120.3 && talla <= 126.3) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 126.4 && talla <= 138.5) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 138.6 && talla <= 144.6) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 144.7 && talla <= 150.7) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 150.8) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 9 && meses >= 6 && meses <= 11) {
      if (imc <= 12.2) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 12.3 && imc <= 13.2) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 13.3 && imc <= 14.5) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 14.6 && imc <= 18.6) {
        imcvalor.value = 'Normal';
      } else if (imc >= 18.7 && imc <= 21.9) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 22.0) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 116.8) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 116.9 && talla <= 122.9) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 123.0 && talla <= 129.2) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 129.3 && talla <= 141.7) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 141.8 && talla <= 148.0) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 148.1 && talla <= 154.2) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 154.3) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 10 && meses >= 0 && meses < 6) {
      if (imc <= 12.4) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 12.5 && imc <= 13.4) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 13.5 && imc <= 14.7) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 14.8 && imc <= 18.9) {
        imcvalor.value = 'Normal';
      } else if (imc >= 19.0 && imc <= 22.5) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 22.6) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 119.4) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 119.5 && talla <= 125.7) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 125.8 && talla <= 132.1) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 132.2 && talla <= 144.9) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 145.0 && talla <= 151.3) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 151.4 && talla <= 157.7) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 157.8) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 10 && meses >= 6 && meses <= 11) {
      if (imc <= 12.5) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 12.6 && imc <= 13.6) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 13.7 && imc <= 15.0) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 15.1 && imc <= 19.3) {
        imcvalor.value = 'Normal';
      } else if (imc >= 19.4 && imc <= 23.0) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 23.1) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 122.2) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 122.3 && talla <= 128.6) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 128.7 && talla <= 135.2) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 135.3 && talla <= 148.2) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 148.3 && talla <= 154.7) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 154.8 && talla <= 161.3) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 161.4) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 11 && meses >= 0 && meses < 6) {
      if (imc <= 12.7) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 12.8 && imc <= 13.8) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 13.9 && imc <= 15.2) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 15.3 && imc <= 19.8) {
        imcvalor.value = 'Normal';
      } else if (imc >= 19.9 && imc <= 23.6) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 23.7) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 125.1) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 125.2 && talla <= 131.6) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 131.7 && talla <= 138.2) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 138.3 && talla <= 151.5) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 151.6 && talla <= 158.2) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 158.3 && talla <= 164.8) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 164.9) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 11 && meses >= 6 && meses <= 11) {
      if (imc <= 12.9) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 13.0 && imc <= 14.0) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 14.1 && imc <= 15.5) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 15.6 && imc <= 20.2) {
        imcvalor.value = 'Normal';
      } else if (imc >= 20.3 && imc <= 24.2) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 24.3) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 127.9) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 128.0 && talla <= 134.6) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 134.7 && talla <= 141.3) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 141.4 && talla <= 154.8) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 154.9 && talla <= 161.6) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 161.7 && talla <= 168.3) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 168.4) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 12 && meses >= 0 && meses < 6) {
      if (imc <= 13.2) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 13.3 && imc <= 14.3) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 14.4 && imc <= 15.9) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 16.0 && imc <= 20.7) {
        imcvalor.value = 'Normal';
      } else if (imc >= 20.8 && imc <= 24.9) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 25.0) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 130.7) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 130.8 && talla <= 137.5) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 137.6 && talla <= 144.3) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 144.4 && talla <= 158.0) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 158.1 && talla <= 164.8) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 164.9 && talla <= 171.7) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 171.8) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 12 && meses >= 6 && meses <= 11) {
      if (imc <= 13.4) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 13.5 && imc <= 14.6) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 14.7 && imc <= 16.2) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 16.3 && imc <= 21.2) {
        imcvalor.value = 'Normal';
      } else if (imc >= 21.3 && imc <= 25.5) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 25.6) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 133.3) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 133.4 && talla <= 140.1) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 140.2 && talla <= 147.0) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 147.1 && talla <= 160.8) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 160.9 && talla <= 167.7) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 167.8 && talla <= 174.6) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 174.7) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 13 && meses >= 0 && meses < 6) {
      if (imc <= 13.6) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 13.7 && imc <= 14.8) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 14.9 && imc <= 16.5) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 16.6 && imc <= 21.7) {
        imcvalor.value = 'Normal';
      } else if (imc >= 21.8 && imc <= 26.1) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 26.2) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 135.6) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 135.7 && talla <= 142.4) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 142.5 && talla <= 149.3) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 149.4 && talla <= 163.2) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 163.3 && talla <= 170.2) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 170.3 && talla <= 177.1) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 177.2) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }
  } else if (genero == 'Masculino') {
    if (edad == 5 && meses >= 0 && meses < 6) {
      if (imc <= 12.1) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 12.2 && imc <= 12.9) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 13.0 && imc <= 14.0) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 14.1 && imc <= 16.5) {
        imcvalor.value = 'Normal';
      } else if (imc >= 16.6 && imc <= 18.2) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 18.3) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 96.5) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 96.6 && talla <= 101.0) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 101.1 && talla <= 105.6) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 105.7 && talla <= 114.8) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 114.9 && talla <= 119.3) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 119.4 && talla <= 123.9) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 124.0) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 5 && meses >= 6 && meses <= 11) {
      if (imc <= 12.1) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 12.2 && imc <= 12.9) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 13.0 && imc <= 14.0) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 14.1 && imc <= 16.6) {
        imcvalor.value = 'Normal';
      } else if (imc >= 16.7 && imc <= 18.3) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 18.4) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 98.7) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 98.8 && talla <= 103.3) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 103.4 && talla <= 108.1) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 108.2 && talla <= 117.6) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 117.7 && talla <= 122.3) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 122.4 && talla <= 127.0) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 127.1) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 6 && meses >= 0 && meses < 6) {
      if (imc <= 12.1) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 12.2 && imc <= 12.9) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 13.0 && imc <= 14.0) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 14.1 && imc <= 16.7) {
        imcvalor.value = 'Normal';
      } else if (imc >= 16.8 && imc <= 18.4) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 18.5) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 101.2) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 101.3 && talla <= 106.0) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 106.1 && talla <= 110.9) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 111.0 && talla <= 120.8) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 120.9 && talla <= 125.7) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 125.8 && talla <= 130.6) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 130.7) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 6 && meses >= 6 && meses <= 11) {
      if (imc <= 12.2) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 12.3 && imc <= 13.0) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 13.1 && imc <= 14.0) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 14.1 && imc <= 16.8) {
        imcvalor.value = 'Normal';
      } else if (imc >= 16.9 && imc <= 18.6) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 18.7) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 103.6) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 103.7 && talla <= 108.6) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 108.7 && talla <= 113.7) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 113.8 && talla <= 123.9) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 124.0 && talla <= 129.0) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 129.1 && talla <= 134.1) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 134.2) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 7 && meses >= 0 && meses < 6) {
      if (imc <= 12.3) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 12.4 && imc <= 13.0) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 13.1 && imc <= 14.1) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 14.2 && imc <= 16.9) {
        imcvalor.value = 'Normal';
      } else if (imc >= 17.0 && imc <= 18.9) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 19.0) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 105.9) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 106.0 && talla <= 111.1) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 111.2 && talla <= 116.3) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 116.4 && talla <= 126.9) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 127.0 && talla <= 132.2) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 132.3 && talla <= 137.5) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 137.6) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 7 && meses >= 6 && meses <= 11) {
      if (imc <= 12.3) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 12.4 && imc <= 13.1) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 13.2 && imc <= 14.2) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 14.3 && imc <= 17.1) {
        imcvalor.value = 'Normal';
      } else if (imc >= 17.2 && imc <= 19.2) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 19.3) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 108.1) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 108.2 && talla <= 113.5) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 113.6 && talla <= 119.0) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 119.1 && talla <= 129.9) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 130.0 && talla <= 135.4) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 135.5 && talla <= 140.8) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 140.9) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 8 && meses >= 0 && meses < 6) {
      if (imc <= 12.4) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 12.5 && imc <= 13.2) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 13.3 && imc <= 14.3) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 14.4 && imc <= 17.3) {
        imcvalor.value = 'Normal';
      } else if (imc >= 17.4 && imc <= 19.6) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 19.7) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 110.3) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 110.4 && talla <= 115.9) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 116.0 && talla <= 121.5) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 121.6 && talla <= 132.8) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 132.9 && talla <= 138.5) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 138.6 && talla <= 144.1) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 144.2) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 8 && meses >= 6 && meses <= 11) {
      if (imc <= 12.5) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 12.6 && imc <= 13.3) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 13.4 && imc <= 14.4) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 14.5 && imc <= 17.6) {
        imcvalor.value = 'Normal';
      } else if (imc >= 17.7 && imc <= 20.0) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 20.1) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 112.4) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 112.5 && talla <= 118.2) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 118.3 && talla <= 124.0) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 124.1 && talla <= 135.7) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 135.8 && talla <= 141.5) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 141.6 && talla <= 147.3) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 147.4) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 9 && meses >= 0 && meses < 6) {
      if (imc <= 12.6) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 12.7 && imc <= 13.4) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 13.5 && imc <= 14.5) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 14.6 && imc <= 17.8) {
        imcvalor.value = 'Normal';
      } else if (imc >= 17.9 && imc <= 20.4) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 20.5) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 114.5) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 114.6 && talla <= 120.4) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 120.5 && talla <= 126.5) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 126.6 && talla <= 138.5) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 138.6 && talla <= 144.5) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 144.6 && talla <= 150.5) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 150.6) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 9 && meses >= 6 && meses <= 11) {
      if (imc <= 12.7) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 12.8 && imc <= 13.5) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 13.6 && imc <= 14.7) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 14.8 && imc <= 19.1) {
        imcvalor.value = 'Normal';
      } else if (imc >= 19.2 && imc <= 20.8) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 20.9) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 116.6) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 116.7 && talla <= 122.7) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 122.8 && talla <= 128.9) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 129.0 && talla <= 141.3) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 141.4 && talla <= 147.5) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 147.6 && talla <= 153.7) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 153.8) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 10 && meses >= 0 && meses < 6) {
      if (imc <= 12.8) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 12.9 && imc <= 13.6) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 13.7 && imc <= 14.8) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 14.9 && imc <= 18.4) {
        imcvalor.value = 'Normal';
      } else if (imc >= 18.5 && imc <= 21.3) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 21.4) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 118.7) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 118.8 && talla <= 124.9) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 125.0 && talla <= 131.3) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 131.4 && talla <= 142.1) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 142.2 && talla <= 150.4) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 150.5 && talla <= 156.8) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 156.9) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 10 && meses >= 6 && meses <= 11) {
      if (imc <= 12.9) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 13.0 && imc <= 13.8) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 13.9 && imc <= 15.0) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 15.1 && imc <= 18.7) {
        imcvalor.value = 'Normal';
      } else if (imc >= 18.8 && imc <= 21.8) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 21.9) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 120.7) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 120.8 && talla <= 127.2) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 127.3 && talla <= 133.7) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 133.8 && talla <= 146.8) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 146.9 && talla <= 153.4) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 153.5 && talla <= 160.0) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 160.1) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 11 && meses >= 0 && meses < 6) {
      if (imc <= 13.1) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 13.2 && imc <= 14.0) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 14.1 && imc <= 15.2) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 15.3 && imc <= 19.1) {
        imcvalor.value = 'Normal';
      } else if (imc >= 19.2 && imc <= 22.4) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 22.5) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 122.9) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 123.0 && talla <= 129.6) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 129.7 && talla <= 136.3) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 136.4 && talla <= 149.7) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 149.8 && talla <= 156.5) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 156.6 && talla <= 163.2) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 163.3) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 11 && meses >= 6 && meses <= 11) {
      if (imc <= 13.2) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 13.3 && imc <= 14.1) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 14.2 && imc <= 15.4) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 15.5 && imc <= 19.4) {
        imcvalor.value = 'Normal';
      } else if (imc >= 19.5 && imc <= 22.9) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 23.0) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 125.3) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 125.4 && talla <= 132.1) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 132.2 && talla <= 139.0) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 139.1 && talla <= 152.8) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 152.9 && talla <= 159.7) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 159.8 && talla <= 166.6) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 166.7) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 12 && meses >= 0 && meses < 6) {
      if (imc <= 13.4) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 13.5 && imc <= 14.4) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 14.5 && imc <= 15.7) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 15.8 && imc <= 19.8) {
        imcvalor.value = 'Normal';
      } else if (imc >= 19.9 && imc <= 23.5) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 23.6) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 127.8) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 127.9 && talla <= 134.8) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 134.9 && talla <= 141.9) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 142.0 && talla <= 156.1) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 156.2 && talla <= 163.2) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 163.3 && talla <= 170.2) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 170.3) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 12 && meses >= 6 && meses <= 11) {
      if (imc <= 13.6) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 13.7 && imc <= 14.6) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 14.7 && imc <= 16.0) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 16.1 && imc <= 20.3) {
        imcvalor.value = 'Normal';
      } else if (imc >= 20.4 && imc <= 24.1) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 24.2) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 130.7) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 130.8 && talla <= 137.8) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 137.9 && talla <= 145.1) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 145.2 && talla <= 159.6) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 159.7 && talla <= 166.9) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 167.0 && talla <= 174.1) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 174.2) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }

    if (edad == 13 && meses >= 0 && meses < 6) {
      if (imc <= 13.8) {
        imcvalor.value = 'Desnutrición';
      } else if (imc >= 13.9 && imc <= 14.8) {
        imcvalor.value = 'Desnutrición Moderada';
      } else if (imc >= 14.9 && imc <= 16.3) {
        imcvalor.value = 'Desnutrición Leve';
      } else if (imc >= 16.4 && imc <= 20.7) {
        imcvalor.value = 'Normal';
      } else if (imc >= 20.8 && imc <= 24.7) {
        imcvalor.value = 'Sobrepeso';
      } else if (imc >= 24.8) {
        imcvalor.value = 'Obesidad';
      }

      if (talla <= 133.8) {
        tallaedad.value = 'Talla baja (-3DE)';
      } else if (talla >= 133.9 && talla <= 141.1) {
        tallaedad.value = 'Talla Normal (-2DE)';
      } else if (talla >= 141.2 && talla <= 148.5) {
        tallaedad.value = 'Talla Normal (-1DE)';
      } else if (talla >= 148.6 && talla <= 163.4) {
        tallaedad.value = 'Talla Normal';
      } else if (talla >= 163.5 && talla <= 170.8) {
        tallaedad.value = 'Talla Normal (+1DE)';
      } else if (talla >= 170.9 && talla <= 178.2) {
        tallaedad.value = 'Talla Alta (+2DE)';
      } else if (talla >= 178.3) {
        tallaedad.value = 'Talla Alta (+3DE)';
      }
    }
  }
}

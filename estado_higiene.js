var indice2 = document.getElementById("indice").value;
if(indice2 <= 25.0){ ihovalor.value = "Higiene Oral Óptima"; }
else if(indice2 > 25.0 && indice2 <= 40.0){ ihovalor.value = "Higiene Oral Buena"; }
else if(indice2 > 40.0 && indice2 <= 70.0){ ihovalor.value = "Higiene Oral Mediocre"; }
else if(indice2 > 70.0){ ihovalor.value = "Higiene Oral Deficiente"; }
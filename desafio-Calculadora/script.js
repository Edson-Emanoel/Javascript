const h3 = document.querySelector("h3")
            
const input = document.querySelector("input")

const btnSub = document.querySelector("#sub")
const btnSoma = document.querySelector("#sum")

btnSub.addEventListener("click", function(e){
      e.preventDefault();

      if (input.value < 0) {
            alert("O valor não pode ser MENOR QUE ZERO")
      } else {
            let valorH3 = Number(h3.textContent);
            let valorInput = Number(input.value);

            h3.textContent = (valorH3 - valorInput);
      }
});
// btnSub.onclick = () => { alert("Subtraindo") }

btnSoma.addEventListener("click", function(e){
      e.preventDefault();

      if (input.value < 0) {
            alert("O valor não pode ser MENOR QUE ZERO")
      }else{
            let valorH3 = Number(h3.textContent);
            let valorInput = Number(input.value);

            h3.textContent = (valorInput + valorH3);
      }
});
// btnSoma.onclick = () => { alert("Somando") }
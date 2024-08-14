function inserirCategoria () {
      const url = "http://localhost:8080/api/categoria"
      
      const categoria = {
            nome: "Computadores",
            descricao: "Tipos variados de computadores"
      }

      fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(categoria)
      })
}
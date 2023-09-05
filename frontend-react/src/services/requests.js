import Swal from "sweetalert2";

export async function listar(modelo, uri, functionSetState) {
  fetch(`http://localhost:3030/${uri}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na requisição.");
      }
      return response.json();
    })
    .then((data) => {
      functionSetState(data)
      return data;
    })
    .catch((error) => {
      console.error(`Erro ao buscar ${modelo}`, error);
    });
}

export function cadastrarAtualizarOuExcluir(model, uri, data, method, acao) {
  fetch(`http://localhost:3030/${uri}`, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        Swal.fire("Sucesso!", `Sucesso na requisicao de ${acao} ${model}`, "success");
      }
      else Swal.fire("Erro!", `Erro na requisição de ${acao} ${model}!`, "error");
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error(`Erro na requisição de ${acao} ${model}!`, error);
      throw new Error("Erro na requisição.");
    });
}


// export function editar(modelo, uri, data) {
//   fetch(`http://localhost:3030/${uri}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   })
//     .then((response) => {
//       if (response.ok)
//         Swal.fire("Sucesso!", "Cliente editado com sucesso!", "success");
//       else Swal.fire("Erro!", "Erro ao editar cliente!", "error");
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("Erro ao editar cliente:", error);
//       throw new Error("Erro na requisição.");
//     });
// }

export function excluirCliente(uri) {
  fetch(`http://localhost:3030/${uri}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.ok)
        Swal.fire("Sucesso!", "Dados excluídos com sucesso!", "success");
      else Swal.fire("Erro!", "Erro ao excluir dados!", "error");
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Erro ao excluir :", error);
      throw new Error("Erro na requisição.");
    });
}

export function mostraMensagemExluir(id, uri) {
  console.log(id)
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "O que deseja fazer ?",
      text: "Confirme para deletar os dados",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Deletar cadastro !",
      cancelButtonText: "Cancelar !",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {

        excluirCliente(uri);

        swalWithBootstrapButtons.fire(
          "Deletar !",
          "Esses dados serão deletados !",
          "success"
        );
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          "Cancelado",
          "Os dados não foram deletados :)",
          "error"
        );
      }
    });
}

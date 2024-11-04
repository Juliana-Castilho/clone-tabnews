function status(request, response) {
  response
    .status(200)
    .json({ chave: "O endpoint 'status' está conectado com sucesso." });
}
export default status;

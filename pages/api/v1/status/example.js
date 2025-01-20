async function status() {
  const url = "http://localhost:3000/api/v1/status";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      switch (response.status) {
        case 400:
          throw new Error("Request inválido (400)");
        case 500:
          throw new Error("Erro de servidor (500)");
        default:
          throw new Error(`Erro na requisição ${response.status}`);
      }
    }

    const data = await response.json();
    console.log("Response: ", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

export default status;

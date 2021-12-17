module.exports = app => {
  app.get("/atendimentos", (req, res) =>
    res.send("Server running - appointments")
  )

  app.post("/atendimentos", (req, res) => {
    console.log(req.body)
    res.send("Dados recebidos")
  })
}

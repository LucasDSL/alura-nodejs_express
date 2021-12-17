module.exports = app => {
  app.get("/atendimentos", (req, res) =>
    res.send("Server running - appointments")
  )
}

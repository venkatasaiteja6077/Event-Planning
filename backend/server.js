import app from "./app.js";

app.listen(4000, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
/*app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});*/

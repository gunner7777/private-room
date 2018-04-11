export const errorValid = (field, self) => {
  console.log("field is", field);
  if(field == "") {
    self.setState({
      error: {
        bool: true,
        field: "ФИ заказчика"
      }
    });
    return true;
  } else {
    self.setState({
      error: {
        bool: false,
        field: "ФИ заказчика"
      }
    });
    return;
  }
}
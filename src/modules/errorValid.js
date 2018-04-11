export const errorValid = (field, self) => {
  //console.log(self);
  if(field === "") {
    return true;
  } else {
    return self.setState({
      error: {
        bool: !self.state.error.bool,
        field: "ФИ заказчика"
      }
    });
  }
}
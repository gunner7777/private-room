export const errorValid = (field, fieldDescr, self) => {
  console.log("field is", field);
  if(field === "") {
    self.setState({
      error: {
        bool: true,
        field: fieldDescr
      }
    });
    return true;
  } else {
    self.setState({
      error: {
        bool: false,
        field: fieldDescr
      }
    });
    return;
  }
}
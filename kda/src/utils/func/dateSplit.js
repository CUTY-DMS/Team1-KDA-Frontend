const dateSplit = (data) => {
  const date = data.substring(0, 10);
  const splitedDate = date.split("-");
  return `${splitedDate[0]}.${splitedDate[1]}.${splitedDate[2]}`;
};

export default dateSplit;

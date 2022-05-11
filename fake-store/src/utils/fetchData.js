const getData = async () => {
   try{
      const url = 'https://fakestoreapi.com/products';
      const response = await fetch(url);
      const data = await response.json();
      return data
  } catch(err) {
    console.log(err)
  }
};

export { getData };

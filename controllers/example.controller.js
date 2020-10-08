const getExample = (req, res) => {
  res
    .status(200)
    .json({
      message: 'example route'
    })
    .end();
};

const postExample = (req, res) => {

  const { name, age } = req.body;

  res
    .status(200)
    .json({
      name: name,
      age: age,
    })
    .end();
};

module.exports = {
  getExample,
  postExample
};

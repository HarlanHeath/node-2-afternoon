module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { name, description, price, imageurl } = req.body;

    dbInstance
      .create_product([name, description, price, imageurl])
      .then(newProduct => res.sendStatus(200).send(newProduct))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something has gone wrong!" });
      });
  },

  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .read_product([params.id])
      .then(product => res.status(200).send(product))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something has gone wrong!" });
      });
  },

  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_products()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something has gone wrong!" });
      });
  },

  update: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params, query } = req;

    dbInstance
      .update_product([params.id, query.desc])
      .then(product => res.status(200).send(product))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something has gone wrong!" });
      });
  },

  delete: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .delete_product(params.id)
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something has gone wrong!" });
      });
  }
};

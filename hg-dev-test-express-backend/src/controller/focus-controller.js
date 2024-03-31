const FocusService = require('../service/focus-service');
module.exports = {
  getAll: async (req, res) => {
    try {
      const focuses = await FocusService.findAllFocus();
      return res.status(200).send(focuses);
    } catch (error) {
      throw error;
    }
  },
  Delete: async (req, res) => {
    try {
      const focusID = req.body.id;
      const deleted = await FocusService.deleteFocus(focusID);
      return res.status(200).send({ deleted: deleted });
    } catch (error) {
      throw error;
    }
  },
  Edit: async (req, res) => {
    try {
      const { id, title, description } = req.body;
      console.log(req.body);
      const focus = {
        id: id,
        title: title,
        description: description
      };
      const [result] = await FocusService.updateFocus(focus);
      if (result < 1) {
        return res
          .status(402)
          .send({ message: 'this data is not exist in DB', updated: false });
      }
      return res.status(200).send({ updated: true });
    } catch (ex) {
      throw ex;
    }
  },
  Create: async (req, res) => {
    try {
      const { id, user, fizz, title, description } = req.body;
      const focus = {
        id: id,
        title: title,
        description: description,
        user: user,
        fizz: fizz
      };
      console.log(focus);
      const newfocus = await FocusService.createFocus(focus);
      return res.status(200).send({ focus: newfocus, created: true });
    } catch (error) {
      throw error;
    }
  }
  // pageRead: async (req, res) => {
  //   try {
  //     const { pageSize, currentPage } = req.body;
  //     const limit = pageSize;
  //     const offset = (currentPage - 1) * pageSize;
  //     const loadedFocuses = await FocusService().pageLoad(limit, offset);
  //     return res.status(200).send({ Focus: loadedFocuses, loaded: true });
  //   } catch (error) {
  //     throw error;
  //   }
  // }
};

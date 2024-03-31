const db = require('../database/models');
const focus = db.Focus;
const where = db.Sequelize.where;

const focusService = {
  findAllFocus: async () => {
    const Focuses = await focus.findAll();
    return Focuses;
  },

  updateFocus: async (id, title, description) => {
    const updatedFocus = await focus.update(
      { title: title, description: description },
      { where: { id: id } }
    );
    return updatedFocus;
  },

  deleteFocus: async (id) => {
    const deleted = await focus.destroy({
      where: { id: id }
    });
    return deleted;
  },
  createFocus: async (id, title, description, user, fizz) => {
    const newFocus = await focus.create(id, title, description, user, fizz);
    return newFocus;
  }

  // pageLoad: async (limit, offset) => {
  //   const Focuses = await focus.findAll({ limit: limit, offset: offset });
  //   return Focuses;
  // },
  // FindOneByID: async (id) => {
  //   const Focus = await focus.findOne({ where: { id: id } });
  //   return Focus;
  // }
};
module.exports = focusService;

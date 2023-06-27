const {Products} = require("../../db");
const {Op} = require("sequelize")

  const combineFilterByPrice = async (req, res) => {
    console.log("Categoria marca y precio");
    const minPrice = parseFloat(req.query.minPrice) || 0
    const maxPrice = parseFloat(req.query.maxPrice) || Number.MAX_VALUE
    const {brand, category} = req.query
  
      const pageAsNumber = Number.parseInt(req.query.page)
      const sizeAsNumber = Number.parseInt(req.query.size)
  
      const filterOptions = {
        category,
        brand,
          price: {
              [Op.between]: [minPrice, maxPrice],
          },
      }
  
      let page = 0;
      if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
          page = pageAsNumber
      }
  
      let size = 5
      if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 5) {
          size = sizeAsNumber
      }
  
    try {
      const allProducts = await Products.findAndCountAll({
        where: filterOptions,
        limit: size,
        offset: page * size,
      });
  
      const totalPages = Math.ceil(allProducts.count / size);
  
      res.json({
          totalPages,
          content: allProducts.rows,
          origin: ["minPrice", "maxPrice", "category", "brand", minPrice, maxPrice, category, brand]
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  module.exports = combineFilterByPrice;


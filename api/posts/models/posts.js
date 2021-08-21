'use strict';

const axios = require('axios');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  async afterCreate(result, data) {
    axios.post('https://api.netlify.com/build_hooks/612158c2f96e118446a89233');
  },
  async afterUpdate(result, params, data) {
    axios.post('https://api.netlify.com/build_hooks/612158c2f96e118446a89233');
  }
};

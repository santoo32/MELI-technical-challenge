// /**
//  * Configuration module for the application
//  * @module config
//  */
// 'use strict'

// /**
//   * @swagger
//   * definitions:
//   *   Settings:
//   *     type: object
//   *     properties:
//   *       HOSTNAME:
//   *       PORT:
//   *         type: string
//   *       PEST_ROUTES_API_KEY:
//   *         type: string
//   *       PEST_ROUTES_API_TOKEN:
//   *         type: string
//   *       PEST_ROUTES_URL:
//   *         type: string
//   *       COMPANY_URL:
//   *         type: string
//   *       COMPANY_NAME:
//   *         type: string
//   *       ACCESS_TOKEN_SECRET:
//   *         type: string
//   *       BRAIN_TREE_API_PUBLIC_KEY:
//   *         type: string
//   *       BRAIN_TREE_API_PRIVATE_KEY:
//   *         type: string
//   *       BRAIN_TREE_API_MERCHANT_ID:
//   *         type: string
//   *       WEBAPP_PATH:
//   *         type: string
//   *       EXAMPLES_PATH:
//   *         type: string
//   */

// let getConfig = function () {
//     /** Load environment variables */
//     const path = require('path')
//     if (!('NODE_ENV' in process.env)) {
//       process.env.NODE_ENV = 'development'
//     }
//     const configPath = path.join(__dirname, '.env.' + process.env.NODE_ENV)
//     console.warn('Using configuration file: ' + configPath )
//     let result = require('dotenv').config({ path: configPath })
//     if (result.error) {
//       throw result.error
//     }
//     result = result.parsed
    
//     // Merge values with variables configuration
//     let defaults = require(path.resolve('./config/variables'));
//     let merged = {};
//     for (let key in defaults) {
//       if (key in result) {
//         merged[key] = result[key]
//       } else {
//         merged[key] = defaults[key]
//       }
//     }
//     return merged;
// }

// module.exports = getConfig()


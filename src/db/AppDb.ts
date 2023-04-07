import { Sequelize } from 'sequelize';

import { appDbConfig } from '../config/appDbConfig';


const AppDb = new Sequelize(appDbConfig.database, appDbConfig.username, appDbConfig.password, {
    host: appDbConfig.host,
    dialect: appDbConfig.dialect,
});
  
export default AppDb;
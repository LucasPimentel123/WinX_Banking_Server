import { Model, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize';
import AppDb from '../AppDb'

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare name: string;
    declare cpf: string;
    declare password: string;
}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
  }, {
    timestamps: true,
    sequelize: AppDb
})
  
export default User
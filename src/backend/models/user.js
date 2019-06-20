module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'stakeholder_id'
      },
      firstName: { type: DataTypes.STRING, field: 'name_first_nm' },
      middleName: { type: DataTypes.STRING, field: 'name_middle_nm' },
      lastName: { type: DataTypes.STRING, field: 'name_last_nm' },
      // salutationCd: { type: DataTypes.STRING, field: 'salutation_cd' },
      // languageCd: { type: DataTypes.INTEGER, field: 'language_cd' },
      token: { type: DataTypes.STRING, field: 'token_txt' },
      // userType: { type: DataTypes.INTEGER, field: 'stakeholder_type_cd' },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('NOW()'),
        field: 'date_created_dte'
      },
      deletedAt: { type: DataTypes.DATE, field: 'date_deleted_dte' },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('NOW()'),
        field: 'date_last_update_dte'
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: -9999,
        field: 'user_last_update_id'
      }
    },
    {
      tableName: 'ac042_external_stakeholder'
    }
  );
  User.associate = (models) => {
    models.User.belongsToMany(models.Step, { through: models.UserStepCompleted, foreignKey: 'stakeholder_id' });
  };

  return User;
};

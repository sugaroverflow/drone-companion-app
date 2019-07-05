module.exports = (sequelize, DataTypes) => {
  const UserStepCompleted = sequelize.define(
    'UserStepCompleted',
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'stakeholder_id'
      },
      stepCd: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'step_cd'
      },
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
      tableName: 'sm520_xref_user_step_completed'
    }
  );
  // UserStepCompleted.associate = (models) => {
  //   models.UserStepCompleted.belongsToMany(models.Step, {
  //     as: 'User',
  //     through: 'sm520_xref_user_step_completed',
  //     foreignKey: 'stakeholder_id'
  //   });
  // };

  return UserStepCompleted;
};

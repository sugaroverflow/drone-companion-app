module.exports = (sequelize, DataTypes) => {
  const Step = sequelize.define(
    'Step',
    {
      stepId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'step_cd'
      },
      taskId: {
        type: DataTypes.INTEGER,
        references: { model: 'ta003_task', key: 'task_cd' },
        field: 'task_cd'
      },
      descEng: { type: DataTypes.STRING(4000), field: 'step_description_etxt' },
      descFra: { type: DataTypes.STRING(4000), field: 'step_description_ftxt' },
      imageUrlEng: { type: DataTypes.STRING, field: 'step_image_url_etxt' },
      imageUrlFra: { type: DataTypes.STRING, field: 'step_image_url_ftxt' },
      orderNum: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: -1,
        field: 'display_order_srt'
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
      tableName: 'ta004_step'
    }
  );
  Step.associate = (models) => {
    models.Step.belongsTo(models.Task, {
      foreignKey: 'task_cd',
      targetKey: 'taskId'
    });
    models.Step.hasMany(models.Guidance, { foreignKey: 'step_cd', sourceKey: 'stepId' });
    models.Step.belongsToMany(models.User, { through: models.UserStepCompleted, foreignKey: 'step_cd' });
  };
  return Step;
};

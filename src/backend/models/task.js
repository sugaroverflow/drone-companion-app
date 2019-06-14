module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    'Task',
    {
      taskId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'task_cd'
      },
      phaseId: {
        type: DataTypes.INTEGER,
        references: { model: sequelize.models.Phase, key: 'phase_cd' },
        field: 'phase_cd'
      },
      titleEng: { type: DataTypes.STRING, unique: true, field: 'task_title_etxt' },
      titleFra: { type: DataTypes.STRING, unique: true, field: 'task_title_ftxt' },
      imageUrlEng: { type: DataTypes.STRING(4000), field: 'task_image_url_etxt' },
      imageUrlFra: { type: DataTypes.STRING(4000), field: 'task_image_url_ftxt' },
      estimate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        field: 'estimated_time_num'
      },
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
      tableName: 'ta003_task'
    }
  );
  Task.associate = (models) => {
    models.Task.belongsTo(models.Phase, {
      foreignKey: 'phase_cd',
      targetKey: 'phaseId'
    });
    models.Task.hasMany(models.Step, { foreignKey: 'task_cd', sourceKey: 'taskId' });
  };
  return Task;
};

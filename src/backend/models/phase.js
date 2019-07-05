// const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Phase = sequelize.define(
    'Phase',
    {
      phaseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'phase_cd'
      },
      moduleId: {
        type: DataTypes.INTEGER,
        references: { model: sequelize.models.Module, key: 'module_cd' },
        field: 'module_cd'
      },
      titleEng: { type: DataTypes.STRING, unique: true, field: 'phase_title_etxt' },
      titleFra: { type: DataTypes.STRING, unique: true, field: 'phase_title_ftxt' },
      descEng: { type: DataTypes.STRING(4000), field: 'phase_description_etxt' },
      descFra: { type: DataTypes.STRING(4000), field: 'phase_description_ftxt' },
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
      tableName: 'ta002_phase'
    }
  );

  Phase.associate = (models) => {
    models.Phase.belongsTo(models.Module, {
      foreignKey: 'module_cd',
      targetKey: 'moduleId'
    });
    models.Phase.hasMany(models.Task, { foreignKey: 'phase_cd', sourceKey: 'phaseId' });
  };

  return Phase;
};

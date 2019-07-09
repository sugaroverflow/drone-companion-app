
// const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Guidance = sequelize.define(
    'Guidance',
    {
      guidanceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'guidance_cd'
      },
      stepId: {
        type: DataTypes.INTEGER,
        references: { model: 'ta004_step', key: 'step_cd' },
        field: 'step_cd'
      },
      titleEng: { type: DataTypes.STRING, field: 'guidance_title_etxt' },
      titleFra: { type: DataTypes.STRING, field: 'guidance_title_ftxt' },
      imageUrlEng: { type: DataTypes.STRING, field: 'guidance_image_url_etxt' },
      imageUrlFra: { type: DataTypes.STRING, field: 'guidance_image_url_ftxt' },
      contentEng: { type: DataTypes.STRING(4000), field: 'guidance_content_etxt' },
      contentFra: { type: DataTypes.STRING(4000), field: 'guidance_content_ftxt' },
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
      tableName: 'ta005_guidance'
    }
  );
  Guidance.associate = (models) => {
    models.Guidance.belongsTo(models.Step, {
      foreignKey: 'step_cd',
      targetKey: 'stepId'
    });
  };
  return Guidance;
};

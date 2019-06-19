module.exports = (sequelize, DataTypes) => {
  const Module = sequelize.define(
    'Module',
    {
      moduleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'module_cd'
      },
      titleEng: { type: DataTypes.STRING, unique: true, field: 'module_title_etxt' },
      titleFra: { type: DataTypes.STRING, unique: true, field: 'module_title_ftxt' },
      descEng: { type: DataTypes.STRING(4000), field: 'module_description_etxt' },
      descFra: { type: DataTypes.STRING(4000), field: 'module_description_ftxt' },
      imageUrlEng: { type: DataTypes.STRING, field: 'module_image_url_etxt' },
      imageUrlFra: { type: DataTypes.STRING, field: 'module_image_url_ftxt' },
      iconUrlEng: { type: DataTypes.STRING, field: 'icon_url_etxt' },
      iconUrlFra: { type: DataTypes.STRING, field: 'icon_url_ftxt' },
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
      tableName: 'ta001_module'
    }
  );
  Module.associate = (models) => {
    models.Module.hasMany(models.Phase, { foreignKey: 'module_cd', sourceKey: 'moduleId' });
  };
  // Module.hasMany(sequelize.models.Phase, { foreignKey: 'module_cd', sourcKey: 'moduleId' });
  // sequelize.query('CREATE TRIGGER ta001_tg1_bu_date_last_update' +
  //   ' BEFORE UPDATE ' +
  //   ' ON dc_admin.ta001_module' +
  //   ' FOR EACH ROW' +
  //   ' EXECUTE PROCEDURE dc_admin.trigger_set_date_last_update_timestamp();'
  //   );

  return Module;
};

module.exports = (sequelize, DataTypes) => {
  const QuizType = sequelize.define(
    'QuizType',
    {
      quizTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'quiz_type_cd'
      },
      typeNameEng: { type: DataTypes.STRING, unique: true, field: 'quiz_type_etxt' },
      typeNameFra: { type: DataTypes.STRING, unique: true, field: 'quiz_type_ftxt' },
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
      tableName: 'ta006_quiz_type'
    }
  );
  QuizType.associate = (models) => {
    models.QuizType.hasOne(models.Quiz, {
      foreignKey: 'quiz_type_cd',
      targetKey: 'quizTypeId'
    });
  };
  return QuizType;
};

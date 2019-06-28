module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    'Question',
    {
      questionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'question_cd'
      },
      quizId: { type: DataTypes.INTEGER, field: 'quiz_cd' },
      questionEng: { type: DataTypes.STRING, unique: true, field: 'question_etxt' },
      questionFra: { type: DataTypes.STRING, unique: true, field: 'question_ftxt' },
      questionDescEng: { type: DataTypes.STRING(4000), field: 'explanation_etxt' },
      questionDescFra: { type: DataTypes.STRING(4000), field: 'explanation_ftxt' },
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
      tableName: 'sa002_question'
    }
  );
  Question.associate = (models) => {
    models.Question.belongsTo(models.Quiz, { foreignKey: 'quiz_cd', sourceKey: 'quizId' });
    models.Question.hasMany(models.Alternative, { foreignKey: 'question_cd', sourceKey: 'questionId' });
  };

  return Question;
};

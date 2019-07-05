module.exports = (sequelize, DataTypes) => {
  const Alternative = sequelize.define(
    'Alternative',
    {
      alternativeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'alternative_cd'
      },
      questionId: { type: DataTypes.INTEGER, field: 'question_cd' },
      answerEng: { type: DataTypes.STRING, field: 'alternative_etxt' },
      answerFra: { type: DataTypes.STRING, field: 'alternative_ftxt' },
      correctAnswerIndicator: { type: DataTypes.BOOLEAN, field: 'correct_alternative_ind' },
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
      tableName: 'sa003_alternative'
    }
  );
  Alternative.associate = (models) => {
    models.Alternative.belongsTo(models.Question, { foreignKey: 'question_cd', sourceKey: 'questionId' });
  };

  return Alternative;
};

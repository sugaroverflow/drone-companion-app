module.exports = (sequelize, DataTypes) => {
  const Quiz = sequelize.define(
    'Quiz',
    {
      quizId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'quiz_cd'
      },
      taskId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: 'sa001_ak2',
        field: 'task_cd'
      },
      quizTypeId: { type: DataTypes.INTEGER, unique: 'sa001_ak2', field: 'quiz_type_cd' },
      quizTitleEng: { type: DataTypes.STRING, unique: true, field: 'quiz_title_etxt' },
      quizTitleFra: { type: DataTypes.STRING, unique: true, field: 'quiz_title_ftxt' },
      quizDescEng: { type: DataTypes.STRING(4000), field: 'quiz_description_etxt' },
      quizDescFra: { type: DataTypes.STRING(4000), field: 'quiz_description_ftxt' },
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
      tableName: 'sa001_quiz'
      // indexes: [
      //   {
      //     unique: true,
      //     fields: ['task_cd', 'quiz_type_cd']
      //   }
      // ]
    }
  );
  Quiz.associate = (models) => {
    models.Quiz.hasMany(models.Question, { foreignKey: 'quiz_cd', sourceKey: 'quizId' });
    models.Quiz.belongsTo(models.Task, { foreignKey: 'task_cd', sourceKey: 'taskId' });
    models.Quiz.belongsToMany(models.User, { through: models.UserQuizCompleted, foreignKey: 'quiz_cd' });
  };

  return Quiz;
};

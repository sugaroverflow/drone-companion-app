module.exports = (sequelize, DataTypes) => {
  const UserQuizCompleted = sequelize.define(
    'UserQuizCompleted',
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'stakeholder_id'
      },
      quizCd: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'quiz_cd'
      },
      alternativeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'alternative_cd'
      },
      correctAnswerIndicator: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'correct_alternative_ind'
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
      tableName: 'sm521_xref_user_quiz_completed'
    }
  );
  // UserStepCompleted.associate = (models) => {
  //   models.UserStepCompleted.belongsToMany(models.Step, {
  //     as: 'User',
  //     through: 'sm520_xref_user_step_completed',
  //     foreignKey: 'stakeholder_id'
  //   });
  // };

  return UserQuizCompleted;
};

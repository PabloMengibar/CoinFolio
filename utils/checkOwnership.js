const checkOwnership = (entity, user) => {
  return entity.UserId === user.id || user.role === "premium";
};

module.exports = checkOwnership;

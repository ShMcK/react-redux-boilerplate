module.exports = function timeStamp(user) {
  // update time stamps
  const now = new Date()
  user.updatedAt = now

  if (!user.createdAt) {
    user.createdAt = now
    return user
  } else {
    user.isNewUser = false
    return user
  }
  
}
const Comment = require('./Comment');
const User = require('./User');
const Post = require('./Post');

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
});


User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
Comment.belongsTo(Post, {
});
  
module.exports = {User, Post, Comment};
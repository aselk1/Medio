from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class LikeComment(db.Model):
    __tablename__ = 'like_comment'
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    comment_id = db.Column(db.Integer, db.ForeignKey("comments.id"))

    user = db.relationship("User", back_populates="likeStory")
    comment = db.relationship("Comment", back_populates="likeStory")

    def to_dict(self):
        return {
            "user_id": self.user_id,
            "comment_id": self.story_id
        }

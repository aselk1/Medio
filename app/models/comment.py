from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Comment(db.Model):
    __tablename__ = 'comments'
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    story_id = db.Column(db.Integer, db.ForeignKey("stories.id"))
    user = db.relationship("User", back_populates="comments")
    story = db.relationship("Story", back_populates="comments")

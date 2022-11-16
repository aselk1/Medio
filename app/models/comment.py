from flask_sqlalchemy import SQLAlchemy
from .db import db
from app.models.user import like_comment


class Comment(db.Model):
    __tablename__ = 'comments'
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    story_id = db.Column(db.Integer, db.ForeignKey("stories.id"))
    user = db.relationship("User", back_populates="comments")
    story = db.relationship("Story", back_populates="comments")

    liked_comment_user = db.relationship(
        "User", 
        secondary=like_comment,
        lazy='dynamic',
        back_populates = 'liked_comment')

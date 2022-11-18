from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from app.models.user import like_story


class Story(db.Model):
    __tablename__ = 'stories'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    body = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    user = db.relationship("User", lazy='joined', back_populates="stories")
    comments = db.relationship("Comment", back_populates="story")

    liked_story_user = db.relationship(
        "User",
        secondary=like_story,
        lazy='dynamic',
        back_populates = 'liked')


    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'body': self.body,
            'user_id': self.user_id,
            'User': self.user.to_dict(),
            'Comments': [comment.to_dict() for comment in self.comments]
        }

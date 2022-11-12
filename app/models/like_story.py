from flask_sqlalchemy import SQLAlchemy
from .story import Story
from .user import User

db = SQLAlchemy()

likeStory = db.Table(
    "likeStory",
    Base.metadata,
    db.Column("user_id", db.Integer, db.ForeignKey("users.id")),
    db.Column("story_id", db.Integer, db.ForeignKey("stories.id"))
)

class LikeStory(db.Model):
    __tablename__ = 'like_stories'
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    story_id = db.Column(db.Integer, db.ForeignKey("stories.id"))

    user = db.relationship("User",
                            secondary=likeStory, 
                            back_populates="likeStory"
                        )

    def to_dict(self):
        return {
            "user_id": self.user_id,
            "story_id": self.story_id
        }

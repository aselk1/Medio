from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired, ValidationError
# from app.models import User

class LikesStoriesForm(FlaskForm):
    user_id = IntegerField('User Id',[DataRequired()])
    story_id = IntegerField('Story Id',[DataRequired()])


class LikesCommentsForm(FlaskForm):
    user_id = IntegerField('User Id',[DataRequired()])
    comment_id = IntegerField('Comment Id',[DataRequired()])



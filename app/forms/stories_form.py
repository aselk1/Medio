from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError


class SignUpForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    body = StringField('body', validators=[DataRequired()])

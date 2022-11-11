from flask import Blueprint, request
from app.models import Story

stories_routes = Blueprint('stories', __name__)

@stories_routes.route('/')
def get_stories():
    data = Story.query.all()
    return {'data': [story.to_dict() for story in data]}


@stories_routes.route('/', methods=['POST'])
def post_story():
    data = request.json
    story = Story(title=data['title'],
                body=data['body'],
                user_id=data['user_id']
                )

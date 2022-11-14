from flask import Blueprint, request
from app.models import Story, db

stories_routes = Blueprint('stories', __name__)

@stories_routes.route('')
def get_stories():
    data = Story.query.all()
    print(data)
    return {'data': [story.to_dict() for story in data]}


@stories_routes.route('', methods=['POST'])
def post_story():
    data = request.json
    print(data)
    story = Story(title=data['title'],
                body=data['body'],
                user_id=data['user_id']
                )
    db.session.add(story)
    db.session.commit()
    return story.to_dict()

@stories_routes.route('/<int:id>',  methods=['PUT'])
def edit_story(id):
    data = request.json
    story = Story.query.get(id)
    story.title = data['title']
    story.body = data['body']
    db.session.add(story)
    db.session.commit()
    return story.to_dict()

@stories_routes.route('/<int:id>', methods=['DELETE'])
def delete_story(id):
    story = Story.query.get(id)
    db.session.delete(story)
    db.session.commit()
    return story.to_dict()

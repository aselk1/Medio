from flask import Blueprint, request
from flask_login import login_required
from app.models.comment import Comment
from app.models import db

comments_routes = Blueprint('comments', __name__)

@comments_routes.route('/stories/<int:id>/comments')
@login_required
def get_comments():
    """
    Query for all comments for a story and returns them in a list of dictionaries
    """
    comments = Comment.query.all()
    return {'comments': [comment.to_dict() for comment in comments]}

@comments_routes.route('/stories/<int:id>/comments', methods=['POST'])
@login_required
def post_comment():
    """
    Posts a comment to a story
    """
    data = request.json()
    comment = Comment(body=data['Body'],
                      user_id=data['user_id'],
                      story_id=data['story_id'])
    db.session.add(comment)
    db.session.commit()
    return comment.to_dict()

@comments_routes.route('/comments/<int:id>', methods=['PUT'])
@login_required
def fix_comment(id):
    """
    Query for a single comment and edit that comment
    """
    data = request.json()
    comment = Comment.query.get(id)
    comment.body = data['body']
    db.session.add(comment)
    db.session.commit()
    return comment.to_dict()

@comments_routes.route('/comments/<int:id>', methods=['DELETE'])
@login_required
def remove_comment():
    """
    Query for all comments for a story and returns them in a list of dictionaries
    """
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return "Successfully Deleted"

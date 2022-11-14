from flask import Blueprint
from flask_login import login_required
from app.models.comment import Comment

comments_routes = Blueprint('comments', __name__)

@comments_routes.route('/stories/<int:id>/comments')
@login_required
def users():
    """
    Query for all comments for a story and returns them in a list of dictionaries
    """
    comments = Comment.query.all()
    return {'comments': [comment.to_dict() for comment in comments]}

@comments_routes.route('/stories/<int:id>/comments', methods=['POST'])
@login_required
def users():
    """
    Posts a comment to a story
    """
    
    return {'comments': [comment.to_dict() for comment in comments]}


@comments_routes.route('/comments/<int:id>', methods=['PATCH'])
@login_required
def users():
    """
    Query for all comments for a story and returns them in a list of dictionaries
    """
    comments = Comment.query.all()
    return {'comments': [comment.to_dict() for comment in comments]}

@comments_routes.route('/comments/<int:id>', methods=['DELETE'])
@login_required
def users():
    """
    Query for all comments for a story and returns them in a list of dictionaries
    """
    comments = Comment.query.all()
    return {'comments': [comment.to_dict() for comment in comments]}

from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models.comment import Comment
from app.models import db, User

comments_routes = Blueprint('comments', __name__)

@comments_routes.route('/<int:id>', methods=['PUT'])
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

@comments_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def remove_comment():
    """
    Query for all comments for a story and returns them in a list of dictionaries
    """
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return "Successfully Deleted"

# ====================likes comments====================================

#get like story
@comments_routes.route('/<int:id>/likes')
def get_like(id):
    comment = Comment.query.get(id)
    num = comment.liked_comment_user.count()
    all_liked_user =  comment.liked_comment_user.all()
    num_like = {
        'comment_id':comment.id,
        'story_id':comment.story_id,
        'num':num,
        'allUser':[(user.id) for user in all_liked_user]
    }
    
    return num_like
    
#post like comment
@comments_routes.route('/<int:id>/likes', methods=['POST'])
@login_required
def post_like(id):
    comment = Comment.query.get(id)
    like_comment_user = User.query.get(current_user.id)
    all_liked_user = comment.liked_comment_user.all()
    
    if not all_liked_user:
        comment.liked_comment_user.append(like_comment_user)
        db.session.commit()
    else:
        for user in all_liked_user:
            if user.id == current_user.id:
                return "You already left a comment on this story"
            else:
                comment.liked_comment_user.append(like_comment_user)
                db.session.commit()

    # the number of like for the comment
    num = comment.liked_comment_user.count()
    print("the number of like comment",num)

    num_like = {
        'comment_id':comment.id,
        'story_id': comment.story_id,
        'num':num
    }
      
    return num_like

#delete like of one comment,  for the unlike button
@comments_routes.route('/<int:id>/likes', methods=['DELETE'])
@login_required
def delete_like(id):
    comment = Comment.query.get(id)
    like_comment_user = User.query.get(current_user.id)
    all_liked_user =  comment.liked_comment_user.all()

    users = [ user.id for user in all_liked_user]
    print("users ??????",users)
    if like_comment_user.id in users:
        comment.liked_comment_user.remove(like_comment_user)
    else:
        return "You haven't click the like"

    db.session.commit()

    return "unlike"
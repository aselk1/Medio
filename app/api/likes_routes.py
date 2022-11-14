from flask import Blueprint
from ..models import LikeComment, LikeStory, db

likes_routes = Blueprint('likes', __name__)

# ====================likes stories====================================

#get all likes 
@likes_routes.route('/')
def get_likes_story():
    likes = LikeComment.query.all()
    return likes

#get likes of one story
@likes_routes.route('/<int:id>/likes')
def get_one_story_like(id):
    like= LikeStory.query.get(id)
    return like

#post like of one story
@likes_routes.route('/<int:id>/likes', methods=['POST'])
def get_one_story_like(id):
    form =LikesStoriesForm()
    # data = request.json
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        like = LikeStory(story_id = form.data['story_id'],
                           user_id = form.data['user_id']     
                          )
    db.session.add(like)
    db.session.commit()
    return like

#update like of one story



#delete like of one story
@likes_routes.route('/<int:id>/likes', methods=['DELETE'])
def delete_like(id):
    like = LikeStory.query.get(id)
    db.session.delete(like)
    db.session.commit()
    return like


# ====================likes comments====================================

#get all likes 
@likes_routes.route('/')
def get_likes_story():
    likes = LikeComment.query.all()
    return likes

#get likes of one story
@likes_routes.route('/<int:id>/likes')
def get_one_story_like(id):
    like= LikeComment.query.get(id)
    return like

#post like of one story
@likes_routes.route('/<int:id>/likes', methods=['POST'])
def get_one_story_like(id):
    form =LikesCommentsForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        like = LikeComment(story_id = form.data['story_id'],
                           user_id = form.data['user_id']     
                          )
    db.session.add(like)
    db.session.commit()
    return like

#delete like of one story
@likes_routes.route('/<int:id>/likes', methods=['DELETE'])
def delete_like(id):
    like = LikeComment.query.get(id)
    db.session.delete(like)
    db.session.commit()
    return like




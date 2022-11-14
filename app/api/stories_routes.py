from flask import Blueprint, request
from app.models import Story, db, Comment
from flask_login import login_required

stories_routes = Blueprint('stories', __name__)

@stories_routes.route('')
def get_stories():
    data = Story.query.all()
    print(data)
    return {'data': [story.to_dict() for story in data]}


@stories_routes.route('', methods=['POST'])
@login_required
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
@login_required
def edit_story(id):
    data = request.json
    story = Story.query.get(id)
    story.title = data['title']
    story.body = data['body']
    db.session.add(story)
    db.session.commit()
    return story.to_dict()

@stories_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_story(id):
    story = Story.query.get(id)
    db.session.delete(story)
    db.session.commit()
    return story.to_dict()

@stories_routes.route('/<int:id>/comments')
@login_required
def get_comments():
    """
    Query for all comments for a story and returns them in a list of dictionaries
    """
    comments = Comment.query.all()
    return {'comments': [comment.to_dict() for comment in comments]}

@stories_routes.route('/<int:id>/comments', methods=['POST'])
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

# ====================likes stories====================================

#get all likes 
@stories_routes.route('/')
def get_likes_story():
    likes = like_story.query.all()
    return likes

#get likes of one story
@stories_routes.route('/<int:id>/likes')
def get_one_story_like(id):
    like= like_story.query.filter(story_id==id)
    return like

#post like story
@stories_routes.route('/<int:id>/likes', methods=['POST'])
@login_required
def post_like(id):
    story = Story.query.get(id)
    user = User.query.get(current_user.id)
    # if user.liked.story_id == id
    user.liked.append(story)
    
    

    allStory = user.liked
    print ("one story???", allStory[0].to_dict())
    # what = user.users.all()
    # num = like_story.query.filter(story_id == id)

    print("current user",current_user.id)
    print ("all like story?????",allStory)
    # print ("the number of like",num)
    # print("what????????",what)


    # allUser=story.likedUser.all()
    # print("all users ???????", allUser)
  
    db.session.commit()
    return "like"



#delete like of one story
@stories_routes.route('/<int:id>/likes', methods=['DELETE'])
@login_required
def delete_like(id):
    user = User.query.get(current_user.id)
    user.liked.remove(user)
    db.session.commit()
    return "unlike"


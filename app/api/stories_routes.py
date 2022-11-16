from flask import Blueprint, request
from sqlalchemy.orm import relationship, sessionmaker, joinedload
from app.models import Story, db, Comment, User
from flask_login import login_required, current_user
from app.forms import StoryForm

stories_routes = Blueprint('stories', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@stories_routes.route('')
def get_stories():
    data = Story.query.all()
    return {story.to_dict()['id']: story.to_dict() for story in data}

@stories_routes.route('/<int:id>')
def get_story(id):
    data = Story.query.get(id)
    return data.to_dict()


@stories_routes.route('', methods=['POST'])
@login_required
def post_story():
    form = StoryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        story = Story(title=form.data['title'],
                    body=form.data['body'],
                    user_id=current_user.id
                    )
        db.session.add(story)
        db.session.commit()
        return story.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@stories_routes.route('/<int:id>',  methods=['PUT'])
@login_required
def edit_story(id):
    story = Story.query.get(id)
    if current_user.id == story.user_id:
        form = StoryForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            story.title = form.data['title']
            story.body = form.data['body']
            db.session.add(story)
            db.session.commit()
            return story.to_dict()
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    return {'errors': ['Unauthorized']}


@stories_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_story(id):
    story = Story.query.get(id)
    if current_user.id == story.user_id:
        db.session.delete(story)
        db.session.commit()
        return story.to_dict()
    return {'errors': ['Unauthorized']}

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

#post like story
@stories_routes.route('/<int:id>/likes', methods=['POST'])
@login_required
def post_like(id):
    story = Story.query.get(id)
    like_story_user = User.query.get(current_user.id)
    all_liked_user =  story.liked_story_user.all()

    if not all_liked_user:
        story.liked_story_user.append(like_story_user)
        db.session.commit()
    else:

        for user in all_liked_user:
            if user.id == current_user.id:
                return "You already clicked"
            else:
                story.liked_story_user.append(like_story_user)
                db.session.commit()

    # the number of like for the story
    num = story.liked_story_user.count()
    print ("current_user id", current_user.id)
    print("the number of like story",num)

    num_like = {
        'story_id':story.id,
        'num':num
    }

    return num_like

#delete like of one story,  for the unlike button

@stories_routes.route('/<int:id>/likes', methods=['DELETE'])
@login_required
def delete_like(id):
    story = Story.query.get(id)
    user = User.query.get(current_user.id)
    all_liked_user =  story.liked_story_user.all()

    for user in all_liked_user:
        if user.id == current_user.id:
            story.liked_story_user.remove(user)
            db.session.commit()
        else:
            return "You havn't click the like"

    return "unlike"

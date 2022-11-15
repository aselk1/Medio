from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import db, User

followers_routes = Blueprint("followers", __name__)


@followers_routes.route("/<int:id>")
@login_required
def follower(id):
    user = User.query.get(id)
    following = user.following.all()
    following_users = [(follower.id,follower.username) for follower in following]
    print('users', following_users)
    users = {}
    for i in range(len(following_users)):
        users['id'] = following_users[i][0]
        users['username'] = following_users[i][1]
    print('users dictionary', users)
    return user.to_dict()


@followers_routes.route("", methods=["POST"])
@login_required
def follow():
    # pass in follower and followed id's from frontend
    # use those parameters on lines 27 and 28 instead
    req_body = request.json
    user_followed = User.query.get(req_body["followed_id"])
    user_follower = User.query.get(req_body["follower_id"])
    user_followed.followers.append(user_follower)
    db.session.commit()
    #  not sure what we should return here. Maybe a sucess message or a redirection on the frontend
    return f"{user_followed.username} is followed by {user_follower.username}"


@followers_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def unfollow(id):
    req_body = request.json
    user_follower = User.query.get(id)
    user_followed = User.query.get(req_body["followed_id"])
    print(user_follower.id)
    # user_follower.followers.remove(user_followed.id)
    # db.session.commit()
    return f"{user_follower.id} deleted"
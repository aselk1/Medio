from flask import Blueprint, request
from flask_login import login_required
from app.models import db, User

followers_routes = Blueprint("followers", __name__)

# I am able to follow other users
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
    updated_followers = user_followed.followers.all()
    users = {}
    for i in range(len(updated_followers)):
        users[i]=updated_followers[i].to_dict()
    return users

#  I am able to unfollow other users
@followers_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def unfollow(id):
    req_body = request.json
    user_follower = User.query.get(req_body['follower_id'])
    user_followed = User.query.get(int(id))
    user_followed.followers.remove(user_follower)
    db.session.commit()
    updated_followers = user_followed.followers.all()
    users = {}
    for i in range(len(updated_followers)):
        users[i]=updated_followers[i].to_dict()
    return users
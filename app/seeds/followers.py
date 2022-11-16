from app.models import db, User, environment, SCHEMA

user1 = User.query.get(1)
user2 = User.query.get(2)
user3 = User.query.get(3)

def seed_followers():
    one = User.followers(follower_id=2, followed_id=1)
    two = User.followers(follower_id=3, followed_id=1)
    three = User.followers(follower_id=1, followed_id=2)
    four = User.followers(follower_id=3, followed_id=2)
    five = User.followers(follower_id=2, followed_id=3)
    six = User.followers(follower_id=1, followed_id=3)
    
    db.session.add(one)
    db.session.add(two)
    db.session.add(three)
    db.session.add(four)
    db.session.add(five)
    db.session.add(six)
    db.session.commit()

def undo_followers():
    if environment == 'production':
        db.session.execute(f"TRUNCATE table {SCHEMA}.follows RESTART IDENTITY CASCADE;")
    else:
        db.session.execute('DELETE FROM follows')
    db.session.commit()
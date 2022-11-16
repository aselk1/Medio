from app.models import db,environment, SCHEMA, Story


# Adds a demo user, you can add other users here if you want
def seed_stories():
    story1 = Story(title='test1', body='good', user_id=1)
    story2 = Story(title='test2', body='nice', user_id=2)
    story3 = Story(title='test3', body='great', user_id=3)
    story4 = Story(title='test4', body='wonderful', user_id=4)
    story5 = Story(title='test5', body='amazing', user_id=5)
    story6 = Story(title='test6', body='astonishing', user_id=6)
   

    db.session.add(story1)
    db.session.add(story2)
    db.session.add(story3)
    db.session.add(story4)
    db.session.add(story5)
    db.session.add(story6)
    db.session.commit()



# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_stories():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.stories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM stories")
        
    db.session.commit()
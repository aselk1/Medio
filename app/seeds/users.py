from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='Marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='Bobbie', email='bobbie@aa.io', password='password')
    test1 = User(
        username='Hunter', email='test1@aa.io', password='password2')
    test2 = User(
        username='Melanie', email='test2@aa.io', password='password3')
    test3 = User(
        username='Robert', email='test3@aa.io', password='password4')
    test4 = User(
        username='Anna', email='test4@aa.io', password='password5')
    test5 = User(
        username='Chadwick', email='test5@aa.io', password='password6')
    test6 = User(
        username='Ronald', email='test6@aa.io', password='password7')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(test1)
    db.session.add(test2)
    db.session.add(test3)
    db.session.add(test4)
    db.session.add(test5)
    db.session.add(test6)
    db.session.commit()
# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")
        
    db.session.commit()
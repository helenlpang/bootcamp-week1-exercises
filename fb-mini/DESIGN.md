Users Table:
- int id
- String first_name
- String last_name
- String password
- String bio
- String profile_pic

Posts
- int id
- int user_id [One-to-many]
- String text
- timestamp date
- int likes

Friends (Joint)
- int id
- int requestor_id [Many-to-many]
- int receiver_id [many-to-many]
- boolean accepted

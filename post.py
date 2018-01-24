from google.appengine.ext import ndb

class Post(ndb.Model):
  """A model for representing a post."""
  title = ndb.StringProperty()
  description = ndb.StringProperty()
  votes = ndb.IntegerProperty()

  def upvote(self):
    self.votes += 1
    self.put()

  def downvote(self):
    self.votes -= 1
    self.put()

  def json(self):
    j = {
      'key': self.key.urlsafe(),
      'title': self.title,
      'description': self.description,
      'votes': self.votes
    }
    return j

def get_all():
  return Post.query()

def get(urlkey):
  return ndb.Key(urlsafe=urlkey).get()

def new(title, description):
  post = Post()
  post.title = title
  post.description = description
  post.votes = 0
  post.put()
  return post

def vote(key, votes):
  post = ndb.Key(urlsafe=key).get()
  if votes > post.votes:
    post.upvote()
  elif votes < post.votes:
    post.downvote()
  return post

def delete(key):
  ndb.Key(urlsafe=key).delete()

from quart import Quart

from .models import users

app = Quart(__name__)


@app.route('/')
async def hello():
    return 'hello'


@app.route('/api/users', methods=['GET'])
async def send_users():
    return users.get_users()

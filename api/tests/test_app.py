import pytest
from .context import app


@pytest.fixture(name='testapp')
def _test_app():
    return app


@pytest.mark.asyncio
async def test_app(testapp):
    client = testapp.test_client()
    response = await client.get('/')
    assert response.status_code == 200
    result = await response.get_data()
    assert result == b'hello'


@pytest.mark.asyncio
async def test_get_users(testapp):
    client = testapp.test_client()
    data = {'name': 'Tim', 'age': '23'}
    response = await client.get('/api/users')
    assert response.status_code == 200
    result = await response.get_json()
    assert result == data

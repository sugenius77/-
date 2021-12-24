from flask import Blueprint
import json
bp = Blueprint('main', __name__, url_prefix='/')


@bp.route('/test',methods=['GET'])
def test_get():

    test_data = {"members": ["Member1", "Member2", "Member3"]}
    return test_data
        
    
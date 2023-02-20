# Web Socket Imports
from fastapi import FastAPI, WebSocket
from fastapi.responses import HTMLResponse, FileResponse
import uvicorn
from fastapi.middleware.wsgi import WSGIMiddleware
from flask import Flask, escape, request, render_template
from maya.bot import getBotResponse

flask_app = Flask(__name__)


@flask_app.route("/")
def flask_main():
    name = request.args.get("name", "World")
    return render_template('index.html')


app = FastAPI()


@app.get("/api")
async def get():
    return HTMLResponse("Hello API")

# Wait for data from client
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        print(data)
        respo = getBotResponse(data) #helper function for model
        print(f'Response: {respo}')
        await websocket.send_json({'data':data, 'respo':respo})


app.mount("/maya", WSGIMiddleware(flask_app))

if __name__ == '__main__':
    uvicorn.run(app)
/**
 * Created by dorsa on 2/15/17.
 */
var chatWindowArray = [];
var config = {
    contextPath: '${pageContext.request.contextPath}'
};
$(document).ready(function(){
    $.cometChat.onLoad({memberListContainerID:'members'});
});
function join(userName){
    $.cometChat.join(userName);
}
function getChatWindowByUserPair(loginUserName, peerUserName) {
    var chatWindow;
    for(var i = 0; i < chatWindowArray.length; i++) {
        var windowInfo = chatWindowArray[i];
        if (windowInfo.loginUserName == loginUserName && windowInfo.peerUserName == peerUserName) {
            chatWindow =  windowInfo.windowObj;
        }
    }
    return chatWindow;
}

function createWindow(loginUserName, peerUserName) {
    var chatWindow = getChatWindowByUserPair(loginUserName, peerUserName);
    if (chatWindow == null) { //Not chat window created before for this user pair.
        chatWindow = new ChatWindow(); //Create new chat window.
        chatWindow.initWindow({
            loginUserName:loginUserName,
            peerUserName:peerUserName,
            windowArray:chatWindowArray});

        //collect all chat windows opended so far.
        var chatWindowInfo = { peerUserName:peerUserName,
            loginUserName:loginUserName,
            windowObj:chatWindow
        };

        chatWindowArray.push(chatWindowInfo);
    }
    chatWindow.show();
    return chatWindow;
}

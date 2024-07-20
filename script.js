function sendChat() {
    const chatBox = document.getElementById('chatBox');
    const chatInput = document.getElementById('chatInput');

    if (chatInput.value.trim() !== '') {
        chatBox.value += chatInput.value + '\n';
        chatInput.value = '';
    }
}

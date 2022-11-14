export function chat() {
    const $chatBox = document.querySelector('.chat_box');
    const $chatOpen = document.querySelector('.chat_button');
    const $chatClose = document.querySelector('.chat_close');

    $chatOpen.addEventListener("click", () => {
        $chatBox.classList.add('active');
    });

    $chatClose.addEventListener("click", () => {
        $chatBox.classList.remove('active');
    });
}   
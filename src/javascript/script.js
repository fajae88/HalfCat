const tabs = document.querySelectorAll('.tab-btn1');

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

const tabClicked = (tab) => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');

    const contents = document.querySelectorAll('.content');
    contents.forEach(contents => contents.classList.remove('show'));

    const contentId = tab.getAttribuite('content-id');
    const content = document.getElementById(contentId);

    content.classList.add('show');
}


//event for listing ==========================================
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('open-click').addEventListener('click', open);
    document.getElementById('close-click').addEventListener('click', close);
});
//log error ==================================================
function onError(error) {
    console.log(`Error: ${error}`);
}
//tab close logic ============================================
function tabclose(tabs) {
    for (let tab of tabs) {
        browser.tabs.remove(tab.id);
    }
}
//tab open logic =============================================
function onCreated(tab) {
    console.log(`Created new tab: ${tab.id}`)
}
//open fuction on click event ================================
function open() {
    let urls = ['https://www.upwork.com/ab/find-work/',
        'https://www.upwork.com/ab/jobs/search/sc/web-development/?sort=recency',
        'https://www.upwork.com/ab/jobs/search/sc/scripts-utilities/?sort=recency',
        'https://www.upwork.com/ab/jobs/search/sc/other-software-development/?sort=recency'
    ]
    for (let up of urls) {
        var creating = browser.tabs.create({
            url: up,
            active: false
        });
        creating.then(onCreated, onError);
    }
}
//close function on click envent ============================

function close() {
    let querying = browser.tabs.query({ url: "*://*.upwork.com/*" }); //matching query for website
    querying.then(tabclose, onError);
}


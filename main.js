

let main = document.getElementById("main");



let u = document.querySelectorAll('div');

let x ;


let videos = [
    {
        src : "1.mp4",
        title : 'ارجع اليهم'
    },
    {
        src : "2.mp4",
        title : "هوا الحبيب اللذي ترجي شفاعنه"
    },
    {
        src : "3.mp4",
        title : "موقظا بالنور"
    },
    {
        src : "4.mp4",
        title : "فؤادي غدا من شة الوجد"
    },
    {
        src : "5.mp4",
        title : "فؤادي غدا من شدة الوجد الطويله"
    },
    {
        src : "6.mp4",
        title : "اخلاقه غزت القلوب بلطفها "
    },
    {
        src : "7.mp4",
        title : "ومن يدع مع الله الاها اخر لا بر هان له"
    },
    {
        src : "8.mp4",
        title : "فرحين بما اتاهم الله من فضله"
    },
    {
        src : "9.mp4",
        title : "بذكر محمد تحيا القلوب"
    },
    {
        src : "10.mp4",
        title : "سماك ربك"
    },
]
let title = document.getElementById('title');
for(let video of videos){
    let list = document.getElementById('list');
    let v = `
        <div onclick="select(this)" class="videoList">
            <video   class="listVideo" src="${video.src}"></video>
            <h3  class="listTitle">${video.title}</h3>
        </div>
    `;
    list.innerHTML+=v;
}
function select( el ){
    x = el.children;
    let child = el;
    console.log(child);
    console.log(x[0].src)
    console.log(x[1].innerHTML)
    title.innerHTML = x[1].innerHTML;
    main.src = x[0].src;
}

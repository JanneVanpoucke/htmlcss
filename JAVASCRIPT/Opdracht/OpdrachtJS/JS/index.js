const inputtext=document.getElementById('inputtext');
const checkboxje=document.getElementById(`checkbox`);
const color=document.getElementById(`color`);
const datetimelocal=document.getElementById(`datetimelocal`);
const date=document.getElementById(`date`);
const email=document.getElementById(`email`);
const file=document.getElementById(`file`);
const image=document.getElementById(`image`);
const month=document.getElementById(`month`);
const numbertje=document.getElementById('number');
const password=document.getElementById(`password`);
const radiootje=document.getElementById(`radio`);
const range=document.getElementById(`range`);
const search=document.getElementById(`search`);
const time=document.getElementById(`time`);
const urltje=document.getElementById(`url`);
const week=document.getElementById(`week`);
const tel=document.getElementById(`tel`);
const textarea=document.getElementById(`textarea`);
const select=document.getElementById(`select`);
const submit=document.getElementById(`submit`);
var arrCode = [];

inputtext.addEventListener('click',function () {
    arrCode.push(" &lt;input type = 'text'&gt;&lt;br&gt;" + "<br>");
    inputtext.style.backgroundColor=`black`;
    inputtext.style.color=`white`;
});
checkboxje.addEventListener('click',function () {
    arrCode.push("&lt;input type='checkbox'&gt;&lt;br&gt;" + "<br>");
    checkboxje.style.backgroundColor=`black`;
    checkboxje.style.color=`white`;
});
color.addEventListener('click',function () {
    arrCode.push("&lt;input type='color'&gt;&lt;br&gt;" + "<br>");
    color.style.backgroundColor=`black`;
    color.style.color=`white`;
});
datetimelocal.addEventListener('click',function () {
    arrCode.push("&lt;input type='datetime-local'&gt;&lt;br&gt;" + "<br>");
    datetimelocal.style.backgroundColor=`black`;
    datetimelocal.style.color=`white`;
});
date.addEventListener('click',function () {
    arrCode.push("&lt;input type='date'&gt;&lt;br&gt;" + "<br>");
    date.style.backgroundColor=`black`;
    date.style.color=`white`;
});
email.addEventListener('click',function () {
    arrCode.push("&lt;input type='email'&gt;&lt;br&gt;" + "<br>");
    email.style.backgroundColor=`black`;
    email.style.color=`white`;
});
file.addEventListener('click',function () {
    arrCode.push("&lt;input type='file'&gt;&lt;br&gt;" + "<br>");
    file.style.backgroundColor=`black`;
    file.style.color=`white`;
});
image.addEventListener('click',function () {
    arrCode.push("&lt;input type='image'&gt;&lt;br&gt;" + "<br>");
    image.style.backgroundColor=`black`;
    image.style.color=`white`;
});
month.addEventListener('click',function () {
    arrCode.push("&lt;input type='month'&gt;&lt;br&gt;"+"<br>");
    month.style.backgroundColor=`black`;
    month.style.color=`white`;
});
numbertje.addEventListener('click',function () {
    arrCode.push("&lt;input type='number'&gt;&lt;br&gt;" + "<br>");
    numbertje.style.backgroundColor=`black`;
    numbertje.style.color=`white`;
});
password.addEventListener('click',function () {
    arrCode.push("&lt;input type='password'&gt;&lt;br&gt;" + "<br>");
    password.style.backgroundColor=`black`;
    password.style.color=`white`;
});
radiootje.addEventListener('click',function () {
    arrCode.push("&lt;input type='radio'&gt;&lt;br&gt;" + "<br>");
    radiootje.style.backgroundColor=`black`;
    radiootje.style.color=`white`;
});
range.addEventListener('click',function () {
    arrCode.push("&lt;input type='range'&gt;&lt;br&gt;" + "<br>");
    range.style.backgroundColor=`black`;
    range.style.color=`white`;
});
search.addEventListener('click',function () {
    arrCode.push("&lt;input type='search'&gt;&lt;br&gt;" + "<br>");
    search.style.backgroundColor=`black`;
    search.style.color=`white`;
});
time.addEventListener('click',function () {
    arrCode.push("&lt;input type='time'&gt;&lt;br&gt;" + "<br>");
    time.style.backgroundColor=`black`;
    time.style.color=`white`;
});
urltje.addEventListener('click',function () {
    arrCode.push("&lt;input type='url'&gt;&lt;br&gt;" + "<br>");
    urltje.style.backgroundColor=`black`;
    urltje.style.color=`white`;
});
week.addEventListener('click',function () {
    arrCode.push("&lt;input type='week'&gt;&lt;br&gt;" + "<br>");
    week.style.backgroundColor=`black`;
    week.style.color=`white`;
});
tel.addEventListener('click',function () {
    arrCode.push("&lt;input type='tel'&gt;&lt;br&gt;" + "<br>");
    tel.style.backgroundColor=`black`;
    tel.style.color=`white`;
});
textarea.addEventListener('click',function () {
    arrCode.push("&lt;textarea name='' id='' cols='10' rows='15'>&lt;/textarea&gt;&lt;br&gt;" + "<br>");
    textarea.style.backgroundColor=`black`;
    textarea.style.color=`white`;
});
select.addEventListener('click',function () {
    arrCode.push("&lt;select name='' id=''&gt;&lt;br&gt;"+ "<br>" +
        "&lt;option value='1'&gt;HTML5&lt;/option&gt;&lt;br&gt;" + "<br>" +
        "&lt;option value='2'&gt;CSS3&lt;/option&gt;&lt;br&gt;"+ "<br>" +
        "&lt;option value='3'&gt;BOOTSTRAP&lt;/option&gt;&lt;br&gt;" + "<br>" +
        "&lt;/select&gt;&lt;br&gt;" + "<br>");
    select.style.backgroundColor=`black`;
    select.style.color=`white`;
});
submit.addEventListener('click',function () {
    arrCode.push("&lt;input type='submit' name='verstuur' value='zenden'&gt;&lt;br&gt;" + "<br>");
    submit.style.backgroundColor=`black`;
    submit.style.color=`white`;
});

function Tonen() {
    document.getElementById("resultaat").innerHTML = arrCode.join(" ");
}
// function Reset(){
//     document.getElementById("wissen").innerHTML = " ";
// }

console.log($);
let clockid = document.getElementById('Clock');
function clock(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    day = (day<10 ? "0":"") + day;
    month = (month<10 ? "0":"") + month;
    year = (year<10 ? "0":"") + year;
    minutes = (minutes<10 ? "0":"") + minutes;
    seconds = (seconds<10 ? "0":"") + seconds;
    
    clockid.innerHTML = `<div id="Date">${day}/${month}/${year}</div><div id="Time">${hours}:${minutes}:${seconds}</div>`
}
setInterval(() => {
    clock();
}, 1000);


$('#ObjectiveLines').hide();
$('#handle1').click(()=>{
    $('.containerToggle').hide(4);
    $('#ObjectiveLines').toggle(500);
});

$('#generalQualification').toggle();
$('#handle2').click(()=>{
    $('.containerToggle').hide();
    $('#generalQualification').toggle(500);
});

$('#proLangKnown').toggle();
$('#handle3').click(()=>{
    $('.containerToggle').hide();
    $('#proLangKnown').toggle(500);
});

$('#webFramework').toggle();
$('#handle4').click(()=>{
    $('.containerToggle').hide();
    $('#webFramework').toggle(500);
});

$('#projectLinesSolve').toggle();
$('#handle5').click(()=>{
    $('.containerToggle').hide();
    $('#projectLinesSolve').toggle(500);
});

$('#frontendProjectLinesSolve').toggle();
$('#handle5i1').click(()=>{
    
    $('#frontendProjectLinesSolve').toggle(500);
});

$('#backendProjectLinesSolve').toggle();
$('#handle5i2').click(()=>{
    
    $('#backendProjectLinesSolve').toggle(500);
});

$('#skillLines').toggle();
$('#handle6').click(()=>{
    $('.containerToggle').hide();
    $('#skillLines').toggle(500);
});

$('#personalInformationLines').toggle();
$('#handle7').click(()=>{
    $('.containerToggle').hide();
    $('#personalInformationLines').toggle(500);
});





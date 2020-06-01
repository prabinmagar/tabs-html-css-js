

const tabHeads = document.querySelectorAll('.tab-head-content'); // all heads
const tabBodys = document.querySelectorAll('.tab-body-content'); // all body content


tabHeads.forEach(function(headBtn, index){
    headBtn.addEventListener('click', function(){

        //removing border from all the heads
        tabHeads.forEach(function(headBtn){
            headBtn.classList.remove('active-border');
        })

        // hiding body content of all the tabs

        tabBodys.forEach(function(bodyCon){
            bodyCon.classList.remove('active-content');
        })

        // now assigning border and body content to the clicked heads 

        headBtn.classList.add('active-border');
        tabBodys[index].classList.add('active-content');
    })
})
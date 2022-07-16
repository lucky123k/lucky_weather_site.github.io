const submitBtn = document.getElementById('submitBtn');

const getinfo = (event) =>{
    event.preventDefault();
    alert('hii');
}

submitBtn.addEventListener('click', getinfo);


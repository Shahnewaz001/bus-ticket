function play(){
    setElementById('home-page');
}

function hideOffer(){
    setElementById('offer-page');
}
function remove(){
    removeElementById('success');
}

function setElementById(id){
    const set = document.getElementById(id);
    const setValue = set.classList.add('hidden');
}
function removeElementById(id){
    const hide = document.getElementById(id);
    const hideValue = hide.classList.remove('hidden');
}


const sitItems = document.getElementsByClassName('grid-item');
for(const sitItem of sitItems){

    sitItem.addEventListener('click',function(event){
        const sitNumber = event.target.innerText;
        const Price =innerRelated('ticket-price');
        const ticketPrice = parseInt(Price);


        const selectResult = document.getElementById('selecte-result');


        const div = document.createElement('div');
        div.classList.add('showing-result')
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');


        p1.innerText = sitNumber;
        p2.innerText = 'Economy';
        p3.innerText = ticketPrice;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectResult.appendChild(div);
        updatedTotalCost(ticketPrice);
        updatedGrandTotal();

        const seats = innerRelated('marked-seat');
        if(seats+1>40){
            alert('limit sesh');
            return;
        }

        // event.target.setAttributes=('disabled', true);
        event.target.style.backgroundColor='green';



        const totalSeat = innerRelated('seat-left');
        document.getElementById('seat-left').innerText = totalSeat-1;
        
        const markSeat = innerRelated('marked-seat');
        document.getElementById('marked-seat').innerText = markSeat +1;
         
    })
}

function innerRelated(id){
    const value =  document.getElementById(id);
    const innerValue = value.innerText;
    const updatedInnerValue = parseInt(innerValue);
    return updatedInnerValue;
}
function updatedTotalCost(ticketPrice){
    const totalCost = innerRelated('inital-price');
    const sum = parseInt(totalCost) + ticketPrice;
    document.getElementById('inital-price').innerText = sum;
}

function updatedGrandTotal(status){
    const totalCost = innerRelated('inital-price');
    if(status===undefined){
        document.getElementById('grand-total').innerText=totalCost;
    }
    else{
        const cuponCode = document.getElementById('cupon-code').value;
        if(cuponCode === 'NEW15'){
            const discount =totalCost * 0.15;
            document.getElementById('grand-total').innerText= totalCost- discount;
        }
        alert('pakhnami korio na');
        
    }
}


  

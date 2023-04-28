const serial=document.getElementById('serial')
const amount=document.getElementById('amount')
const dish=document.getElementById('dish')
const table=document.getElementById('table')
const button=document.getElementById('button')
const dishes=document.getElementById('dishes')
button.addEventListener('click',(e)=>{
    e.preventDefault()
    axios.post(`https://crudcrud.com/api/c60437ff96274ce18985930bc4f01fba/expense/`,{
        price: amount.value,
        dish: dish.value,
        table: table.value
    })
    .then((val)=>{
        const target=document.getElementById(val.data.table)
        const order=document.createElement('li')
        order.setAttribute('id',val.data._id)
        order.appendChild(document.createTextNode(val.data.price+' Rs - '+val.data.table+' - '+val.data.dish+' '))
        
        const deleteDiv=document.createElement('div')
        deleteDiv.setAttribute('class',"btn-group btn-group-sm")
        deleteDiv.setAttribute('role',"group")
        deleteDiv.setAttribute('aria-label',"Small button group")
        const deleteOrder=document.createElement('button')
        deleteOrder.setAttribute('type',"button")
        deleteOrder.setAttribute('class',"btn btn-danger")
        const editOrder=document.createElement('button')
        editOrder.setAttribute('type',"button")
        editOrder.setAttribute('class',"btn btn-success")
        deleteOrder.appendChild(document.createTextNode('Delete'))
        editOrder.appendChild(document.createTextNode('Edit'))
        deleteDiv.appendChild(deleteOrder)
        deleteDiv.appendChild(editOrder)

        order.appendChild(deleteDiv)
        target.appendChild(order)
    })
})
dishes.addEventListener('click', function lala(e){
    e.preventDefault()
    if(e.target.classList.contains('btn-danger')){
        const parent=e.target.parentElement
        const Super=parent.parentElement
        const removal=document.getElementById(Super.parentElement.id)
        axios.delete(`https://crudcrud.com/api/c60437ff96274ce18985930bc4f01fba/expense/${Super.id}`)
        removal.removeChild(Super)
    }
})
// dishes.addEventListener('click', (e)=>{
//     e.preventDefault()
//     if(e.target.classList.contains('btn-success')){
//         const parent=e.target.parentElement
//         const Super=parent.parentElement
//         const removal=document.getElementById(Super.parentElement.id)
//         removal.removeChild(Super)
//     }
// })
window.addEventListener('DOMContentLoaded',()=>{
    axios.get(`https://crudcrud.com/api/c60437ff96274ce18985930bc4f01fba/expense/`)
    .then((val)=>{
        for(i=0;i<val.data.length;i++){
            const target=document.getElementById(val.data[i].table)
            const order=document.createElement('li')
            order.setAttribute('id',val.data[i].id)
            order.appendChild(document.createTextNode(val.data[i].price+' Rs - '+val.data[i].table+' - '+val.data[i].dish+' '))
            
            const deleteDiv=document.createElement('div')
            deleteDiv.setAttribute('class',"btn-group btn-group-sm")
            deleteDiv.setAttribute('role',"group")
            deleteDiv.setAttribute('aria-label',"Small button group")
            const deleteOrder=document.createElement('button')
            deleteOrder.setAttribute('type',"button")
            deleteOrder.setAttribute('class',"btn btn-danger")
            const editOrder=document.createElement('button')
            editOrder.setAttribute('type',"button")
            editOrder.setAttribute('class',"btn btn-success")
            deleteOrder.appendChild(document.createTextNode('Delete'))
            editOrder.appendChild(document.createTextNode('Edit'))
            deleteDiv.appendChild(deleteOrder)
            deleteDiv.appendChild(editOrder)

            order.appendChild(deleteDiv)
            target.appendChild(order)
        }
    })
})
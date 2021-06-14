const output = document.getElementById("output")

const percentButtons = document.querySelectorAll('#percent')
const customButton = document.getElementById('customButton')


percentButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        let percentage = parseFloat(button.innerHTML) / 100
        output.innerHTML = percentage * parseFloat(document.getElementById('bill').value)
    })
})

customButton.addEventListener('click', ()=>{
    let percentage = parseFloat(document.getElementById('customInput').value) / 100
    output.innerHTML = percentage * parseFloat(document.getElementById('bill').value)
})

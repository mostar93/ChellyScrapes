

function findAll(){
    var Leads = []
    var leads = Array.from(document.getElementsByClassName('meta'))
    console.log(leads)
    Leads.push('-,Name,Email,Phone,Title,Sub-title,Region\n')
    leads.forEach(l => {
        var row = ''
        row = row + (Array.from(l.getElementsByTagName('a'))[0].innerText) + ','
        row = row + (Array.from(l.getElementsByTagName('a'))[1].innerText).split('at ')[1] + ','
        row = row + (Array.from(l.getElementsByTagName('a'))[2].innerText).split('call ')[1] + ','
        row = row + Array.from(l.getElementsByTagName('h4'))[1].innerText + '\n'
        Leads.push(row)
        
    })
    chrome.runtime.sendMessage(Leads);
}







findAll();






import { dummyData } from "./data.js"


let folder1 = document.querySelector('.folder-1')
let folder2 = document.querySelector('.folder-2')
let folder3 = document.querySelector('.folder-3')
let folderonedrop = document.querySelector('.folder-1-drop')
let foldertwodrop = document.querySelector('.folder-2-drop')
let folderthreedrop = document.querySelector('.folder-3-drop')

folder1.addEventListener('click', () => {
    if (folderonedrop.classList.contains('unactive')) {
        folder1.innerHTML = `<span ><i class="fas fa-folder"></i> Products</span> <i class="fa-solid fa-caret-up"></i></div>`
        folderonedrop.classList.remove('unactive')
    } else {
        folder1.innerHTML = `<span ><i class="fas fa-folder"></i> Products</span> <i class="fa-solid fa-caret-down"></i></div>`
        folderonedrop.classList.add('unactive')
    }
    folder2.innerHTML = `<span ><i class="fas fa-folder"></i> Sales</span> <i class="fa-solid fa-caret-down"></i></div>`
    folder3.innerHTML = `<span ><i class="fas fa-folder"></i> Design</span> <i class="fa-solid fa-caret-down"></i></div>`
    foldertwodrop.classList.add('unactive')
    folderthreedrop.classList.add('unactive')
})
folder2.addEventListener('click', () => {
    if (foldertwodrop.classList.contains('unactive')) {
        folder2.innerHTML = `<span ><i class="fas fa-folder"></i> Sales</span> <i class="fa-solid fa-caret-up"></i></div>`
        foldertwodrop.classList.remove('unactive')
    } else {
        folder2.innerHTML = `<span ><i class="fas fa-folder"></i> Sales</span> <i class="fa-solid fa-caret-down"></i></div>`
        foldertwodrop.classList.add('unactive')
    }
    folder1.innerHTML = `<span ><i class="fas fa-folder"></i> Products</span> <i class="fa-solid fa-caret-down"></i></div>`
    folder3.innerHTML = `<span ><i class="fas fa-folder"></i> Design</span> <i class="fa-solid fa-caret-down"></i></div>`
    folderonedrop.classList.add('unactive')
    folderthreedrop.classList.add('unactive')
})
folder3.addEventListener('click', () => {
    if (folderthreedrop.classList.contains('unactive')) {
        folder3.innerHTML = `<span ><i class="fas fa-folder"></i> Design</span> <i class="fa-solid fa-caret-up"></i></div>`
        folderthreedrop.classList.remove('unactive')
    } else {
        folder3.innerHTML = `<span ><i class="fas fa-folder"></i> Design</span> <i class="fa-solid fa-caret-down"></i></div>`
        folderthreedrop.classList.add('unactive')
    }
    folder1.innerHTML = `<span ><i class="fas fa-folder"></i> Products</span> <i class="fa-solid fa-caret-down"></i></div>`
    folder2.innerHTML = `<span ><i class="fas fa-folder"></i> Sales</span> <i class="fa-solid fa-caret-down"></i></div>`
    folderonedrop.classList.add('unactive')
    foldertwodrop.classList.add('unactive')
})





// initial table filling



let tbody = document.querySelector('.table-body')

dummyData.filter(item => (item.brandName.includes(''))).map(item => {
    tbody.innerHTML += `
    <tr>
    <td><input type="checkbox"/> &nbsp; ${item.brandName}</td>
    <td>${item.description}</td>
    <td>${item.keyMembers}</td>
    <td>${item.categories.join(' ')}</td>
    <td>${item.hashtags.join(' ')}</td>
    <td>${item.nextMeeting}</td>
    <td>&nbsp;</td>
  </tr>
    `
})

tbody.innerHTML += `
<tr class="last-row">
<td></td>
<td>+ Add Calculation</td>
<td>+ Add Calculation</td>
<td>+ Add Calculation</td>
<td>+ Add Calculation</td>
</tr>
`


//top search filter functionality

let str = ""

document.querySelector('.search-input').addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        str = e.target.value
        str = str.trim().toLowerCase()
        console.log(str)
        tbody.innerHTML = ''
        dummyData
            .filter(item => (item.brandName.toLowerCase().includes(str)))
            .map(item => {
                tbody.innerHTML += `
            <tr>
            <td><input type="checkbox"/> &nbsp; ${item.brandName}</td>
            <td>${item.description}</td>
            <td>${item.keyMembers}</td>
            <td>${item.categories.join(' ')}</td>
            <td>${item.hashtags.join(' ')}</td>
            <td>${item.nextMeeting}</td>
            <td>&nbsp;</td>
          </tr>
            `
            })
        tbody.innerHTML += `
<tr class="last-row">
<td></td>
<td>+ Add Calculation</td>
<td>+ Add Calculation</td>
<td>+ Add Calculation</td>
<td>+ Add Calculation</td>
</tr>
`

    }
})


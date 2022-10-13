let ListSection = document.querySelector("#List");
let ListOfPeople = document.querySelector("#ListOfPeople");
let AddPeople = document.querySelector("#AddPeopleSection");


let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');


function Add() {
    List.style.display = "none";
    AddPeopleSection.style.display = "block";
}

function Cancel() {
    List.style.display = "block";
    AddPeopleSection.style.display = "none";

}

function Save() {
    let FirstName = firstName.value;
    let LastName = lastName.value;
    let list = document.createElement('li');
    list.className = 'list-group-item';


    list.appendChild(document.createTextNode(FirstName + ' ' + LastName));
    ListOfPeoples.appendChild(list);
    AddPeopleSection.style.display = "none";
    ListSection.style.display = "block";
}

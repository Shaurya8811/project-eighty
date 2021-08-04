
var guestname = document.getElementById("name1").Value;
name_of_people.push(guestname);
var guestname = document.getElementById("name2").Value;
name_of_people.push(guestname);
var guestname = document.getElementById("name3").Value;
name_of_people.push(guestname);
var guestname = document.getElementById("name4").Value;
name_of_people.push(guestname);
name_of_people.sort();

function submit()

var display_guest_array = [];
for (var j = 1; j<=5; j++)
{
var name_of_the_guest = document.getElementById("name_of_the_guest_" +j).value;
console.log(name_of_the_guest);
name_of_the_guest_array.push(name_of_the_guest);
}

console.log(name_of_the_guest_array);

var lentgh_of_the_guest_array = name_of_the_guest_array.length;
console.log(lentgh_of_the_guest_array);

for (var k=0; k< lentgh_of_the_guest_array; k++ )
{
display_guest_array.push("<h4>NAME - "+name_of_the_guest_array[k]+ "</h4>");
console.log(display_guest_array);

}

function redirectToForm(type) {
    const url = type === 'resident' ? 'resident.html' : 'nonResident.html';
    window.location.href = url;
  }

function goBack() {
  window.location.href = 'index.html'
}
  
function submitForm() {
  console.log('Do something cool!!!')

  console.log("Name:", name.value.trim());
  if (address) console.log("Address:", address.value.trim());
  if (residency) console.log("Residency:", residency.value.trim());
  if (zip) console.log('Zip:', zip.value.trim());
  console.log("Comment:", comment.value.trim());
}

console.log('hello world')
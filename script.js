function redirectToForm(type) {
    const url = type === 'resident' ? 'resident.html' : 'nonresident.html';
    window.location.href = url;
  }

function goBack() {
  window.location.href = 'index.html'
}
  
  function submitForm() {
    const name = document.getElementById("residentName") || document.getElementById("nonResidentName");
    const address = document.getElementById("residentAddress") || null;
    const residency = document.getElementById("residentTime") || null;
    const zip = document.getElementById("nonResidentZip") || null;
    const comment = document.getElementById("residentComment") || document.getElementById("nonResidentComment");
  
    // Log form data to console
    console.log("Name:", name.value.trim());
    if (address) console.log("Address:", address.value.trim());
    if (residency) console.log("Residency:", residency.value.trim());
    if (zip) console.log('Zip:', zip.value.trim());
    console.log("Comment:", comment.value.trim());
    
  
  }
  
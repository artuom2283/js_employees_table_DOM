document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("table tbody"),t=document.createElement("div");t.className="form-container",t.innerHTML='\n    <form class="new-employee-form">\n      <label>Name: <input name="name" type="text" data-qa="name"></label>\n      <label>Position: <input name="position" type="text" data-qa="position"></label>\n      <label>Office:\n        <select name="office" data-qa="office">\n          <option>Tokyo</option>\n          <option>Singapore</option>\n          <option>London</option>\n          <option>New York</option>\n          <option>Edinburgh</option>\n          <option>San Francisco</option>\n        </select>\n      </label>\n      <label>Age: <input name="age" type="number" data-qa="age"></label>\n      <label>Salary: <input name="salary" type="number" data-qa="salary"></label>\n      <button type="button">Save to table</button>\n    </form>\n  ',document.body.appendChild(t);var n=t.querySelector(".new-employee-form");function a(e,t){var n=document.createElement("div");n.className="error"===t?"error":"success",n.setAttribute("data-qa","notification"),n.innerText=e,document.body.appendChild(n),setTimeout(function(){return n.remove()},3e3)}n.querySelector("button").addEventListener("click",function(){var t,o=n.name.value.trim(),r=n.position.value.trim(),l=n.office.value,c=parseInt(n.age.value,10),i=parseFloat(n.salary.value);(o.length<4?(a("Name should be at least 4 characters long","error"),1):r?(c<18||c>90)&&(a("Age should be between 18 and 90","error"),1):(a("Position is required","error"),1))||((t=document.createElement("tr")).innerHTML="\n      <td>".concat(o,"</td>\n      <td>").concat(r,"</td>\n      <td>").concat(l,"</td>\n      <td>").concat(c,"</td>\n      <td>$").concat(i.toFixed(2),"</td>\n    "),e.appendChild(t),a("Employee added successfully","success"),n.reset())})}),document.querySelectorAll("th").forEach(function(e,t){var n=!0;e.addEventListener("click",function(){var e=Array.from(document.querySelectorAll("tbody tr")).sort(function(e,a){var o=e.cells[t].innerText,r=a.cells[t].innerText;return isNaN(parseFloat(o.replace("$","")))||isNaN(parseFloat(r.replace("$","")))?n?o.localeCompare(r):r.localeCompare(o):(o=parseFloat(o.replace("$","")),r=parseFloat(r.replace("$","")),n?o-r:r-o)});n=!n;var a=document.querySelector("tbody");a.innerHTML="",e.forEach(function(e){return a.appendChild(e)})})});
//# sourceMappingURL=index.d80b56b4.js.map
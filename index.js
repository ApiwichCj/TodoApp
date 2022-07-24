var data = [];
var html = '';
$("#btn-add").click(() => {
  html = '';
  data.push($("#txt").val())
  console.log(data);
  for(var i=0; i<data.length; i++) {
    html += `
                    <div id="${i}" class="items">
                        <p>${data[i]}</p>
                        <div class="btn-control">
                            <div onclick="del2do(${i})" class="btn-delete">Delete</div>
                        </div>
                    </div>
                `;
  }
  $("#items-control").html(html);
  $("#txt").val("");
});

function del2do(id) {
  data.splice(id, 1);
  // delete data[id];
  html = '';
  for(var i=0; i<data.length; i++) {
    html += `
                    <div id="${i}" class="items">
                        <p>${data[i]}</p>
                        <div class="btn-control">
                            <div onclick="del2do(${i})" class="btn-delete">Delete</div>
                        </div>
                    </div>
                `;
  }
  $("#items-control").html(html);
}


$(function(){
  const todaysData = data(526, 33);
	//This generates headers
  if(weeklyData.length > 0) {
  	$('.FableTable').append('<div class="row header"></div>');
  	weeklyData.forEach((val) => {
    	$('.FableTable .header').append('<div class="cell">'+(new Date(val.WeekDate).toLocaleDateString())+'</div>')
    })
    
  }
  /*
	if(todaysData.length > 0){
  	const columns = Object.keys(todaysData[0]);
    $('.FableTable').append('<div class="row header"></div>');
    columns.forEach(function(colName, index){
    	if(colName != 'Capacity' && colName != 'FCP' && colName != 'Priority'){
      	$('.FableTable .header').append('<div class="cell">'+colName+'</div>')
    	}
    });
  }
  //*/
  if(todaysData.length > 0) {
  	$('.FableTable').append('<div class="row totals"></div>');
    const fields = Object.keys(todaysData[0]);
    todaysData.forEach(function(rowVal, row) {
      const id = rowVal.FCP;
      $('.FableTable').append('<div class="row" data-rowIndex="'+row+'" data-id="'+id+'"></div>');
      let rowText = '';
      fields.forEach((field, col) => {
        //TODO: create way to filter these less...hardcoded style
        if(field != 'Capacity' && field != 'FCP' && field != 'Priority'){
          rowText += '<div class="cell datacell" data-field="'+field+'">'+rowVal[field]+'</div>';
        }
      });
      $('.row[data-rowIndex="'+row+'"][data-id="'+id+'"]').append(rowText);
    })
    totalUpdate(todaysData);
  }
  
  $('.cell').on('click', (event) => {
  	let cell = $(event.target);
    let cellVal = cell.text();
    cell.attr('data-prev', cellVal);
    cell.text('');
    cell.append('<input type="text" value="'+cellVal+'" class="inlineEdit" />');
    $('.inlineEdit').focus();
    
    $('input').on('focusout', editClose);
    
    $('input').on('blur', editClose);
  });
  
   $(document).keydown(function(e) {
    switch(e.which) {
        case 13: // enter
        	$('.inlineEdit').trigger('focusout');
        break;

        case 9: // tab
        	$('.inlineEdit').trigger('focusout');
        break;

        default: return; // exit this handler for other keys
    }
	});
})

function editClose(event){
	let edit = $(event.target);
  let editVal = edit.val() ? edit.val() : 0;
  const oldVal = edit.parent().attr('data-prev');
  if(oldVal !== editVal){
  	edit.parent().addClass('edited');
  }
  const editedField = edit.parent().attr('data-field');
  edit.parent().text(editVal);
  totalUpdate(undefined, editedField, editVal - oldVal);
}

//TODO: Not a huge fan of using deltas, but addmittedly is much faster
function totalUpdate(dataset, col, delta) {
	if(dataset){
    const fields = Object.keys(dataset[0]);
    fields.forEach((field) => {
      if(field != 'FCP') {
        const fieldTotal = dataset.reduce((tot, val) => {
          return tot + parseInt(val[field]);
        }, 0);
        $('.FableTable .totals').append('<div class="cell total" data-field="'+field+'">'+fieldTotal+'</div>')
      }
    });
  } else {
  	const currTotal = parseInt($('.totals .total[data-field="'+col+'"]').text());
    const newTotal = currTotal + delta;
    $('.totals .total[data-field="'+col+'"]').text(newTotal);
  }
}









var weeklyData = [
            {
               "WeekDate":"2018-12-30T00:00:00.000Z",
               "Quantity":1375,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-01-06T00:00:00.000Z",
               "Quantity":64,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-01-13T00:00:00.000Z",
               "Quantity":1215,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-01-20T00:00:00.000Z",
               "Quantity":30,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-01-27T00:00:00.000Z",
               "Quantity":923,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-02-03T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-02-10T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "Notes":"",
               "WeekDate":"2019-02-17T00:00:00.000Z",
               "RecentlyChanged":false
            },
            {
               "WeekDate":"2019-02-24T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-03-03T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-03-10T00:00:00.000Z",
               "Quantity":809,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-03-17T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-03-24T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-03-31T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-04-07T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-04-14T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-04-21T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-04-28T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-05-05T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-05-12T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-05-19T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-05-26T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-06-02T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-06-09T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-06-16T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-06-23T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-06-30T00:00:00.000Z",
               "Quantity":1079,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-07-07T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-07-14T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-07-21T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-07-28T00:00:00.000Z",
               "Quantity":647,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-08-04T00:00:00.000Z",
               "Quantity":0,
               "RecentlyChanged":true
            },
            {
               "WeekDate":"2019-08-11T00:00:00.000Z",
               "Quantity":1618,
               "RecentlyChanged":true
            }
         ]

const data = (rows, cols) => {
	let retVal = [];
	for(let r = 0; r < rows; r++){
  	let newVal = {
    	FCP: 'FU0' + r
    };
  	for(let c = 1; c<=cols; c++){
      newVal['Col_' + c] = Math.floor(Math.random() * 50);
    }
    retVal.push(newVal);
  }
  return retVal;
}
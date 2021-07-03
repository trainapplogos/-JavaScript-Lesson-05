//
function makeBuffer(){
	var arr = [];
	
	return {
		add: function(value){
			var valstr = value.toString();
			arr.push(valstr);
		},
		print: function(){
			return arr;
		},
		clear: function(){
				arr.length = 0 ;
		}
	}
}

var buffer = makeBuffer();
buffer.add("JavaScript");
buffer.add("we need");
buffer.add("to learn");
buffer.add(0);
buffer.add(1);
buffer.add(0);

console.log(buffer.print());
buffer.clear();
console.log(buffer.print());
function palindroom(tekenReeks){
	let left_pos = 0;
	let right_pos = tekenReeks.length - 1;
	while(right_pos >= left_pos){
		if(tekenReeks[left_pos]  != tekenReeks[right_pos]){
			return false;
		}
		left_pos+=1;
		right_pos-=1;
	}
	return true;
}
document.write(palindroom('eye'));
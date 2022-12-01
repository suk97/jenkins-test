function GetCheckedRow(gridView, dataProvider) {
    let rows = gridView.getCheckedRows(true);
    const boolCheck = dataProvider.getFieldValues('Bool');
    const firstCheckBoxLength = rows.length;
    let secondCheckBoxLength = boolCheck.length;
    let checkedRow = [];
    let index = 0;

    for (let i = 0; i < firstCheckBoxLength; i++) {
        for (let j = 0; j < secondCheckBoxLength; j++) {
            if (rows[i] === j) {
                console.log("boolcheck")
                console.log(boolCheck);
                delete boolCheck[j];
                break;
            }
        }
        checkedRow[index] = rows[i];
        index++;

    }
    secondCheckBoxLength = boolCheck.length;
    for (let i = 0; i < secondCheckBoxLength; i++) {
        console.log("여깁니다!")
        console.log(boolCheck[i]);
        if (boolCheck[i] !== undefined) {
            if (boolCheck[i] !== false) {
                console.log("여깁니다2!")
                console.log(boolCheck[i] === false);
                checkedRow[index] = i;
                index++;
            }
        }

    }

    return checkedRow;
}

export default GetCheckedRow
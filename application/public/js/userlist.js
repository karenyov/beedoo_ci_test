function UserList() {
    this.init = function () {
        this.$dtable = new BeedooDatatable('#table', '/users/get', {});
        this.$dtable.settings = { columnDefs: [
            {   
                targets: 2, //index of column
                render: function (data) {
                    var newData = new Date(data); 
                    return newData.toLocaleString();            
                }
            }
        ]};
        this.$dtable.init();
        console.log(this.$dtable);
    }
}

userList = new UserList();

$(document).ready(function () {
    userList.init();
});
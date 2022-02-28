$(function() {
    debugger
    $.getJSON("employees.json", function(json) {
        var Users = '';
        var SUsers = '';
        var WFM = '';
        var srno = 1;
        var sno = 1; 
        var SNO = 1;
        // ITERATING THROUGH OBJECTS
        $.each(json.users, function (key, value) {
            if(value.role ==1)
            {    
            debugger 
            srno = $("#users tbody tr").length +1;
            Users += '<tr>';
            Users += '<td>'
                  + srno + '</td>';
            Users += '<td>' +
                value.firstName + '</td>';
            Users += '<td>' +
                value.lastName + '</td>';
            Users += '<td>' +
                value.role + '</td>';
            Users += '<td> <button type="button" class = "btn btn-danger btnDelete">Delete</button></td>'
            Users += '</tr>';
            $("#btnadd").click(function(){
                var firstname = $("#firstnameinput").val().trim();
                var secondname = $("#lastnameinput").val().trim();
                var selectedrole = $("#roleselect").val().trim();
                if(validate()){        
                    srno = $("#users tbody tr").length +1;
                    var Dynamictr ="<tr><td>" + srno +"</td><td>" + firstname + "</td><td>" + secondname + "</td><td>" + selectedrole + "</td>" + '<td> <button type="button" class="  btnDelete btn btn-danger">Delete</button></td>'+"</tr>";
                     if(selectedrole ==1)
                    {
                    $('#add-user-modal').modal('hide');
                    $("#users").append(Dynamictr);
                    alert("record inserted");
                    $("#firstnameinput").val(" ");
                    $("#lastnameinput").val(" ");
                    $("#roleselect").val(" ");
                    }
            }    
            });
            $('#users').append(Users);
            Users='';
        }
       else if(value.role ==2)
            {         
                sno = $("#senior-users tbody tr").length +1;
                SUsers += '<tr>';
                SUsers += '<td>' 
                         + sno + '</td>';
                SUsers += '<td>' +
                    value.firstName + '</td>';
                SUsers += '<td>' +
                    value.lastName + '</td>';
                SUsers += '<td>' +
                    value.role + '</td>';
                SUsers += '<td> <button type="button" class=" btnDelete btn btn-danger">Delete</button></td>'
                SUsers += '</tr>';
                $("#btnadd").click(function(){
                    var firstname = $("#firstnameinput").val().trim();
                    var secondname = $("#lastnameinput").val().trim();
                    var selectedrole = $("#roleselect").val().trim();
                    if(validate()){
                        sno= $("#senior-users tbody tr").length + 1 ;
                        var Dynamictr ="<tr><td>" + sno +"</td><td>" + firstname + "</td><td>" + secondname + "</td><td>" + selectedrole + "</td>" + '<td> <button type="button" class="  btnDelete btn btn-danger">Delete</button></td>'+"</tr>";
                        if(selectedrole ==2)
                        {
                        $('#add-user-modal').modal('hide');    
                        $("#senior-users").append(Dynamictr);
                        alert("record inserted");
                        $("#firstnameinput").val(" ");
                        $("#lastnameinput").val(" ");
                        $("#roleselect").val(" ");
                      
                    }}
                     });
                $('#senior-users').append(SUsers);  
                SUsers='';
            }
            else if(value.role ==3)
            {  
                SNO = $("#wfm-users tbody tr").length +1;  
                WFM += '<tr>';
                WFM += '<td>'
                        + SNO + '</td>';
                WFM += '<td>' +
                    value.firstName + '</td>';
                WFM += '<td>' +
                    value.lastName + '</td>';
                WFM += '<td>' +
                    value.role + '</td>';
                WFM += '<td> <button type="button" class="btn btn-danger btnDelete">Delete</button></td>'
                WFM += '</tr>';
                $("#btnadd").click(function(){
                    var firstname = $("#firstnameinput").val().trim();
                    var secondname = $("#lastnameinput").val().trim();
                    var selectedrole = $("#roleselect").val().trim();
                    if(validate()){
                        SNO = $("#wfm-users tbody").children().length + 1 ;    
                        var Dynamictr ="<tr><td>" + SNO +"</td><td>" + firstname + "</td><td>" + secondname + "</td><td>" + selectedrole + "</td>" + '<td> <button type="button" class="  btnDelete btn btn-danger ">Delete</button></td>'+"</tr>";
                        if(selectedrole  ==3)
                        {
                        $('#add-user-modal').modal('hide');      
                        $("#wfm-users").append(Dynamictr);
                        alert("Record inserted");
                        $("#firstnameinput").val(" ");
                        $("#lastnameinput").val(" ");
                        $("#roleselect").val(" ");
                    }}
                     });
                $('#wfm-users').append(WFM);
                WFM='';
            }
            //CONSTRUCTION OF ROWS HAVING
            // DATA FROM JSON OBJECT
        });
        $(document).ready(function(){
            $("#users").on('click','.btnDelete',function(){
                alert("Are your sure you want to delete ");
                 $(this).closest('tr').remove();
                 AddSeialNo();
            });
        });
$(document).ready(function(){
    $("#senior-users").on('click','.btnDelete',function(){
      alert("Are your sure you want to delete ");
         $(this).closest('tr').remove();
         AddNo();
        });
    });
        $(document).ready(function(){
            $("#wfm-users").on('click','.btnDelete',function(){
                 alert("Are your sure you want to delete ");
                  $(this).closest('tr').remove();
                  AddSerial();
                });

        });
})
});
$(document).ready(function(){
    $("#search-user").keyup(function(){
        search_table($(this).val());        
});
    function search_table(value){
        $("#users tr").each(function(){
         var found = 'false';
         $(this).each(function()
         {
             if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >=0)
             {
                 found = 'true';
             }
         });
         if(found == 'true')
         {
             $(this).show();
         }
         else
         {
             $(this).hide();
         }
        });
    }
});
$(document).ready(function(){
    $("#search-user").keyup(function(){
        search_table($(this).val());        
});
    function search_table(value){
        $("#senior-users tr").each(function(){
         var found = 'false';
         $(this).each(function()
         {
             if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >=0)
             {
                 found = 'true';
             }
         });
         if(found == 'true')
         {
             $(this).show();
         }
         else
         {
             $(this).hide();
         }
        });
    }
});
$(document).ready(function(){
    $("#search-user").keyup(function(){
        search_table($(this).val());        
});
    function search_table(value){
        $("#wfm-users tr").each(function(){
         var found = 'false';
         $(this).each(function()
         {
             if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >=0)
             {
                 found = 'true';

             }
         });
         if(found == 'true')
         {
             $(this).show();
         }
         else
         {
             $(this).hide();
         }
        });
    }
});
function validate()
{
    var firstname =$("#firstnameinput").val();
    var secondname =$("#lastnameinput").val();
     if(firstname ==  "" || secondname == "") 
    {
       $("#spi1").show();
        return false;
    }
    else
    {
        $("#spi1").hide();
        return true;
    }
}
function AddSeialNo(){

    $("#users tbody tr").each(function(index){
        $(this).find('td:nth-child(1)').html(index+1);
    })
}
function AddNo(){

    $("#senior-users tbody tr").each(function(index){
        $(this).find('td:nth-child(1)').html(index+1);
    })
}
function AddSeial(){

    $("#wfm-users tbody tr").each(function(index){
        $(this).find('td:nth-child(1)').html(index+1);
    })
}

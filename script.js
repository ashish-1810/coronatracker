$(function (){
    var $body = $('#body');
    var $update = $('#update');

    $.ajax({
        type: 'GET',
        url: 'https://api.covid19india.org/data.json',
        success: function(data) {
            $.each(data['statewise'], function(i, updates){
                $body.append('<tr><td style="border-color: grey;">' + (i+1) + '</td><td style="border-color: grey;">' + updates.state + '</td><td style="border-color: red;">' + updates.confirmed + '<br><div style="color: red;"><i class="fas fa-arrow-up fa-sm" style="color: red;"></i>' + updates.deltaconfirmed + '</div></td><td style="border-color: blue;">' + updates.active + '</td><td style="border-color: olive;">'+ updates.deaths + '<br><div style="color: olive;"><i class="fas fa-arrow-up fa-sm" style="color: olive;"></i>' + updates.deltadeaths + '</div></td><td style="border-color: green;">' + updates.recovered + '<br><div style="color: green;"><i class="fas fa-arrow-up fa-sm" style="color: green;"></i>' + updates.deltarecovered + '</div></td></tr>');
            });

            $update.append('<div>Last Updated at: ' + data['statewise'][0]['lastupdatedtime'] + '</div>');
        }
    });

    let $districtbody = $('#districtbody');

    $.ajax({
        type: 'GET',
        url: 'https://api.covid19india.org/state_district_wise.json',
        success: function(result) {
            $.each(result['Gujarat']['districtData'], function(i, updates){
                $districtbody.append('<tr><td style="border-color: grey;">' + i + '</td><td style="border-color: red;">' + updates.confirmed + '<br><div style="color:red;"><i class="fas fa-arrow-up fa-sm" style="color: red;"></i>' + updates['delta'].confirmed + '</div></td><td style="border-color: blue;">' + updates.active + '</td><td style="border-color: olive;">' + updates.deceased + '<br><div style="color: olive;"><i class="fas fa-arrow-up fa-sm" style="color: olive;"></i>' + updates['delta'].deceased + '</div></td><td style="border-color: green;">' + updates.recovered + '<br><div style="color:green;"><i class="fas fa-arrow-up fa-sm" style="color: green;"></i>' + updates['delta'].recovered + '</div></td></tr>');
            });
        }
    });
});
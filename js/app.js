

$(".show-sidebar").click(function(){
   $(".sidebar").animate({marginLeft : 0 } )
  
});

$(".hide-sidebar").click(function(){
    $(".sidebar").animate({marginLeft : "-100%"} , 1000)
   
 });

 $(".counter-up").counterUp({
   delay: 20,
   time: 2000
});

function go(url){
   setTimeout(function(){
      location.href = `${url}`;
   } , 500);
}

let dateArr = ["Jul 21","Jul 20","Jul 19","Jul 18","Jul 17","Jul 16","Jul 15","Jul 14","Jul 13","Jul 12","Jul 11"];
let orderCountArr = [ 7, 5, 6, 4, 6, 4, 8, 6, 8, 9, 6];
let viewerCountArr=[13,12,15,14,20,17,19,16,23,33,16];

const ctx = document.getElementById('ov').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dateArr,
        // for orderCoundArr
        datasets: [ 
            {
                label: 'Order Count',
                data: orderCountArr,
                fill: true,
                backgroundColor: [
                    "#0dcaf020"
                ],
                borderColor: [
                    "#0dcaf0"
                ],
                borderWidth: 1,

                tension: 0.3
            } ,
        
        
            //For viewerCountArr
        
            {
                label: 'Viewer Count',
                data: viewerCountArr,
                fill: true,
                backgroundColor: [
                    "#6f42c120"
                ],
                borderColor: [
                    "#6f42c1"
                ],
                borderWidth: 1,

                
            }
        
        ]

    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                }
                    
            },
            x: {
                grid: {
                    display: false
                }
            }
        },

        plugins: {
            legend: {
    
                labels: {
                    usePointStyle: true,
                    
                }
            }
        }
    }
});

let places =  [ "MYD" , "YGN" , "NPT" , "SHAN" ];
let orderFromPlace = [5,15,4,9,7];


const op = document.getElementById('op').getContext('2d');
const opChart = new Chart(op, {
    type: 'doughnut',
    data: {
        labels: places,
        datasets: [{
            label: '# of Votes',
            data: orderFromPlace,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
               
                    display: false
                
            },
            x:  {
                
                    display: false
                
            }
        },

        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    
                },
                position: "bottom"
            }
        }
    }
});


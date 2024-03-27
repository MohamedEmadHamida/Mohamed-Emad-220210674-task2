<?php
// student data array
$tools = [
    [
        'fname' => 'Ahmed',
        'id' => '215',
        'grade' => '50'
    ],
    [
        'fname' => 'Ahmed2',
        'id' => '216',
        'grade' => '70'
    ],
    [
        'fname' => 'Ahmed2',
        'id' => '2156',
        'grade' => '110'
    ],
    [
        'fname' => 'Ahmed5',
        'id' => '2116',
        'grade' => '5.1'
    ],[
        'fname' => 'Ahmed',
        'id' => '21695',
        'grade' => '50'
    ]
];

// Loop through the data and generate table rows + counter
$count = 0;
$durationdelay = 0.2;
foreach ($tools as $tool) {
    $durationdelay += 0.1;
    $count += 1;
    echo '<div class="card wow slideInLeft" data-wow-duration="0.8s" data-wow-delay="' . $durationdelay . 's">';
    echo '<div class="index">' . $count . '</div>';
    echo '<div class="name">' . $tool['fname'] . '</div>';
    echo '<div class="stdid"> <input  type="number" id="stdid' . $count . '" readonly name="stdid" value="' . $tool['id'] . '"> </div>';
    echo '<div class="stdgrade"><input type="number" id="stdgrade' . $count . '" name="stdgrade' . $count . '" value="' . $tool['grade'] . '" step="1" min="0" max="40" ></div>';
    echo '<div class="stdgrade"><input type="number" id="stdgrade1' . $count . '" name="stdgrade1' . $count . '" value="' . $tool['grade'] . '" step="1" min="0" max="60" ></div>';

    echo '<div class="gpa" id="pres' . $count . '"></div>'; 
    echo '<div class="mark" id="ga' . $count . '"> </div>'; 
    echo '</div>'; // Closing the 'card' div
}
echo '<input type="hidden" id="count" value="' . $count . '" >';
$durationdelay = 0.2;

?>
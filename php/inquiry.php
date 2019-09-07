<?php
$name = $_POST["name"];
$uid = $_POST["uid"];
$json = array('status' => 0);
require 'conn.php';
$face = array(
    array(
        "type" => "面试",
        "time" => "9月20日 21:30 紫崧十栋四楼东公房"
    )
);
$test = array(
    array(
        "type" => "面试",
        "time" => "9月19日 21:30 紫崧十栋四楼东公房"
    )
);


$sql = "SELECT `name`, `office`, `editor`, `media`, `echo`, `bird`, COUNT(`name`) FROM `recruit` WHERE `uid`='$uid'";
$result = $conn->query($sql);
if ($result) {
    $row = $result->fetch_assoc();
    if ($row['COUNT(`name`)'] == 0)
        $json['status'] = -1;
    else if ($row['name'] != $name)
        $json['status'] = -2;
    else {
        $json['status'] = 1;
        $json['inquiry'] = [];
        $depart = ['office', 'editor', 'media', 'echo', 'bird'];
        foreach ($depart as $key => $val)
            if ($row[$val] != "0")
                array_push($json['inquiry'], array(
                    "name" => $val,
                    "status" => $row[$val],
                    "test" => $key <= 2 ? $face : $test
                ));
    }
}
echo json_encode($json);

$conn->close();

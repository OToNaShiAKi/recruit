<?php
$name = $_POST["name"];
$uid = $_POST["uid"];
$json = array('status' => 0);

require 'conn.php';

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
        $json['inquiry'] = array();
        if ($row['office'] != "0")  $json['inquiry']['office'] = $row['office'];
        if ($row['editor'] != "0")  $json['inquiry']['editor'] = $row['editor'];
        if ($row['media'] != "0")  $json['inquiry']['media'] = $row['media'];
        if ($row['echo'] != "0")  $json['inquiry']['echo'] = $row['echo'];
        if ($row['bird'] != "0")  $json['inquiry']['bird'] = $row['bird'];
    }
}
echo json_encode($json);

$conn->close();

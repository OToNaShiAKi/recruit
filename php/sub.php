<?php
$name = $_POST["name"];
$uid = $_POST["uid"];
$tel = $_POST["tel"];
$qq = $_POST["qq"];
$depart = $_POST["depart"];

$office = in_array("office", $depart) ? "未面试" : 0;
$editor = in_array("editor", $depart) ? "未面试" : 0;
$media = in_array("media", $depart) ? "未面试" : 0;
$echo = in_array("echo", $depart) ? "未面试" : 0;
$bird = in_array("bird", $depart) ? "未面试" : 0;

require 'conn.php';

$sql = "SELECT COUNT(`uid`) FROM `recruit` WHERE `uid`='$uid'";
$result = $conn->query($sql);
if ($result) {
    $row = $result->fetch_assoc();
    if ($row["COUNT(`uid`)"] == 0) {
        $sql = "INSERT INTO `recruit` (`name`, `uid`, `tel`, `qq`, `office`, `editor`, `media`, `echo`, `bird`)
                VALUES ('$name', '$uid', '$tel', '$qq', '$office', '$editor', '$media', '$echo', '$bird')";
        $result = $conn->query($sql);
        if ($result) echo 1;
        else echo 0;
    } else echo -1;
} else echo 0;

$conn->close();
